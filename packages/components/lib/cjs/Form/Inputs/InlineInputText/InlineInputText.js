"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineInputTextBase = exports.InlineInputText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _InputProps = require("../InputProps");

var _innerInputStyle = require("../innerInputStyle");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var _excluded = ["className", "defaultValue", "onChange", "placeholder", "type", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InlineInputTextLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      defaultValue = _ref.defaultValue,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      valueProp = _ref.value,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(valueProp || defaultValue || ''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValueChange = _useState2[1];

  var displayValue = (0, _isFunction["default"])(onChange) ? valueProp : value;

  var handleValueChange = function handleValueChange(event) {
    setValueChange(event.currentTarget.value);
  };

  var handleChange = (0, _isFunction["default"])(onChange) ? onChange : handleValueChange;
  return _react["default"].createElement("span", {
    className: className
  }, _react["default"].createElement(StyledInput, (0, _extends2["default"])({
    onChange: handleChange,
    value: displayValue,
    placeholder: placeholder,
    type: type,
    ref: ref
  }, (0, _designTokens.omitStyledProps)((0, _InputProps.pickInputProps)(props)))), _react["default"].createElement(StyledText, null, displayValue || placeholder || ' '));
});
InlineInputTextLayout.displayName = 'InlineInputTextLayout';

var StyledInput = _styledComponents["default"].input.withConfig({
  displayName: "InlineInputText__StyledInput",
  componentId: "sc-1nk1o3l-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  cursor: ", ";\n  font: inherit;\n  left: 0;\n  padding: 0;\n  position: absolute;\n  text-align: inherit;\n  text-transform: inherit;\n  top: 0;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    appearance: none;\n  }\n  &[type='number'] {\n    appearance: textfield;\n  }\n"])), _innerInputStyle.innerInputStyle, function (_ref2) {
  var readOnly = _ref2.readOnly,
      disabled = _ref2.disabled;
  return readOnly || disabled ? 'not-allowed' : undefined;
});

var StyledText = _styledComponents["default"].span.withConfig({
  displayName: "InlineInputText__StyledText",
  componentId: "sc-1nk1o3l-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  align-self: center;\n  color: transparent;\n  line-height: inherit;\n  /* max-width & overflow keep this span from blocking the x button\n  in InputSearch, etc, with autoResize and maxWidth */\n  max-width: 100%;\n  overflow: hidden;\n  text-align: inherit;\n  white-space: pre;\n"])));

var InlineInputTextBase = (0, _styledComponents["default"])(InlineInputTextLayout).withConfig({
  displayName: "InlineInputText__InlineInputTextBase",
  componentId: "sc-1nk1o3l-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  justify-content: center;\n  min-width: 2rem;\n  position: relative;\n"])));
exports.InlineInputTextBase = InlineInputTextBase;
var InlineInputText = (0, _styledComponents["default"])(InlineInputTextBase).withConfig({
  displayName: "InlineInputText",
  componentId: "sc-1nk1o3l-3"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  border: none;\n  border-bottom: 1px dashed;\n  border-bottom-color: ", ";\n  color: inherit;\n  flex-direction: column;\n  max-width: 100%;\n  overflow: hidden;\n  text-align: inherit;\n\n  :focus,\n  :hover {\n    background-color: ", ";\n    border-bottom-color: ", ";\n    outline: none;\n  }\n\n  :focus {\n    border-bottom-style: solid;\n  }\n\n  :disabled,\n  :hover {\n    border-bottom-color: ", ";\n  }\n\n  :hover {\n    border-bottom-color: ", ";\n  }\n\n  input:disabled {\n    color: ", ";\n    -webkit-text-fill-color: ", ";\n  }\n"])), _designTokens.typography, function (_ref3) {
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