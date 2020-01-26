# ember-macro-bench

A tool for measuring changes in Ember to applications.

This uses [chrome-tracing](https://github.com/krisselden/chrome-tracing) and [har-remix](https://github.com/krisselden/har-remix) to measure the effects of small changes to Ember on applications.

This is also a demonstration of using these tools to measure applications.

## Setup
### Prerequisites

These instructions assume Mac and using homebrew.

Install R
```sh
brew tap homebrew/science
brew install r
```

Run R
```sh
R
```

Then install R packages:

```R
install.packages("jsonlite")
install.packages("R6")
install.packages("ggplot2")
q()
```

Install yarn
```sh
brew install yarn
```

### Install

```sh
git clone git@github.com:krisselden/ember-macro-benchmark.git
cd ember-macro-benchmark
yarn
```

### Run the Server

Edit the `config.json`

* `har`: The emberaddons.com HAR file, the example is a recording of
  emberaddons.com built with Ember 2.13.0-beta.1
* `runCount`: Number of benchmarks to run
* `cpuThrottleRate`: Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc).
* `networkCondition`: Configurations for combinations of latency/downloadThroughput/uploadThroughput.  Presets are taken from [addyosmani/network-emulation-conditions](https://github.com/addyosmani/network-emulation-conditions)
  * Available options: `GPRS`, `REGULAR_2G`, `GOOD_2G`, `REGULAR_3G`, `GOOD_3G`, `REGULAR_4G`, `DSL`, `WIFI`.
* `servers`
  * `name`: Name of the server
  * `port`: Port for the server to run on
  * `dist`: path to full emberaddons.com build. Use this when testing ember
    versions that require wire format changes. Note that you *must* use an
    unfingerprinted production build.
  * `ember`: path to an ember dist to splice into the vendor.js, the example
    results were tested against Ember commit 2c45a3b.

Caveat: the templates are in the recorded app, you can only test with an Ember with compatible template wire-format as the recording unless you add a `dist` to the server

```sh
yarn run serve
```

### Run the Benchmark

While the app is being served, run:

```sh
yarn run bench
```

### Generate the Report

To generate the report run:

`yarn run plot`

Which will generate a PDF in the `results` folder with the reports from Chrome Tracing.  It contains several graphs and plots for. Here are a few resources to help you read them:

* [Wilcoxon rank-sum test](https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test)
* [Null Hypothesis](https://en.wikipedia.org/wiki/Null_hypothesis)


If you'd like to see a smaller summary in your CLI you can run:

`yarn run report`

Which will give you an abbreviated report.
