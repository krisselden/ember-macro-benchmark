import { InitialRenderBenchmark, Runner } from "chrome-tracing";
import * as fs from "fs-extra";

let browserOpts = process.env.CHROME_BIN ? {
  type: "exact",
  executablePath: process.env.CHROME_BIN
} : {
  type: "system"
};

const config: {
  servers: Array<{ name: string, port: number }>;
} = JSON.parse(fs.readFileSync("config.json", "utf8"));

let benchmarks = config.servers.map(({ name, port }) => new InitialRenderBenchmark({
  name,
  url: `http://localhost:${port}/?perf.tracing`,
  markers: [
    { start: "domLoading", label: "load" },
    { start: "beforeVendor", label: "boot" },
    { start: "willTransition", label: "transition" },
    { start: "didTransition", label: "render" }
  ],
  browser: browserOpts,
  runtimeStats: true
}));

fs.emptyDir('./results')
  .then(()=> {
    let runner = new Runner(benchmarks);
    return runner.run(40)
  })
  .then((results) => {
    fs.writeFileSync('results/results.json', JSON.stringify(results, null, 2));
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
