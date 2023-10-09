"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineInputTextBase = exports.InlineInputText = void 0;
var _react = _interopRequireWildcard(require("react"));
var _isFunction = _interopRequireDefault(require("lodash/isFunction"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _InputProps = require("../InputProps");
var _innerInputStyle = require("../innerInputStyle");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var _excluded = ["className", "defaultValue", "onChange", "placeholder", "type", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var InlineInputTextLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    defaultValue = _ref.defaultValue,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    valueProp = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(valueProp || defaultValue || ''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValueChange = _useState2[1];
  var displayValue = (0, _isFunction["default"])(onChange) ? valueProp : value;
  var handleValueChange = function handleValueChange(event) {
    setValueChange(event.target.value);
  };
  var handleChange = (0, _isFunction["default"])(onChange) ? onChange : handleValueChange;
  return _react["default"].createElement("span", {
    className: className
  }, _react["default"].createElement(StyledInput, _extends({
    onChange: handleChange,
    value: displayValue,
    placeholder: placeholder,
    type: type,
    ref: ref
  }, (0, _designTokens.omitStyledProps)((0, _InputProps.pickInputProps)(props)))), _react["default"].createElement(StyledText, null, displayValue || placeholder || ' '));
});
var StyledInput = _styledComponents["default"].input.withConfig({
  displayName: "InlineInputText__StyledInput",
  componentId: "sc-1nk1o3l-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  cursor: ", ";\n  font: inherit;\n  left: 0;\n  padding: 0;\n  position: absolute;\n  text-align: inherit;\n  text-transform: inherit;\n  top: 0;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    appearance: none;\n  }\n  &[type='number'] {\n    appearance: textfield;\n  }\n"])), _innerInputStyle.innerInputStyle, function (_ref2) {
  var readOnly = _ref2.readOnly,
    disabled = _ref2.disabled;
  return readOnly || disabled ? 'not-allowed' : undefined;
});
var StyledText = _styledComponents["default"].span.withConfig({
  displayName: "InlineInputText__StyledText",
  componentId: "sc-1nk1o3l-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-self: center;\n  color: transparent;\n  line-height: inherit;\n  /* max-width & overflow keep this span from blocking the x button\n  in InputSearch, etc, with autoResize and maxWidth */\n  max-width: 100%;\n  overflow: hidden;\n  text-align: inherit;\n  white-space: pre;\n"])));
var InlineInputTextBase = (0, _styledComponents["default"])(InlineInputTextLayout).withConfig({
  displayName: "InlineInputText__InlineInputTextBase",
  componentId: "sc-1nk1o3l-2"
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  min-width: 2rem;\n  position: relative;\n"])));
exports.InlineInputTextBase = InlineInputTextBase;
var InlineInputText = (0, _styledComponents["default"])(InlineInputTextBase).withConfig({
  displayName: "InlineInputText",
  componentId: "sc-1nk1o3l-3"
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  border: none;\n  border-bottom: 1px dashed;\n  border-bottom-color: ", ";\n  color: inherit;\n  flex-direction: column;\n  max-width: 100%;\n  overflow: hidden;\n  text-align: inherit;\n\n  :focus,\n  :hover {\n    background-color: ", ";\n    border-bottom-color: ", ";\n    outline: none;\n  }\n\n  :focus {\n    border-bottom-style: solid;\n  }\n\n  :disabled,\n  :hover {\n    border-bottom-color: ", ";\n  }\n\n  :hover {\n    border-bottom-color: ", ";\n  }\n\n  input:disabled {\n    color: ", ";\n    -webkit-text-fill-color: ", ";\n  }\n"])), _designTokens.typography, function (_ref3) {
  var theme = _ref3.theme,
    underlineOnlyOnHover = _ref3.underlineOnlyOnHover,
    simple = _ref3.simple,
    readOnly = _ref3.readOnly;
  return underlineOnlyOnHover || simple || readOnly ? 'transparent' : theme.colors.ui3;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.ui1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.key;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.text1;
}, function (_ref7) {
  var readOnly = _ref7.readOnly;
  return readOnly && 'transparent';
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.text1;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.text1;
});
exports.InlineInputText = InlineInputText;
//# sourceMappingURL=InlineInputText.js.map