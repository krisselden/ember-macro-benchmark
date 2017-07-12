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

#### Setup marks in application

- Instrument `performance.mark` for:
  - domLoading (label ‘load’)
  - beforeVendor (label ‘boot’)
  - willTransition (label ‘transition’)
  - didTransition (label ‘render’)

Add the following to your `app/router.js`

```js
let Router = Ember.Router.extend({
  willTransition() {
    this._super(...arguments);
    if (!get(this, 'fastboot.isFastBoot')) {
      performance.mark('willTransition');
    }
  },

  didTransition() {
    this._super(...arguments);
    if (!get(this, 'fastboot.isFastBoot')) {
      performance.mark('didTransition');
    }
  }
});
```

Place the following directly above vendor.js tag in your `app/index.html`

```
<script>performance.mark("beforeVendor");</script>
```

Then in your leafmost route of your application add the following measure to your `afterModel` hook:

```js
export function renderEnd() {
  requestAnimationFrame(() => {
    performance.mark('beforePaint');

    requestAnimationFrame(() => {
      performance.mark('afterPaint');

      if (location.search === '?perf.tracing')) {
        document.location.href = 'about:blank';
      }
    });
  });
}
```
