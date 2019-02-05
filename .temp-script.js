const fs = require('fs');

let results = require('./results.json');

let classicResults = results[0];
let nativeResults = results[1];

[
  require('./results1.json'),
  require('./results2.json'),
  require('./results3.json'),
  require('./results4.json'),
].forEach(r => {
  classicResults.samples.push(...r[0].samples);
  nativeResults.samples.push(...r[1].samples);
});

fs.writeFileSync('./results/results.json', JSON.stringify(results, null, 2));
