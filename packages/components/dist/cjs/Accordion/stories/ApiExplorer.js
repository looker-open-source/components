"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ApiExplorer;
var _react = _interopRequireDefault(require("react"));
var _materialRounded = require("@styled-icons/material-rounded");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ = require("../..");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ApiExplorer() {
  var content = _react["default"].createElement(_.Box2, {
    borderLeft: true,
    ml: "xsmall",
    pl: "small"
  }, _react["default"].createElement(_.UnorderedList, {
    fontSize: "small"
  }, _react["default"].createElement("li", null, _react["default"].createElement(_.Badge, {
    intent: "inform"
  }, "GET"), " Search Favorites"), _react["default"].createElement("li", null, _react["default"].createElement(_.Badge, {
    intent: "inform"
  }, "GET"), " Get Favorites"), _react["default"].createElement("li", null, _react["default"].createElement(_.Badge, {
    intent: "critical"
  }, "GET"), " Delete Favorite"), _react["default"].createElement("li", null, _react["default"].createElement(_.Badge, {
    intent: "positive"
  }, "GET"), " Create Favorite"), _react["default"].createElement("li", null, _react["default"].createElement(_.Badge, {
    intent: "warn"
  }, "POST"), " Update Content")));
  return _react["default"].createElement(Customized, null, _react["default"].createElement(_.Accordion, {
    indicatorIcons: {
      close: _react["default"].createElement(_materialRounded.ChevronLeft, null),
      open: _react["default"].createElement(_materialRounded.ExpandMore, null)
    },
    content: content
  }, "First Group"), _react["default"].createElement(_.Accordion, {
    defaultOpen: true,
    indicatorIcons: {
      close: _react["default"].createElement(_materialRounded.ChevronLeft, null),
      open: _react["default"].createElement(_materialRounded.ExpandMore, null)
    },
    content: content
  }, _react["default"].createElement(_.Text, {
    color: "red"
  }, "Second Group")));
}
var Customized = _styledComponents["default"].div.withConfig({
  displayName: "ApiExplorer__Customized",
  componentId: "sc-166uytv-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "[aria-expanded='true'] {\n    color: ", ";\n  }\n"])), _.AccordionDisclosure, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.key;
});
//# sourceMappingURL=ApiExplorer.js.map