"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidColor = void 0;

var _d3Color = require("d3-color");

var isValidColor = function isValidColor(color) {
  return (0, _d3Color.rgb)(color).displayable();
};

exports.isValidColor = isValidColor;
//# sourceMappingURL=isValidColor.js.map