import HARRemix from "har-remix";
import * as HAR from "@tracerbench/har";
import * as url from "url";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import { walk } from "estree-walker";
import { parse } from "acorn";
import * as estree from "estree";

declare const gc: {
  (full: boolean): void;
};

const DIST_REGEX = /^GET\/(.+)(\.js)$/;
const KEY_FINGERPRINT = /-[0-9a-fA-Z]{31,32}\./;

const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
config.servers.forEach(server => {
  startServer(server.name, config.har, server.port, (key, text) => {
    if (!key.startsWith("GET/")) {
      return;
    }

    if (server.dist) {
      let matches = key.match(DIST_REGEX);
      if (!matches) {
        return text;
      }
      let asset = matches[1] + matches[2];
      let localPath = path.join(server.dist, asset);

      console.log("");
      if (fs.existsSync(localPath)) {
        console.log("Looked up on disk: ", localPath);
        return fs.readFileSync(localPath, { encoding: "utf-8" });
      } else {
        console.log("Failed to load: ", localPath);
        console.log("Falling through");
      }
    } else if (server.ember) {
      if (/GET\/assets\/vendor(?:-[0-9a-fA-Z]{31,32})?\.js/.test(key)) {
        return replaceEmber(text, server.ember);
      }
    }

    return text;
  });
});

