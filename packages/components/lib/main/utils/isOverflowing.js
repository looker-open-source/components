"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOverflowing = void 0;

var isOverflowing = function isOverflowing(node) {
  return node.offsetWidth < node.scrollWidth;
};
exports.isOverflowing = isOverflowing;
//# sourceMappingURL=isOverflowing.js.map