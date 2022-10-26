"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeClassNames = void 0;

var mergeClassNames = function mergeClassNames(classNames) {
  return classNames.join(' ').trim().replace(/\s\s+/g, ' ');
};

exports.mergeClassNames = mergeClassNames;
//# sourceMappingURL=mergeClassNames.js.map