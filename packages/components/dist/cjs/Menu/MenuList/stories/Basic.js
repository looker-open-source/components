"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic(props) {
  return _react["default"].createElement(_.MenuList, props, _react["default"].createElement(_.MenuItem, {
    onClick: function onClick() {
      return alert('Hello world!');
    }
  }, "Gouda"), _react["default"].createElement(_.MenuItem, null, "Cheddar"), _react["default"].createElement(_.MenuItem, null, "Swiss"));
}
//# sourceMappingURL=Basic.js.map