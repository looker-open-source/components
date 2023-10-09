"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Number;
var _react = _interopRequireDefault(require("react"));
var _OrderedList = require("../OrderedList");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Number() {
  return _react["default"].createElement(_OrderedList.OrderedList, {
    type: 'number'
  }, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack"));
}
//# sourceMappingURL=Number.js.map