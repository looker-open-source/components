"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AccordionControlled;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _2 = require("../../");

function AccordionControlled() {
  return _react["default"].createElement(_.Fieldset, {
    legend: "This is the Legend",
    accordion: true,
    defaultOpen: true,
    onOpen: function onOpen() {
      return alert('Opening the pod bay doors');
    },
    onClose: function onClose() {
      return alert('Closing the pod bay doors');
    }
  }, _react["default"].createElement(_2.FieldCheckbox, {
    name: "box1",
    label: "you can click here"
  }), _react["default"].createElement(_2.FieldCheckbox, {
    name: "box2",
    label: "here too"
  }), _react["default"].createElement(_2.FieldCheckbox, {
    name: "box3",
    label: "also here"
  }));
}
//# sourceMappingURL=AccordionControlled.js.map