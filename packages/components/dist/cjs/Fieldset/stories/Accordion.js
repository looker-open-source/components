"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Accordion;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _Form = require("../../Form");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Accordion() {
  return _react["default"].createElement(_.Fieldset, {
    legend: "This is the Legend",
    accordion: true
  }, _react["default"].createElement(_Form.FieldCheckbox, {
    name: "box1",
    label: "you can click here"
  }), _react["default"].createElement(_Form.FieldCheckbox, {
    name: "box2",
    label: "here too"
  }), _react["default"].createElement(_Form.FieldCheckbox, {
    name: "box3",
    label: "also here"
  }));
}
//# sourceMappingURL=Accordion.js.map