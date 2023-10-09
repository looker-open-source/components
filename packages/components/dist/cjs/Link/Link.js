"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var _designTokens = require("@looker/design-tokens");
var _Launch = require("@styled-icons/material/Launch");
var _omit = _interopRequireDefault(require("lodash/omit"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["children", "isExternal"];
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ExternalLinkIndicator = (0, _styledComponents["default"])(_Launch.Launch).withConfig({
  displayName: "Link__ExternalLinkIndicator",
  componentId: "sc-165dqum-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  margin-left: ", ";\n  width: ", ";\n"])), function (_ref) {
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
  return _toConsumableArray(new Set(linkTypes)).join(' ');
};
var linkStyleProps = ['keyColor', 'underline'];
var LinkLayout = (0, _react.forwardRef)(function (props, ref) {
  var children = props.children,
    isExternal = props.isExternal,
    restProps = _objectWithoutProperties(props, _excluded);
  var enhancedRel = generateLinkTypes(props);
  return _react["default"].createElement("a", _extends({}, (0, _omit["default"])((0, _designTokens.omitStyledProps)(restProps), [].concat(linkStyleProps, ['dangerouslyDisableRel'])), {
    ref: ref,
    rel: enhancedRel
  }), children, isExternal && _react["default"].createElement(ExternalLinkIndicator, null));
});
var Link = (0, _styledComponents["default"])(LinkLayout).withConfig({
  displayName: "Link",
  componentId: "sc-165dqum-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  color: ", ";\n  text-decoration: ", ";\n\n  &[aria-expanded='true'],\n  &:focus,\n  &:hover,\n  &:active,\n  &.active,\n  &:visited {\n    color: ", ";\n    outline: none;\n    text-decoration: ", ";\n  }\n"])), _designTokens.reset, _designTokens.typography, function (_ref5) {
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