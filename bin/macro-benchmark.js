#!/usr/bin/env node
let fs = require("fs-extra");
let path = require("path");
let { stripIndent } = require("common-tags");

require("yargs")
  .usage("$0 <cmd> [args]")
  .command(
    "add-config [name]",
    "Add configuration folder to macro-benchmark repo",
    {
      name: {
        describe:
          "Name of configuration folder. e.g. v3.10.1 or pre-hydration-glimmer."
      }
    },
    addConfig
  )
  .help().argv;

function addConfig(options) {
  let { name } = options;
  let cwd = process.cwd();

  if (fs.existsSync(path.join(cwd, "config"))) {
    let archivePath = path.join(cwd, "config", name, "archives", ".gitkeep");
    fs.outputFileSync(archivePath, "");

    let perProjectConfigFile = path.join(cwd, "config", name, "index.js");
    let perProjectConfig =
      stripIndent`
      module.exports = {
        har: false,
        name: ${name},
        fingerprinted: false
      }` + "\n";
    fs.outputFileSync(perProjectConfigFile, perProjectConfig);
  } else {
    throw new Error("`config` directory does not exist.");
  }
}
