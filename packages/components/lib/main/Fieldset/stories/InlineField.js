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
  return _react["default"].createElement(_.Fieldset, {
    legend: "This is the Legend"
  }, _react["default"].createElement(_Form.FieldText, {
    inline: true,
    label: "First Label"
  }), _react["default"].createElement(_Form.FieldText, {
    inline: true,
    label: "Second Label"
  }));
}
//# sourceMappingURL=InlineField.js.map