"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimationCallbacks;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function AnimationCallbacks() {
  return _react["default"].createElement(_.Dialog, {
    content: "Simple Content",
    onAfterClose: function onAfterClose() {
      alert('Close');
    },
    onAfterOpen: function onAfterOpen() {
      alert('Open');
    }
  }, _react["default"].createElement(_.ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=AnimationCallbacks.js.map