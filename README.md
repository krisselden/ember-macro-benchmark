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
  * If the `dist` property is set you may also set `fingerprinted` to false to
    ensure that assets are correctly served when you have opted out of
    fingerprinting.  If `fingerprinted` is undefined it will assume assets are
    fingerprinted.

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
 controlName = 'controlName'
 experimentName = 'experimentName'
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

#### Generate a HAR file:

It isn't necessary to add the `?perf.tracing` query param to your recording.  Follow the steps below to generate a HAR file for use with EMB.

##### Chrome instructions

To generate a HAR file download and install [Chrome](https://www.google.com/chrome/)

Once you have Chrome installed:

* Open developer tools
* Start your server
* Clear any persistent network logs
* Navigate to the page you'd like to bench
* In the "Network" panel right-click inside the pane where the network requests are shown
* Select "Save as HAR with Content"

![](http://i.imgur.com/nyDUR8A.png)


##### Firefox instructions

To generate a HAR file download and install [Firefox](https://www.mozilla.org).

Once you have Firefox installed:

* Start your server.
* Clear the network pane from the Firefox devtools by clicking the trash icon to the left.
* Navigate to the page you'd like to bench
* In Firefox's network panel right-click anywhere inside the "File" column
* Select "Save All As HAR"

![](http://i.imgur.com/4GMXHnF.png)
