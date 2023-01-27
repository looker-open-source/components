"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Inline;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _Form = require("../../Form");

function Inline() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Fieldset, {
    fieldsHideLabel: true,
    legend: "Group 1"
  }, _react["default"].createElement(_Form.FieldText, {
    label: "First Label"
  }), _react["default"].createElement(_Form.FieldText, {
    label: "Second Label"
  }), "Override the `fieldsHideLabel` prop in the parent:", _react["default"].createElement(_Form.FieldText, {
    label: "Third Label",
    hideLabel: false
  })), _react["default"].createElement(_.Fieldset, {
    legend: "Group 2"
  }, _react["default"].createElement(_Form.FieldText, {
    label: "First Label",
    hideLabel: true
  }), _react["default"].createElement(_Form.FieldText, {
    label: "Second Label"
  }), _react["default"].createElement(_Form.FieldText, {
    label: "Third Label"
  })));
}
//# sourceMappingURL=HideLabel.js.map