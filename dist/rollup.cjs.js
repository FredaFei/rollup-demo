/*!
 * rollup.js v1.0.0
 * (c) 2018-2019 freda
 * Released under the MIT License.
 */
'use strict';

var version = "1.0.0";

var hi = 'hello world!';

function logA() {
  console.log('function logA called');
  return 12;
}

function main () {
  console.log('version ' + version);
  return logA() + hi;
}

module.exports = main;
