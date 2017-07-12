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

Then install ggplot2
```R
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

* har: the emberaddons.com HAR file, the example is a recording of
  emberaddons.com built with Ember 2.13.0-beta.1
* ember: path to an ember dist to splice into the vendor.js, the example
  results were tested against Ember commit 2c45a3b.
* dist: path to full emberaddons.com build. Use this when testing ember
  versions that require wire format changes. Note that you *must* use an
  unfingerprinted production build.

Caveat: the templates are in the recorded app, you can only test with an Ember with compatible template wire-format as the recording.

```sh
yarn run serve
```

### Run the Benchmark

```sh
yarn run bench
```

### Generate the Report

Now we need to update the `report.R` to indicate which of the results are the `control` and `experiment`.

* Update the following line:

```r
experiment = phases[phases$set == '<enter experiment here>' & phases$phase == 'render' & phases$type == 'cumulative',]$ms
control = phases[phases$set == '<enter control here>' & phases$phase == 'render' & phases$type == 'cumulative',]$ms
```

* Run the report:

```sh
./report.R
```

* View the results:

```
open results/*.png
```

### Additional Information

#### Generate a HAR file

To generate a HAR file download and install [Firefox](https://www.mozilla.org) We'll use Firefox to generate the HAR file to workaround a bug in persistent network request logging.

Once you have Firefox install:

* open up the devtools and go to the settings and enable the "Enable persistent logs" setting.  This will ensure that when your application navigates away to `about:blank` the network trafic can still be written as HAR.
* Read the [Basic Usage](https://github.com/krisselden/chrome-tracing#basic-usage) from krisselden/chrome-tracing to ensure that your application will know to `document.location.href='about:blank';` after paint.  And ensure that your application is setup correctly.
* Start your server.
* Clear the network pane from the Firefox devtools by clicking the trash icon to the left.
* Navigate to the page you'd like to bench
* Wait until your application navigates to `about:blank`
* In Firefox's network panel right-click anywhere inside the "File" column
* Select "Save All As HAR"
