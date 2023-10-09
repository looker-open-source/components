"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListColor = void 0;
var _types = require("../types");
var isListColor = function isListColor(color) {
  return color ? _types.listItemColorOptions.includes(color) : false;
};
exports.isListColor = isListColor;
//# sourceMappingURL=isListColor.js.map