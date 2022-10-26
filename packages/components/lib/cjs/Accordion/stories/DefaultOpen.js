"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DefaultOpen;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function DefaultOpen() {
  return _react["default"].createElement(_.Accordion, {
    defaultOpen: true,
    content: _react["default"].createElement(_.Fieldset, null, _react["default"].createElement(_.Fieldset, {
      inline: true
    }, _react["default"].createElement(_.FieldText, {
      label: "First name"
    }), _react["default"].createElement(_.FieldText, {
      label: "Middle"
    }), _react["default"].createElement(_.FieldText, {
      label: "Last name"
    })), _react["default"].createElement(_.FieldText, {
      label: "Email"
    }), _react["default"].createElement(_.FieldText, {
      label: "Phone"
    }))
  }, "Advanced Options");
}
//# sourceMappingURL=DefaultOpen.js.map