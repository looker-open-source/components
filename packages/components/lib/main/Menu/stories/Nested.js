"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Nested;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Nested() {
  return _react["default"].createElement(_.Menu, {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.MenuItem, {
      nestedMenu: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.MenuItem, null, "Camembert"), _react["default"].createElement(_.MenuItem, null, "Comt\xE9"))
    }, "French"), _react["default"].createElement(_.MenuItem, {
      nestedMenu: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.MenuItem, null, "Gouda"), _react["default"].createElement(_.MenuItem, null, "Limburger"))
    }, "Dutch"))
  }, _react["default"].createElement(_.Button, null, "Cheese"));
}
//# sourceMappingURL=Nested.js.map