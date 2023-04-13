"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemSelectedColor = void 0;
var _lighten = _interopRequireDefault(require("polished/lib/color/lighten"));

var itemSelectedColor = function itemSelectedColor(color) {
  return (0, _lighten["default"])(0.04, color);
};
exports.itemSelectedColor = itemSelectedColor;
//# sourceMappingURL=itemSelectedColor.js.map