"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _Form = require("../../Form");

function Basic() {
  return _react["default"].createElement(_.Fieldset, {
    legend: "This is the Legend"
  }, _react["default"].createElement(_Form.FieldText, {
    label: "First Label"
  }), _react["default"].createElement(_Form.FieldText, {
    label: "Second Label"
  }), _react["default"].createElement(_Form.FieldText, {
    label: "Third Label"
  }));
}
//# sourceMappingURL=Basic.js.map