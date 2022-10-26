"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleChevronLeftDimensions = exports.DoubleChevronLeft = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

var DoubleChevronLeft = _react["default"].forwardRef(function (props, ref) {
  var attrs = {
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg'
  };
  return _react["default"].createElement(_styledIcon.StyledIconBase, (0, _extends2["default"])({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), _react["default"].createElement("path", {
    d: "M18.4102 7.41L13.8302 12L18.4102 16.59L17.0002 18L11.0002 12L17.0002 6L18.4102 7.41Z"
  }), _react["default"].createElement("path", {
    d: "M13.4102 7.41L8.83016 12L13.4102 16.59L12.0002 18L6.00016 12L12.0002 6L13.4102 7.41Z"
  }));
});

exports.DoubleChevronLeft = DoubleChevronLeft;
DoubleChevronLeft.displayName = 'DoubleChevronLeft';
var DoubleChevronLeftDimensions = {
  height: 24,
  width: 24
};
exports.DoubleChevronLeftDimensions = DoubleChevronLeftDimensions;
//# sourceMappingURL=DoubleChevronLeft.js.map