"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _Field = require("../../Field");
var _Inputs = require("../../../Inputs");
var _Layout = require("../../../../Layout");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Basic(props) {
  var id = 'coolField';
  return _react["default"].createElement(_Field.Field, _extends({
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