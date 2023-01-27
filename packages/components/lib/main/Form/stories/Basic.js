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
  return _react["default"].createElement(_.Form, (0, _extends2["default"])({
    validationMessages: {
      alpha: {
        message: 'This is an error',
        type: 'error'
      },
      bravo: {
        message: 'This is another error',
        type: 'error'
      }
    }
  }, props), _react["default"].createElement(_.FieldText, {
    label: "Alpha",
    name: "alpha"
  }), _react["default"].createElement(_.FieldText, {
    label: "Bravo",
    name: "bravo"
  }), _react["default"].createElement(_.FieldText, {
    label: "Charlie",
    name: "charlie"
  }), _react["default"].createElement(_.Button, null, "Submit"));
}
//# sourceMappingURL=Basic.js.map