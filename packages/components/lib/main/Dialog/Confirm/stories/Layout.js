"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layout;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function Layout() {
  function handleConfirm() {
    alert('Changes discarded');
  }
  function handleCancel() {
    alert('Went back');
  }
  return _react["default"].createElement(_.ConfirmLayout, {
    title: "Discard Changes?",
    message: "Are you sure you want to close the dialog? Unsaved changes will be lost.",
    primaryButton: _react["default"].createElement(_.Button, {
      onClick: handleConfirm,
      color: "critical"
    }, "Discard changes"),
    secondaryButton: _react["default"].createElement(_.ButtonTransparent, {
      onClick: handleCancel,
      color: "neutral"
    }, "Go back")
  });
}
//# sourceMappingURL=Layout.js.map