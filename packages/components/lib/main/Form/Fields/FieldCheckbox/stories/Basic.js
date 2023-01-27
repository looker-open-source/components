"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _FieldCheckbox = require("../../FieldCheckbox");

function Basic(props) {
  return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, (0, _extends2["default"])({
    id: "id",
    label: "Example Field",
    name: "thumbsUp"
  }, props));
}
//# sourceMappingURL=Basic.js.map