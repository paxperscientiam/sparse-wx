(function(){
var $fsx = (function() {
  function syntheticDefaultExportPolyfill(input) {
    if (input == null || ['function', 'object', 'array'].indexOf(typeof input) === -1) {
      return;
    }
    // use hasOwnProperty to avoid triggering usage warnings from libraries like mobx
    var hasDefaultProperty = Object.prototype.hasOwnProperty.call(input, 'default');
    var hasModuleProperty = Object.prototype.hasOwnProperty.call(input, '__esModule');
    // to get around frozen input
    if (Object.isFrozen(input)) {
      if (!hasDefaultProperty) {
        input['default'] = input;
      }
      if (!hasModuleProperty) {
        input['__esModule'] = true;
      }
      return;
    }
    // free to define properties
    if (!hasDefaultProperty) {
      Object.defineProperty(input, 'default', { value: input, writable: true, enumerable: false });
    }
    if (!hasModuleProperty) {
      Object.defineProperty(input, '__esModule', { value: true });
    }
  }
  var $fsx = {};
  $fsx.f = {};
  $fsx.m = {};
  $fsx.r = function(id) {
    var cached = $fsx.m[id];
    // resolve if in cache
    if (cached) {
      return cached.m.exports;
    }
    var file = $fsx.f[id];
    if (!file) {
      return;
    }
    cached = $fsx.m[id] = {};
    cached.exports = {};
    cached.m = { exports: cached.exports };
    file.call(cached.exports, cached.m, cached.exports);
    syntheticDefaultExportPolyfill(cached.m.exports);
    return cached.m.exports;
  };
  return $fsx;
})();
// default/src/test.js
$fsx.f[1] = (module, exports) => {
"use strict";
var x = function () {
    return 33;
};
//# sourceMappingURL=test.js.map
}
// Importing a single entry
$fsx.r(1);
})()
//# sourceMappingURL=app.js.map