"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Close = require("@styled-icons/material/Close");

var _utils = require("../utils");

var _IconButton = require("../Button/IconButton");

var _Text = require("../Text");

var _truncate = require("../Text/truncate");

var _excluded = ["children", "disabled", "iconLabel", "onBlur", "onClick", "onDelete", "onKeyUp", "onKeyDown", "readOnly", "prefix", "truncate"];

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ChipLabel = (0, _styledComponents["default"])(_Text.Span).withConfig({
  displayName: "Chip__ChipLabel",
  componentId: "sc-1stj55z-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _truncate.truncateCSS);

var ChipStyle = _styledComponents["default"].span.withConfig({
  displayName: "Chip__ChipStyle",
  componentId: "sc-1stj55z-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\n  align-items: center;\n  background: ", ";\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: ", ";\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: ", ";\n  height: 28px;\n  min-width: 44px;\n  padding: ", ";\n\n  ", " {\n    filter: brightness(0.9);\n  }\n\n  &:hover,\n  &:active,\n  &:focus,\n  &[aria-selected='true'] {\n    background: ", ";\n  }\n\n  &.focus,\n  &:focus {\n    border-color: ", ";\n    outline: none;\n  }\n\n  &[disabled] {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    filter: none;\n\n    &:hover {\n      background: ", ";\n    }\n  }\n"])), _designTokens.reset, _designTokens.maxWidth, function (_ref) {
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

var ChipJSX = (0, _react.forwardRef)(function (props, ref) {
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
      _props$truncate = props.truncate,
      truncate = _props$truncate === void 0 ? true : _props$truncate,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
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
  return _react["default"].createElement(ChipStyle, (0, _extends2["default"])({}, clickableProps, {
    onKeyDown: (0, _utils.useWrapEvent)(handleKeyDown, onKeyDown),
    ref: ref
  }, rest), _react["default"].createElement(ChipLabel, {
    truncate: truncate,
    id: id
  }, prefix && _react["default"].createElement(ChipLabel, {
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
});
var Chip = (0, _styledComponents["default"])(ChipJSX).withConfig({
  displayName: "Chip",
  componentId: "sc-1stj55z-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])([""])));
exports.Chip = Chip;
//# sourceMappingURL=Chip.js.map