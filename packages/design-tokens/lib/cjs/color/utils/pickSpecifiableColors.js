"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickSpecifiableColors = void 0;

var _pick = _interopRequireDefault(require("lodash/pick"));

var _types = require("../types");

var pickSpecifiableColors = function pickSpecifiableColors(colors) {
  return (0, _pick["default"])(colors, _types.specifiableColors);
};

exports.pickSpecifiableColors = pickSpecifiableColors;
//# sourceMappingURL=pickSpecifiableColors.js.map