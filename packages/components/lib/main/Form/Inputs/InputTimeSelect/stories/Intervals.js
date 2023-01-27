"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Intervals;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _2 = require("../../../../");
var _excluded = ["interval"];
function Intervals(props) {
  var _intervals = props.interval,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_2.Fieldset, null, _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "5-minute"), _react["default"].createElement(_.InputTimeSelect, (0, _extends2["default"])({
    interval: 5
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "10-minute"), _react["default"].createElement(_.InputTimeSelect, (0, _extends2["default"])({
    interval: 10
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "15-minute"), _react["default"].createElement(_.InputTimeSelect, (0, _extends2["default"])({
    interval: 15
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "60-minute"), _react["default"].createElement(_.InputTimeSelect, (0, _extends2["default"])({
    interval: 20
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "30-minute"), _react["default"].createElement(_.InputTimeSelect, (0, _extends2["default"])({
    interval: 30
  }, restProps))), _react["default"].createElement(_2.SpaceVertical, {
    gap: "u1"
  }, _react["default"].createElement(_2.Heading, {
    as: "h4"
  }, "60-minute"), _react["default"].createElement(_.InputTimeSelect, (0, _extends2["default"])({
    interval: 60
  }, restProps))));
}
//# sourceMappingURL=Intervals.js.map