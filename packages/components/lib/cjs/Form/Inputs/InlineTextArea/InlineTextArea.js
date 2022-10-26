"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineTextAreaLayout = exports.InlineTextArea = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _InputProps = require("../InputProps");

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["className", "onChange", "underlineOnlyOnHover", "value", "placeholder"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InlineTextAreaLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      underlineOnlyOnHover = _ref.underlineOnlyOnHover,
      _ref$value = _ref.value,
      valueProp = _ref$value === void 0 ? '' : _ref$value,
      placeholder = _ref.placeholder,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(valueProp),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValueChange = _useState2[1];

  var displayValue = (0, _isFunction["default"])(onChange) ? valueProp : value;

  var handleValueChange = function handleValueChange(event) {
    setValueChange(event.currentTarget.value);
  };

  var handleChange = (0, _isFunction["default"])(onChange) ? onChange : handleValueChange;
  return _react["default"].createElement("div", {
    className: className,
    "data-testid": "inline-text-area"
  }, _react["default"].createElement(Input, (0, _extends2["default"])({
    onChange: handleChange,
    ref: ref,
    underlineOnlyOnHover: underlineOnlyOnHover,
    value: displayValue
  }, (0, _InputProps.pickInputProps)(props))), _react["default"].createElement(VisibleText, {
    displayValue: displayValue
  }, displayValue || placeholder));
});
exports.InlineTextAreaLayout = InlineTextAreaLayout;
InlineTextAreaLayout.displayName = 'InlineTextAreaLayout';

var Input = _styledComponents["default"].textarea.withConfig({
  displayName: "InlineTextArea__Input",
  componentId: "sc-1ioqw6m-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  border: none;\n  caret-color: ", ";\n  color: transparent;\n  cursor: ", ";\n  font: inherit;\n  height: 100%;\n  left: 0;\n  margin: 0; /* override browser default(s) */\n  outline: none;\n  padding: 0;\n  position: absolute;\n  resize: none;\n  text-align: inherit;\n  text-transform: inherit;\n  top: 0;\n  vertical-align: top; /* textarea is inline-block so this removes 4px generated below */\n  width: 100%;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text5;
}, function (_ref3) {
  var readOnly = _ref3.readOnly,
      disabled = _ref3.disabled;
  return readOnly || disabled ? 'not-allowed' : undefined;
});

var VisibleText = _styledComponents["default"].div.withConfig({
  displayName: "InlineTextArea__VisibleText",
  componentId: "sc-1ioqw6m-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"])), function (_ref4) {
  var displayValue = _ref4.displayValue,
      theme = _ref4.theme;
  return displayValue ? 'inherit' : theme.colors.text1;
});

var InlineTextArea = (0, _styledComponents["default"])(InlineTextAreaLayout).withConfig({
  displayName: "InlineTextArea",
  componentId: "sc-1ioqw6m-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  border: none;\n  border-bottom: 1px dashed;\n  border-bottom-color: ", ";\n  color: ", ";\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: ", ";\n  min-width: 2rem;\n  position: relative;\n  text-align: inherit;\n  white-space: pre-wrap;\n\n  :focus,\n  :hover {\n    background-color: ", ";\n    border-bottom-color: ", ";\n    outline: none;\n  }\n\n  :focus {\n    border-bottom-style: solid;\n  }\n\n  :disabled,\n  :hover {\n    border-bottom-color: ", ";\n  }\n\n  :hover {\n    border-bottom-color: ", ";\n  }\n"])), _designTokens.typography, function (_ref5) {
  var theme = _ref5.theme,
      underlineOnlyOnHover = _ref5.underlineOnlyOnHover,
      readOnly = _ref5.readOnly;
  return underlineOnlyOnHover || readOnly ? 'transparent' : theme.colors.ui3;
}, function (_ref6) {
  var disabled = _ref6.disabled,
      theme = _ref6.theme;
  return disabled ? theme.colors.text1 : 'inherit';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.lineHeights.medium;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.ui1;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.key;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.text1;
}, function (_ref11) {
  var readOnly = _ref11.readOnly;
  return readOnly && 'transparent';
});
exports.InlineTextArea = InlineTextArea;
//# sourceMappingURL=InlineTextArea.js.map