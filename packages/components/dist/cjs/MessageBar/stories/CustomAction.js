"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomAction;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CustomAction() {
  return _react["default"].createElement(_.MessageBar, {
    primaryAction: "Primary Action",
    onPrimaryClick: function onPrimaryClick() {
      return alert('Primary Action');
    },
    secondaryAction: "Secondary Action",
    onSecondaryClick: function onSecondaryClick() {
      return alert('Secondary Action');
    }
  }, "Render some custom action labels and actions!");
}
//# sourceMappingURL=CustomAction.js.map