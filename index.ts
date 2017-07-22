import { InitialRenderBenchmark, Runner } from "chrome-tracing";
import * as fs from "fs";
let browserOpts = process.env.CHROME_BIN ? {
  type: "exact",
  executablePath: process.env.CHROME_BIN
} : {
  type: "system"
};

const config: {
  runCount: number,
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

let runner = new Runner(benchmarks);
runner.run(config.runCount).then((results) => {
  fs.writeFileSync('results/results.json', JSON.stringify(results, null, 2));
}).catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
