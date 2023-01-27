"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function Basic() {
  return _react["default"].createElement(_.Prompt, {
    cancelColor: "neutral",
    cancelLabel: 'Not into cheese',
    title: 'Choose a cheese!',
    inputLabel: 'Name of Cheese',
    saveLabel: 'Save',
    onCancel: function onCancel(close) {
      alert('Prompt closed');
      close();
    },
    onSave: function onSave(value, close) {
      alert("You chose ".concat(value));
      close();
    },
    secondary: _react["default"].createElement(_.Button, {
      onClick: function onClick() {
        return alert('Secondary clicked');
      }
    }, "Secondary Cheese")
  }, function (open) {
    return _react["default"].createElement(_.Button, {
      onClick: open
    }, "Prompt");
  });
}
//# sourceMappingURL=Basic.js.map