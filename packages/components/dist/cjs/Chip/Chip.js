"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Close = require("@styled-icons/material/Close");
var _utils = require("../utils");
var _IconButton = require("../Button/IconButton");
var _Text = require("../Text");
var _truncate = require("../Text/truncate");
var _useTruncateTooltip2 = require("../Truncate/useTruncateTooltip");
var _excluded = ["children", "disabled", "iconLabel", "onBlur", "onClick", "onDelete", "onKeyUp", "onKeyDown", "readOnly", "prefix"],
  _excluded2 = ["className"];
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ChipLabel = (0, _styledComponents["default"])(_Text.Span).withConfig({
  displayName: "Chip__ChipLabel",
  componentId: "sc-1stj55z-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _truncate.truncateCSS);
var Chip = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var _useTranslation = (0, _utils.useTranslation)('Chip'),
    t = _useTranslation.t;
  var iconLabelText = t('Delete');
  var children = props.children,
    disabled = props.disabled,
    _props$iconLabel = props.iconLabel,
    iconLabel = _props$iconLabel === void 0 ? iconLabelText : _props$iconLabel,
    onBlur = props.onBlur,
    onClick = props.onClick,
    onDelete = props.onDelete,
    onKeyUp = props.onKeyUp,
    onKeyDown = props.onKeyDown,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    prefix = props.prefix,
    rest = _objectWithoutProperties(props, _excluded);
  var clickableProps = (0, _utils.useClickable)({
    disabled: disabled,
    onBlur: onBlur,
    onClick: onClick,
    onKeyUp: onKeyUp
  });
  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Backspace') {
      onDelete && onDelete(event);
    }
  };
  var handleDelete = function handleDelete(e) {
    if (!disabled) {
      onDelete && onDelete(e);
    }
    e.stopPropagation();
  };
  var id = (0, _utils.useID)();
  var _useCallbackRef = (0, _utils.useCallbackRef)(),
    _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
    element = _useCallbackRef2[0],
    setElement = _useCallbackRef2[1];
  var _useTruncateTooltip = (0, _useTruncateTooltip2.useTruncateTooltip)({
      children: children,
      element: element
    }),
    _useTruncateTooltip$d = _useTruncateTooltip.domProps,
    _className = _useTruncateTooltip$d.className,
    restDomProps = _objectWithoutProperties(_useTruncateTooltip$d, _excluded2),
    tooltip = _useTruncateTooltip.tooltip;
  return _react["default"].createElement(_Text.Span, _extends({}, clickableProps, {
    onKeyDown: (0, _utils.useWrapEvent)(handleKeyDown, onKeyDown)
  }, restDomProps, {
    ref: ref
  }, rest), tooltip, _react["default"].createElement(ChipLabel, {
    id: id,
    truncate: true,
    ref: setElement
  }, prefix && _react["default"].createElement(_Text.Span, {
    fontWeight: "normal"
  }, prefix, ": "), children), readOnly || disabled || onDelete && _react["default"].createElement(_IconButton.IconButton, {
    disabled: disabled,
    icon: _react["default"].createElement(_Close.Close, {
      role: "presentation"
    }),
    label: iconLabel,
    ml: "xsmall",
    onClick: handleDelete,
    size: "xxsmall",
    "aria-describedby": id
  }));
})).withConfig({
  displayName: "Chip",
  componentId: "sc-1stj55z-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  align-items: center;\n  background: ", ";\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: ", ";\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: ", ";\n  height: 28px;\n  justify-content: center;\n  min-width: 44px;\n  padding: ", ";\n\n  ", " {\n    filter: brightness(0.9);\n  }\n\n  &:hover,\n  &:active,\n  &:focus,\n  &[aria-selected='true'] {\n    background: ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n    outline: none;\n  }\n\n  &[disabled] {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    filter: none;\n\n    &:hover {\n      background: ", ";\n    }\n  }\n"])), _designTokens.reset, _designTokens.maxWidth, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.keySubtle;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.key;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.xsmall;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.semiBold;
}, function (_ref5) {
  var space = _ref5.theme.space;
  return "".concat(space.u1, " ").concat(space.u2);
}, ChipLabel, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.keyAccent;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.key;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.neutralAccent;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.ui2;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.text1;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.neutralAccent;
});
exports.Chip = Chip;
//# sourceMappingURL=Chip.js.map