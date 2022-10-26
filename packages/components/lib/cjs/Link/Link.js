"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _Launch = require("@styled-icons/material/Launch");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["children", "isExternal"];

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ExternalLinkIndicator = (0, _styledComponents["default"])(_Launch.Launch).withConfig({
  displayName: "Link__ExternalLinkIndicator",
  componentId: "sc-165dqum-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", ";\n  margin-left: ", ";\n  width: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.xxsmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u1;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.xxsmall;
});

var generateLinkTypes = function generateLinkTypes(_ref4) {
  var dangerouslyDisableRel = _ref4.dangerouslyDisableRel,
      isExternal = _ref4.isExternal,
      rel = _ref4.rel,
      target = _ref4.target;
  if (dangerouslyDisableRel) return rel;
  var linkTypes = rel ? rel.split(' ') : [];

  if (target === '_blank') {
    linkTypes.push('noopener', 'noreferrer');
  } else if (isExternal) {
    linkTypes.push('external', 'noreferrer');
  }

  return (0, _toConsumableArray2["default"])(new Set(linkTypes)).join(' ');
};

var linkStyleProps = ['keyColor', 'underline'];
var LinkLayout = (0, _react.forwardRef)(function (props, ref) {
  var children = props.children,
      isExternal = props.isExternal,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var enhancedRel = generateLinkTypes(props);
  return _react["default"].createElement("a", (0, _extends2["default"])({}, (0, _omit["default"])((0, _designTokens.omitStyledProps)(restProps), [].concat(linkStyleProps, ['dangerouslyDisableRel'])), {
    ref: ref,
    rel: enhancedRel
  }), children, isExternal && _react["default"].createElement(ExternalLinkIndicator, null));
});
var Link = (0, _styledComponents["default"])(LinkLayout).withConfig({
  displayName: "Link",
  componentId: "sc-165dqum-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\n  color: ", ";\n  text-decoration: ", ";\n\n  &[aria-expanded='true'],\n  &:focus,\n  &:hover,\n  &:active,\n  &.active,\n  &:visited {\n    color: ", ";\n    outline: none;\n    text-decoration: ", ";\n  }\n"])), _designTokens.reset, _designTokens.typography, function (_ref5) {
  var keyColor = _ref5.keyColor,
      colors = _ref5.theme.colors;
  return keyColor ? colors.key : colors.link;
}, function (_ref6) {
  var underline = _ref6.underline;
  return underline === true ? 'underline' : 'none';
}, function (_ref7) {
  var keyColor = _ref7.keyColor,
      colors = _ref7.theme.colors;
  return keyColor ? colors.keyInteractive : colors.linkInteractive;
}, function (_ref8) {
  var underline = _ref8.underline;
  return underline === false ? 'none' : 'underline';
});
exports.Link = Link;
//# sourceMappingURL=Link.js.map