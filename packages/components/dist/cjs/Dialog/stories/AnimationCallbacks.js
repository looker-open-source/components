"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimationCallbacks;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function AnimationCallbacks(props) {
  return _react["default"].createElement(_.Dialog, _extends({}, props, {
    content: "Simple Content",
    onAfterClose: function onAfterClose() {
      alert('Close');
    },
    onAfterOpen: function onAfterOpen() {
      alert('Open');
    }
  }), _react["default"].createElement(_.ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=AnimationCallbacks.js.map