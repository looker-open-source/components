"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithLabel;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _2 = require("../../../..");

function WithLabel(props) {
  return _react["default"].createElement(_2.Space, null, _react["default"].createElement(_2.Label, {
    htmlFor: "demo-id"
  }, "Label Text"), _react["default"].createElement(_.InputTime, (0, _extends2["default"])({
    id: "demo-id"
  }, props)));
}
//# sourceMappingURL=WithLabel.js.map