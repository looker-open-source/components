"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringTransform = void 0;
var _mergeMultiValueNodes = require("./mergeMultiValueNodes");

var stringTransform = function stringTransform(root) {
  return ['match', 'contains', 'startsWith', 'endsWith'].reduce(function (ast, type) {
    return (0, _mergeMultiValueNodes.mergeMultiValueNodes)(ast, type);
  }, root);
};
exports.stringTransform = stringTransform;
//# sourceMappingURL=stringTransform.js.map