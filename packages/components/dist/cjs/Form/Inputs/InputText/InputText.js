"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputTextValidation = exports.inputTextHover = exports.inputTextFocus = exports.inputTextDisabled = exports.inputCSS = exports.InputText = void 0;
var _omit = _interopRequireDefault(require("lodash/omit"));
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../../../utils");
var _constants = require("../../constants");
var _InlineInputText = require("../InlineInputText");
var _InputProps = require("../InputProps");
var _innerInputStyle = require("../innerInputStyle");
var _height = require("../height");
var _After = require("./After");
var _Before = require("./Before");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var _excluded = ["autoResize", "children", "className", "before", "iconBefore", "after", "iconAfter", "type", "noErrorIcon", "validationType", "onClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseOut", "onMouseOver", "onMouseUp"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var InputComponent = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var autoResize = _ref.autoResize,
    children = _ref.children,
    className = _ref.className,
    before = _ref.before,
    iconBefore = _ref.iconBefore,
    after = _ref.after,
    iconAfter = _ref.iconAfter,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    noErrorIcon = _ref.noErrorIcon,
    validationType = _ref.validationType,
    onClick = _ref.onClick,
    onMouseDown = _ref.onMouseDown,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    onMouseOut = _ref.onMouseOut,
    onMouseOver = _ref.onMouseOver,
    onMouseUp = _ref.onMouseUp,
    props = _objectWithoutProperties(_ref, _excluded);
  var internalRef = (0, _react.useRef)(null);
  var ref = (0, _utils.useForkedRef)(internalRef, forwardedRef);
  var handleMouseDown = function handleMouseDown(e) {
    if (!(0, _utils.targetIsButton)(e) && e.target !== internalRef.current) {
      if (document.activeElement === internalRef.current) {
        e.preventDefault();
      } else {
        setTimeout(function () {
          internalRef.current && internalRef.current.focus();
        }, 0);
      }
    }
  };
  var onMouseDownWrapped = (0, _utils.useWrapEvent)(handleMouseDown, onMouseDown);
  if (before && iconBefore) {
    console.warn('Use before or iconBefore, but not both at the same time.');
    return null;
  }
  if (after && iconAfter) {
    console.warn('Use after or iconAfter, but not both at the same time.');
    return null;
  }
  var mouseHandlers = {
    onClick: onClick,
    onMouseDown: onMouseDownWrapped,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseOut: onMouseOut,
    onMouseOver: onMouseOver,
    onMouseUp: onMouseUp
  };
  var inputProps = _objectSpread(_objectSpread({}, (0, _InputProps.pickInputProps)((0, _designTokens.omitStyledProps)(props))), {}, {
    'aria-invalid': validationType === 'error' ? true : undefined,
    type: type
  });
  var inner = _react["default"].createElement(StyledInput, _extends({}, inputProps, {
    ref: ref
  }));
  if (children) {
    inner = _react["default"].createElement("div", {
      className: "inner"
    }, children, _react["default"].createElement(StyledInput, _extends({}, inputProps, {
      ref: ref
    })));
  } else if (autoResize) {
    inner = _react["default"].createElement(_InlineInputText.InlineInputTextBase, _extends({}, inputProps, {
      ref: ref
    }));
  }
  return _react["default"].createElement("div", _extends({
    className: className
  }, mouseHandlers, (0, _designTokens.omitStyledProps)((0, _omit["default"])(props, _InputProps.inputPropKeys))), _react["default"].createElement(_Before.Before, {
    before: before,
    iconBefore: iconBefore
  }), inner, _react["default"].createElement(_After.After, {
    after: after,
    iconAfter: iconAfter,
    noErrorIcon: noErrorIcon,
    validationType: validationType
  }));
});
var StyledInput = _styledComponents["default"].input.withConfig({
  displayName: "InputText__StyledInput",
  componentId: "sc-6cvg1f-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  flex: 1;\n  font-size: ", ";\n  max-width: 100%;\n  min-width: 2rem;\n  padding: 0 ", ";\n"])), _innerInputStyle.innerInputStyle, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.small;
}, function (_ref3) {
  var space = _ref3.theme.space;
  return space.u2;
});
var inputTextHover = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-color: ", ";\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.ui4;
});
exports.inputTextHover = inputTextHover;
var inputTextFocus = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-color: ", ";\n  box-shadow: inset 0 0 0 1px ", ";\n  outline: none;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.key;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.key;
});
exports.inputTextFocus = inputTextFocus;
var inputTextDisabled = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: default;\n  opacity: ", ";\n  &:hover {\n    border-color: ", ";\n  }\n  /* FloatingLabelField handles opacity */\n  [data-disabled='true'] & {\n    opacity: 1;\n  }\n"])), _constants.DISABLED_OPACITY, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.ui3;
});
exports.inputTextDisabled = inputTextDisabled;
var inputTextValidation = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
  return props.validationType === 'error' ? "\n      border-color: ".concat(props.theme.colors.critical, ";\n      &:hover {\n        border-color: ").concat(props.theme.colors.critical, ";\n      }\n      &:focus,\n      &:focus-within {\n        border-color: ").concat(props.theme.colors.critical, ";\n        box-shadow: inset 0 0 0 1px ").concat(props.theme.colors.critical, ";\n      }\n      input {\n        caret-color: ").concat(props.theme.colors.critical, ";\n      }\n      ") : '';
});
exports.inputTextValidation = inputTextValidation;
var inputCSS = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: ", ";\n"])), function (_ref8) {
  var colors = _ref8.theme.colors;
  return colors.field;
}, function (_ref9) {
  var colors = _ref9.theme.colors;
  return colors.ui3;
}, function (_ref10) {
  var radii = _ref10.theme.radii;
  return radii.medium;
}, function (_ref11) {
  var colors = _ref11.theme.colors;
  return colors.text5;
}, function (_ref12) {
  var fontSizes = _ref12.theme.fontSizes;
  return fontSizes.small;
});
exports.inputCSS = inputCSS;
var InputText = (0, _styledComponents["default"])(InputComponent).attrs(function (_ref13) {
  var _ref13$height = _ref13.height,
    height = _ref13$height === void 0 ? _height.inputHeight : _ref13$height,
    _ref13$type = _ref13.type,
    type = _ref13$type === void 0 ? 'text' : _ref13$type;
  return {
    height: height,
    type: type
  };
}).withConfig({
  displayName: "InputText",
  componentId: "sc-6cvg1f-1"
})(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n\n  align-items: center;\n  color: ", ";\n  cursor: text;\n  display: inline-flex;\n  justify-content: space-evenly;\n  padding: ", ";\n  width: ", ";\n\n  ", "\n  ", "\n  ", "\n\n  ", " {\n    height: 100%;\n    max-width: 100%;\n    width: 100%;\n    input,\n    span {\n      padding: 0 ", ";\n    }\n  }\n\n  &:hover {\n    ", "\n  }\n  &:focus,\n  &:focus-within {\n    ", "\n  }\n  ", "\n  ", "\n"])), _designTokens.reset, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.text;
}, function (_ref15) {
  var space = _ref15.theme.space;
  return "".concat(space.u05, " ").concat(space.u1);
}, function (_ref16) {
  var autoResize = _ref16.autoResize;
  return autoResize ? 'auto' : '100%';
}, _designTokens.layout, _designTokens.space, inputCSS, _InlineInputText.InlineInputTextBase, function (_ref17) {
  var theme = _ref17.theme;
  return theme.space.u2;
}, inputTextHover, inputTextFocus, function (_ref18) {
  var disabled = _ref18.disabled;
  return disabled ? inputTextDisabled : '';
}, inputTextValidation);
exports.InputText = InputText;
//# sourceMappingURL=InputText.js.map