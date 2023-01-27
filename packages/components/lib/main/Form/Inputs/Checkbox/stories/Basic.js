"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Checkbox = require("../Checkbox");

function Basic(props) {
  return _react["default"].createElement(_Checkbox.Checkbox, (0, _extends2["default"])({
    name: "someName",
    id: "someId"
  }, props));
}
//# sourceMappingURL=Basic.js.map