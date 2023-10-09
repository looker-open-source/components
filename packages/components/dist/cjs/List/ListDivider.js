"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDivider = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _Divider = require("../Divider");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ListDividerLayout = function ListDividerLayout(props) {
  return _react["default"].createElement("li", _extends({}, props, {
    "aria-hidden": "true"
  }), _react["default"].createElement(_Divider.Divider, {
    appearance: "light"
  }));
};
var ListDivider = (0, _styledComponents["default"])(ListDividerLayout).withConfig({
  displayName: "ListDivider",
  componentId: "sc-y85nke-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  margin: ", " 0;\n\n  /* CSS for hiding second divider when 2 ListDividers are adjacent */\n  & + & {\n    display: none;\n  }\n"])), _designTokens.space, function (_ref) {
  var theme = _ref.theme;
  return theme.space.u2;
});
exports.ListDivider = ListDivider;
//# sourceMappingURL=ListDivider.js.map