function replaceProtocolAndDomain(text: string, host: string) {
  return text
    .replace(/https:\/\//g, "http://")
    .replace(
      /[a-z\.\-]+\.(?:emberaddons|amazonaws|gravatar|google-analytics|googleapis|trackjs)\.com\b/g,
      host
    );
}

function key(method: string, url: url.Url) {
  // ignore query on root
  if (url.pathname === "/") {
    return method + url.pathname;
  }
  // allow loose GET match on fingerprint
  if (method === "GET") {
    return "GET" + url.path.replace(KEY_FINGERPRINT, ".");
  }
  return method + url.path;
}

function startServer(
  name: string,
  archivePath: string,
  port: number,
  vary?: (key: string, text: string) => string
) {
  let host = `localhost:${port}`;

  function keyForArchiveEntry(entry: HAR.Entry) {
    let { request, response } = entry;
    let { status } = response;
    if (status >= 200 && status < 300 && request.method !== "OPTIONS") {
      return key(request.method, url.parse(request.url));
    }
  }

  function keyForServerRequest(
    request: http.IncomingMessage
  ): string | undefined {
    return key(request.method, url.parse(request.url));
  }

  function textFor(entry: HAR.Entry, key: string, text: string): string {
    if (entry.request.method !== "GET") return text;

    if (key === "GET/analytics.js" || key === "GET/ember-cli-live-reload.js") {
      return "";
    }

    if (key === "GET/") {
      text = text.replace(/integrity="[^"]+"/g, "");
      text = text.replace(/\/assets\/favicon-\w+\.png/, "/assets/favicon.png");
      text = text.replace(
        "https%3A//io-builtwithember-addons-data.s3.amazonaws.com",
        "http%3A//" + host
      );
      return replaceProtocolAndDomain(text, host);
    }

    if (vary) {
      text = vary(key, text);
    }

    return replaceProtocolAndDomain(text, host);
  }

  let harRemix = new HARRemix({
    keyForArchiveEntry,
    keyForServerRequest,
    textFor
  });

  harRemix.loadArchive(archivePath);

  let favicon = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAGl0lEQVR4AX2W22+lVfnHv8/zrHd3t9PpYfobpMA0ZVBoEOHHKTOAEyBB4iHBC7kwMZ4Sb73Rv8A7b7zySrnXGAOJJiqGKCgHR0chBIgOBzsyHTpTZqYt7e7e+33X83x9V9pSCoOfi7WTnazPp+86vLvyzre+4B6qEChaGM5IlrJnU3WnqqgaSZDZ3cwiaCZsCaopCpI9V6miCEQE9KZRMIZDFSCZhCMiGJE9TLUVJTVAzJQsXgE8IiVtR1MUjaqYuBNoR6+qTqiIqZhCxAS5rqMeKstMqEEUhKgoKaYWKEaAoCoQDIiUpCoF7gEShIBEiAoFpklEnFGcHmga0hM9VCAQAFSAiJ1pFAEDEEKKXAmSABhQLSNJiKgZAyz5AHcWmt4gHEQioIIdtkOMoBA01eBOABBJhvGJND3DqpNSCg+AyE303ou11QgnIyAqGuGiKRgAkql4QJXYNlPMrOyBKSCqDAdVJFU6PTN6zwOjxx6orp2DCAA2dVxa6f/9ud4LT6dLK56zmoIUUMYO+OY6ADn79c8lNSdRgIqggLZhahGhJtIdS0dvnHz0252jN+GjeG7OvLX2kx/G+ro3tQrZGcmXLnLYL8JkCSKmZmoC2X7w8gRW7FaCeuDeBw9987tXtBcsVfM3jD/ytZxrbWrf7MVgwHqAArR1BcO9/cwgRSTnMBEAZpqdoyce7h57wK6axQdgv4fwDzSse+udkp1NjQjUQ+wuSUqqHtxZmTIgaeuNCtI2q0OHxu65v3PDAkSxS++pX208+YRNTI4/9MjofQ+hIHJwKgBhRGT2M3ZRAqoSUcJ0IkcMG/U69zZk2B+94147PItUYRv3/sk/bf7ucT+/5G/9q1l8wy+/i13MjB6iKkLskpCbcEcBERQ6SLC4qNJZuE3HJ7BLbPUGzz+Vz5+jNyEqlqQzggJYlmX3psQHAlEP2WQICkGCAqEAED04UV03LyNdbOPuK+8MX/0HGCDbU6szV+3kGX7hHTIXhQMRe4E8GKb333QCUhxUaKge+MxdOjEBVRTA4WDrxee91wuwGhvv3nlfdf2nsE3T9P7yR9QNgyiFPVJSy3QTFFShmjQFPanZ3LykCrswN7H4Zqimbrd7/+cPfvHRnaMV4ReXt558Itd10RD7AjnyyMxhQAIcWbi1ump28NqLeek/2X3khpul2guAjHbbb/7/8Ue+2v30Hag6KCA21lZ/+iP2eybiIPYjS18+LlOTDE5+5Rujd33WDl8dw0H9+qvthO4td8rk9N4BjYj1VRkbk1atBoB1nc+8+d4vHtt67SUDvKlBMhzcy6RyZQMq0rn+Rpu9DmraGeneejfJIhLB+6jq1KH3v6nPLg5OPjP46zPN8lKxexYIVRD798DMVCWc4YEgFIWqI7gC23ZfX+298IfmpZPN2UVfWwUCAjWVmZno97m5jpz3AiLSrgmArT//Pi+/nQ7PyvRMmpq2/7saH4KMjfV29Yb/fHl4+lVfOhPDLbJU9eDUyCcX7PA1g1dONf0e9wVAkPToP/fU8PQr1ZH5anYuzV5bzR1N18zpxPTeKjHivbWtp3+z9eJJIQXQqpKR0fYP6szf2D1+QkcP5uWzeXmJ2CNJzpnQlAD4pQt+8Xz98ikBCEx+53tjJx7eu2gQqOUL56upQ3RHMp08lOaOjh1/sHv7cXrO55es3aT9pCY3ChFBi1iianY3IIDmlVO8+8ReQDVdc+TwD35cL50RUiembGpaxsZ34qKinQDZ1Ps3Wa01tla0REClSp3Gy+Hq/+3Z7oNfGlm4Tbqj2EUOjI/cdAs+AiP75QvNv1//UKA1ZxPlNhHiZNOYSlslsPbzx9o5KHP+J2RsbvZPPduceQP7se8vHFGBiIoISIIChnuVqiClt9mcOyNmafaIpOpj7asXN379s43f/pL1EPtJjKAiAoUSEfdQBXMDtVzXXHxjc/D48M3To7cfS0fm0yeuBcDBIF9aaX8MfGW5Xjzd3uf63OI++757QEKk+HdHIhgEG7EUw0Fz7u12BbD6bvt+xsSkikbr6m34xnp70dqDF5ffjaYBeaWAKknBHiVAIchwE6OA9bDdwP7lFYKMENWIMDUAjIBpUTNwJVQALcYgCCBAgZQIUBQMkgAEksNFNACBJDURtAQID6+HdL9yAED2MlMAMky0JKGtjkR4IALunptkJmA7Oj2AKO2d/50EH0tqcrbihIgCbE0qEmRlqXE3hSIAZbEOLVUOmhrDAWmBiKnkTHwM/wUr4jS84/B+CgAAAABJRU5ErkJggg==",
    "base64"
  );
  harRemix.setResponse(
    "GET/assets/favicon.png",
    harRemix.buildResponse(200, "image/png", favicon, false)
  );

  console.log(`starting ${name}`);
  let server = harRemix.createServer();
  server.on("listening", () => {
    if (typeof gc !== "undefined") {
      console.log("GC");
      gc(true);
    }
    console.log(`${name} started at http://localhost:${port}/`);
  });
  server.on("error", e => console.error(e));
  server.listen(port);
}

function replaceEmber(code: string, emberFile: string): string {
  let topiife = null;
  let ember = null;
  let program = parse(code);
  walk(program, {
    enter(node, parent, key) {
      // console.log(stack.length, node.type);
      if (topiife === null) {
        if (
          node.type === "FunctionExpression" &&
          parent.type === "CallExpression" &&
          key === "callee"
        ) {
          topiife = parent;
        }
      } else {
        if (
          isIdentifier(node) &&
          node.name === "Ember" &&
          isMemberExpression(parent) &&
          key === "property" &&
          parent.object.type === "ThisExpression"
        ) {
          ember = topiife;
        }
      }
    },
    leave(node, _parent, _key) {
      if (node === topiife) {
        topiife = null;
      }
    }
  });
  return (
    code.substring(0, ember.start) +
    fs.readFileSync(emberFile, "utf8") +
    code.substring(ember.end)
  );
}

function isMemberExpression(
  node: estree.BaseNode
): node is estree.MemberExpression {
  return node.type === "MemberExpression";
}

function isIdentifier(node: estree.BaseNode): node is estree.Identifier {
  return node.type === "Identifier";
}
