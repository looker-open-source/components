"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckMarkMixed = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../utils");

var CheckMarkMixed = function CheckMarkMixed() {
  var _useTranslation = (0, _utils.useTranslation)('CheckMarkMixed'),
      t = _useTranslation.t;

  return _react["default"].createElement("svg", {
    role: "presentation",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("title", null, t('Check Mark Mixed')), _react["default"].createElement("g", {
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round"
  }, _react["default"].createElement("line", {
    x1: "4",
    y1: "7",
    x2: "10",
    y2: "7"
  })));
};

exports.CheckMarkMixed = CheckMarkMixed;
//# sourceMappingURL=CheckMarkMixed.js.map