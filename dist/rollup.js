(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.rollup = factory());
}(this, (function () { 'use strict';

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

  return main;

})));
//# sourceMappingURL=rollup.js.map
