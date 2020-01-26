import { InitialRenderBenchmark, Runner } from "@tracerbench/core";
import * as networkEmulationConditions from "network-emulation-conditions";
import * as fs from "fs-extra";

const config: {
  runCount: number;
  networkCondition: string;
  cpuThrottleRate: number;
  servers: Array<{ name: string; port: number; networkCondition: string }>;
} = JSON.parse(fs.readFileSync("config.json", "utf8"));

let benchmarks = config.servers.map(({ name, port }) => {
  let options = {
    name,
    url: `http://localhost:${port}/?perf.tracing`,
    markers: [
      { start: "domLoading", label: "load" },
      { start: "beforeVendor", label: "boot" },
      { start: "willTransition", label: "transition" },
      { start: "didTransition", label: "render" }
    ],
    runtimeStats: false
  };

  let networkConditions = networkEmulationConditions[config.networkCondition];

  if (networkConditions) {
    options["networkConditions"] = {
      offline: false,
      latency: networkConditions.latency,
      downloadThroughput: networkConditions.download,
      uploadThroughput: networkConditions.upload
    };
  }

  if (config.cpuThrottleRate) {
    options["cpuThrottleRate"] = config.cpuThrottleRate;
  }

  return new InitialRenderBenchmark(options);
});

fs.emptyDir("./results")
  .then(() => {
    let runner = new Runner(benchmarks);
    return runner.run(config.runCount);
  })
  .then(results => {
    fs.writeFileSync("results/results.json", JSON.stringify(results, null, 2));
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
