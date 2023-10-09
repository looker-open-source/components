"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimationCallbacks;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function AnimationCallbacks() {
  return _react["default"].createElement(_.Drawer, {
    content: "My neat drawer",
    onAfterClose: function onAfterClose() {
      return alert("Close");
    },
    onAfterOpen: function onAfterOpen() {
      return alert("Open");
    }
  }, _react["default"].createElement(_.ButtonOutline, null, "Open Drawer"));
}
//# sourceMappingURL=AnimationCallbacks.js.map