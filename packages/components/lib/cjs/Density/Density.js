"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DensityNegative3 = exports.DensityNegative2 = exports.DensityNegative1 = exports.Density1 = exports.Density0 = exports.Density = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var Density = function Density(_ref) {
  var scale = _ref.scale,
      children = _ref.children;
  var theme = (0, _styledComponents.useTheme)();
  theme.defaults.density = scale;
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, children);
};

exports.Density = Density;

var Density1 = function Density1(props) {
  return _react["default"].createElement(Density, (0, _extends2["default"])({
    scale: 1
  }, props));
};

exports.Density1 = Density1;

var Density0 = function Density0(props) {
  return _react["default"].createElement(Density, (0, _extends2["default"])({
    scale: 0
  }, props));
};

exports.Density0 = Density0;

var DensityNegative1 = function DensityNegative1(props) {
  return _react["default"].createElement(Density, (0, _extends2["default"])({
    scale: -1
  }, props));
};

exports.DensityNegative1 = DensityNegative1;

var DensityNegative2 = function DensityNegative2(props) {
  return _react["default"].createElement(Density, (0, _extends2["default"])({
    scale: -2
  }, props));
};

exports.DensityNegative2 = DensityNegative2;

var DensityNegative3 = function DensityNegative3(props) {
  return _react["default"].createElement(Density, (0, _extends2["default"])({
    scale: -3
  }, props));
};

exports.DensityNegative3 = DensityNegative3;
//# sourceMappingURL=Density.js.map