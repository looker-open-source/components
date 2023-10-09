"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Letter;
var _react = _interopRequireDefault(require("react"));
var _OrderedList = require("../OrderedList");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Letter() {
  return _react["default"].createElement(_OrderedList.OrderedList, {
    type: 'letter'
  }, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack"));
}
//# sourceMappingURL=Letter.js.map