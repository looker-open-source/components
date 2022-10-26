"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedInputControls = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _Close = require("@styled-icons/material/Close");

var _Error = require("@styled-icons/material/Error");

var _ArrowDropDown = require("@styled-icons/material/ArrowDropDown");

var _ArrowDropUp = require("@styled-icons/material/ArrowDropUp");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("../../Button");

var _iconButtonColor = require("../../Button/iconButtonColor");

var _Icon = require("../../Icon");

var _Text = require("../../Text");

var _utils = require("../../utils");

var _excluded = ["disabled", "clearIconLabel", "isVisibleOptions", "onClear", "showCaret", "showClear", "summary", "errorIcon"];

var _templateObject, _templateObject2, _templateObject3;

var AdvancedInputControls = (0, _styledComponents["default"])(function (props) {
  var _useTranslation = (0, _utils.useTranslation)('AdvancedInputControls'),
      t = _useTranslation.t;

  var clearIconLabelText = t('Clear Field');
  var disabled = props.disabled,
      _props$clearIconLabel = props.clearIconLabel,
      clearIconLabel = _props$clearIconLabel === void 0 ? clearIconLabelText : _props$clearIconLabel,
      isVisibleOptions = props.isVisibleOptions,
      onClear = props.onClear,
      showCaret = props.showCaret,
      showClear = props.showClear,
      summary = props.summary,
      errorIcon = props.errorIcon,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement("div", rest, summary && _react["default"].createElement(_Text.Span, {
    color: "text1",
    fontSize: "small",
    style: {
      whiteSpace: 'nowrap'
    },
    pr: "u2"
  }, summary), summary && showClear && _react["default"].createElement(SearchControlDivider, null), showClear && _react["default"].createElement(_Button.IconButton, {
    size: "small",
    icon: _react["default"].createElement(_Close.Close, {
      role: "presentation"
    }),
    label: clearIconLabel,
    onClick: onClear,
    tooltipDisabled: disabled,
    disabled: disabled,
    mr: "u1"
  }), showClear && showCaret && _react["default"].createElement(SearchControlDivider, null), showCaret && _react["default"].createElement(CaretIcon, {
    icon: isVisibleOptions ? _react["default"].createElement(_ArrowDropUp.ArrowDropUp, {
      role: "presentation"
    }) : _react["default"].createElement(_ArrowDropDown.ArrowDropDown, {
      role: "presentation"
    }),
    "data-testid": "caret",
    mr: "u1"
  }), errorIcon && _react["default"].createElement(_Icon.Icon, {
    size: "xsmall",
    icon: _react["default"].createElement(_Error.Error, {
      role: "presentation"
    }),
    color: "critical",
    mr: "u1"
  }));
}).withConfig({
  displayName: "AdvancedInputControls",
  componentId: "sc-1e7uo3l-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  max-height: 1.9rem;\n  padding-right: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.space.u1;
});
exports.AdvancedInputControls = AdvancedInputControls;

var SearchControlDivider = _styledComponents["default"].div.withConfig({
  displayName: "AdvancedInputControls__SearchControlDivider",
  componentId: "sc-1e7uo3l-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  height: ", ";\n  margin-right: ", ";\n  width: 1px;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u5;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u1;
});

var CaretIcon = (0, _styledComponents["default"])(_Icon.Icon).withConfig({
  displayName: "AdvancedInputControls__CaretIcon",
  componentId: "sc-1e7uo3l-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  cursor: default;\n"])), _iconButtonColor.iconButtonColor);
//# sourceMappingURL=AdvancedInputControls.js.map