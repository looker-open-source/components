"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeadingDivider;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function HeadingDivider() {
  return _react["default"].createElement(_.Menu, {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.MenuHeading, null, "Good Cheeses"), _react["default"].createElement(_.MenuItem, null, "Cheddar"), _react["default"].createElement(_.MenuItem, null, "Swiss"), _react["default"].createElement(_.MenuItem, null, "Brie"), _react["default"].createElement(_.MenuDivider, null), _react["default"].createElement(_.MenuHeading, null, "Great Cheeses"), _react["default"].createElement(_.MenuItem, null, "Pepper Jack"), _react["default"].createElement(_.MenuItem, null, "String Cheese"))
  }, _react["default"].createElement(_.Button, null, "Menu with headings and dividers"));
}
//# sourceMappingURL=HeadingDivider.js.map