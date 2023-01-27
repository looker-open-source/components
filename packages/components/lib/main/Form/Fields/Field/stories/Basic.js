"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Field = require("../../Field");
var _Inputs = require("../../../Inputs");
var _Layout = require("../../../../Layout");

function Basic(props) {
  var id = 'coolField';
  return _react["default"].createElement(_Field.Field, (0, _extends2["default"])({
    id: id,
    label: "A combo field",
    description: "Please fill out both inputs",
    detail: "with 2 inputs",
    validationMessage: {
      message: 'An error message',
      type: 'error'
    },
    width: 300
  }, props), _react["default"].createElement(_Layout.Space, {
    gap: "u3"
  }, _react["default"].createElement(_Inputs.InputText, {
    id: id,
    "aria-describedby": "".concat(id, "-describedby"),
    width: 100
  }), _react["default"].createElement(_Inputs.InputText, {
    id: id,
    "aria-describedby": "".concat(id, "-describedby"),
    validationType: 'error'
  })));
}
//# sourceMappingURL=Basic.js.map