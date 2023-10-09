"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NoAction;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NoAction() {
  return _react["default"].createElement(_.MessageBar, {
    noActions: true
  }, "I can't be closed");
}
//# sourceMappingURL=NoAction.js.map