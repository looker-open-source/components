"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Basic(props) {
  return _react["default"].createElement(_.TextArea, (0, _extends2["default"])({}, props, {
    placeholder: "Placholder text"
  }));
}
//# sourceMappingURL=Basic.js.map