"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDivider = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _Divider = require("../Divider");

var _templateObject;

var ListDividerLayout = function ListDividerLayout(props) {
  return _react["default"].createElement("li", (0, _extends2["default"])({}, props, {
    "aria-hidden": "true"
  }), _react["default"].createElement(_Divider.Divider, {
    appearance: "light"
  }));
};

var ListDivider = (0, _styledComponents["default"])(ListDividerLayout).withConfig({
  displayName: "ListDivider",
  componentId: "sc-y85nke-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  margin: ", " 0;\n\n  /* CSS for hiding second divider when 2 ListDividers are adjacent */\n  & + & {\n    display: none;\n  }\n"])), _designTokens.space, function (_ref) {
  var theme = _ref.theme;
  return theme.space.u2;
});
exports.ListDivider = ListDivider;
//# sourceMappingURL=ListDivider.js.map