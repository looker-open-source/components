"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortObjectByKeys = void 0;

var sortObjectByKeys = function sortObjectByKeys(o) {
  return Object.keys(o).sort().reduce(function (obj, key) {
    obj[key] = o[key];
    return obj;
  }, {});
};

exports.sortObjectByKeys = sortObjectByKeys;
//# sourceMappingURL=sortObjectByKeys.js.map