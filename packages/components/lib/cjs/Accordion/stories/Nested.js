"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Nested;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Nested() {
  return _react["default"].createElement(Branch, null, _react["default"].createElement(Branch, null, _react["default"].createElement(Branch, null, _react["default"].createElement(Branch, null))));
}

var Branch = function Branch(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_.Accordion, {
    indicatorPosition: "left",
    defaultOpen: true,
    pl: "medium",
    content: _react["default"].createElement(_.UnorderedList, null, _react["default"].createElement("li", null, "Cheddar"), _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), children)
  }, "Hello World");
};
//# sourceMappingURL=Nested.js.map