"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Intervals;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _2 = require("../../../../");
var _excluded = ["interval"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Intervals(props) {
  var _intervals = props.interval,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_2.Fieldset, null, _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "5-minute"), _react["default"].createElement(_.InputTimeSelect, _extends({
    interval: 5
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "10-minute"), _react["default"].createElement(_.InputTimeSelect, _extends({
    interval: 10
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "15-minute"), _react["default"].createElement(_.InputTimeSelect, _extends({
    interval: 15
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "60-minute"), _react["default"].createElement(_.InputTimeSelect, _extends({
    interval: 20
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "30-minute"), _react["default"].createElement(_.InputTimeSelect, _extends({
    interval: 30
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "60-minute"), _react["default"].createElement(_.InputTimeSelect, _extends({
    interval: 60
  }, restProps))));
}
//# sourceMappingURL=Intervals.js.map