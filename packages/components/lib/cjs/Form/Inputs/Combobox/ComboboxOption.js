"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxOptionText = exports.ComboboxOption = void 0;
exports.ComboboxOptionTextInternal = ComboboxOptionTextInternal;
exports.comboboxOptionStyle = exports.ComboboxOptionWrapper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _Text = require("../../../Text");

var _utils = require("../../../utils");

var _Ripple = require("../../../Ripple");

var _makeHash = require("./utils/makeHash");

var _ComboboxContext = require("./ComboboxContext");

var _ComboboxOptionIndicator = require("./ComboboxOptionIndicator");

var _getComboboxText = require("./utils/getComboboxText");

var _useOptionEvents = require("./utils/useOptionEvents");

var _useOptionStatus2 = require("./utils/useOptionStatus");

var _useAddOptionToContext = require("./utils/useAddOptionToContext");

var _useOptionScroll = require("./utils/useOptionScroll");

var _excluded = ["children", "className", "isSelected", "label", "style", "value"],
    _excluded2 = ["callbacks"],
    _excluded3 = ["children", "indicator", "highlightText", "scrollIntoView"],
    _excluded4 = ["highlightText"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ComboboxOptionWrapper = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, forwardedRef) {
  var children = props.children,
      className = props.className,
      isSelected = props.isSelected,
      label = props.label,
      style = props.style,
      value = props.value,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
    className: className,
    color: isSelected ? 'key' : 'neutral',
    ref: forwardedRef,
    style: style
  }),
      callbacks = _useBoundedRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useBoundedRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(rest, _Ripple.rippleHandlerKeys), rest.disabled);
  return _react["default"].createElement(_ComboboxContext.OptionContext.Provider, {
    value: {
      label: label,
      value: value
    }
  }, _react["default"].createElement("li", (0, _extends2["default"])({}, (0, _omit["default"])((0, _designTokens.omitStyledProps)(rest)), {
    id: String((0, _makeHash.makeHash)(value)),
    role: "option"
  }, rippleProps, rippleHandlers, {
    tabIndex: -1
  }), children));
})).withConfig({
  displayName: "ComboboxOption__ComboboxOptionWrapper",
  componentId: "sc-w994y4-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-color: ", ";\n  &[aria-selected='true'] {\n    background-color: ", ";\n  }\n"])), _Ripple.rippleStyle, function (_ref) {
  var isSelected = _ref.isSelected,
      theme = _ref.theme;
  return isSelected && theme.colors.keySubtle;
}, function (_ref2) {
  var isSelected = _ref2.isSelected,
      theme = _ref2.theme;
  return isSelected ? theme.colors.keyAccent : theme.colors.ui1;
});
exports.ComboboxOptionWrapper = ComboboxOptionWrapper;
var ComboboxOptionInternal = (0, _react.forwardRef)(function (_ref3, forwardedRef) {
  var children = _ref3.children,
      indicator = _ref3.indicator,
      _ref3$highlightText = _ref3.highlightText,
      highlightText = _ref3$highlightText === void 0 ? true : _ref3$highlightText,
      scrollIntoView = _ref3.scrollIntoView,
      props = (0, _objectWithoutProperties2["default"])(_ref3, _excluded3);
  var label = props.label,
      value = props.value;
  (0, _useAddOptionToContext.useAddOptionToContext)(_ComboboxContext.ComboboxContext, value, label, scrollIntoView);
  var optionEvents = (0, _useOptionEvents.useOptionEvents)(props, _ComboboxContext.ComboboxContext);

  var _useOptionStatus = (0, _useOptionStatus2.useOptionStatus)(_ComboboxContext.ComboboxContext, value),
      isActive = _useOptionStatus.isActive,
      isSelected = _useOptionStatus.isSelected;

  var scrollRef = (0, _useOptionScroll.useOptionScroll)(_ComboboxContext.ComboboxContext, value, label, scrollIntoView, isActive);
  var ref = (0, _utils.useForkedRef)(scrollRef, forwardedRef);
  return _react["default"].createElement(ComboboxOptionWrapper, (0, _extends2["default"])({}, props, optionEvents, {
    ref: ref,
    "aria-selected": isActive,
    isSelected: isSelected
  }), _react["default"].createElement(_ComboboxOptionIndicator.ComboboxOptionIndicator, {
    indicator: indicator,
    isActive: isActive,
    isSelected: isSelected
  }), children || _react["default"].createElement(ComboboxOptionText, {
    highlightText: highlightText
  }));
});
ComboboxOptionInternal.displayName = 'ComboboxOptionInternal';
var comboboxOptionStyle = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  align-items: stretch;\n  cursor: default;\n  outline: none;\n"])), _designTokens.reset, _designTokens.color, _designTokens.flexbox, _designTokens.layout, _designTokens.space, _designTokens.typography);
exports.comboboxOptionStyle = comboboxOptionStyle;
var ComboboxOption = (0, _styledComponents["default"])(ComboboxOptionInternal).attrs(function (_ref4) {
  var _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? 'text4' : _ref4$color,
      _ref4$display = _ref4.display,
      display = _ref4$display === void 0 ? 'flex' : _ref4$display,
      _ref4$fontSize = _ref4.fontSize,
      fontSize = _ref4$fontSize === void 0 ? 'small' : _ref4$fontSize,
      _ref4$lineHeight = _ref4.lineHeight,
      lineHeight = _ref4$lineHeight === void 0 ? 'small' : _ref4$lineHeight,
      _ref4$px = _ref4.px,
      px = _ref4$px === void 0 ? 'xsmall' : _ref4$px,
      _ref4$py = _ref4.py,
      py = _ref4$py === void 0 ? 'xxsmall' : _ref4$py;
  return {
    color: color,
    display: display,
    fontSize: fontSize,
    lineHeight: lineHeight,
    px: px,
    py: py
  };
}).withConfig({
  displayName: "ComboboxOption",
  componentId: "sc-w994y4-1"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), comboboxOptionStyle);
exports.ComboboxOption = ComboboxOption;

function ComboboxOptionTextInternal(_ref5) {
  var _ref5$highlightText = _ref5.highlightText,
      highlightText = _ref5$highlightText === void 0 ? true : _ref5$highlightText,
      props = (0, _objectWithoutProperties2["default"])(_ref5, _excluded4);
  var context = (0, _react.useContext)(_ComboboxContext.ComboboxContext);
  var contextMulti = (0, _react.useContext)(_ComboboxContext.ComboboxMultiContext);
  var contextToUse = context.transition ? context : contextMulti;
  var data = contextToUse.data;
  var inputValue = data.inputValue;
  var contextOption = data.option;
  var option = (0, _react.useContext)(_ComboboxContext.OptionContext);
  var text = (0, _getComboboxText.getComboboxText)(option);

  if (!highlightText || !inputValue || inputValue === '' || inputValue === (0, _getComboboxText.getComboboxText)(contextOption)) {
    return _react["default"].createElement("span", props, text);
  }

  return _react["default"].createElement("span", props, _react["default"].createElement(_Text.ReplaceText, {
    match: inputValue,
    replace: function replace(str, index) {
      return _react["default"].createElement(_Text.Span, {
        fontWeight: "semiBold",
        fontSize: "small",
        textDecoration: "underline",
        key: index
      }, str);
    }
  }, text));
}

var ComboboxOptionText = (0, _styledComponents["default"])(ComboboxOptionTextInternal).withConfig({
  displayName: "ComboboxOption__ComboboxOptionText",
  componentId: "sc-w994y4-2"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 100%;\n  word-wrap: break-word;\n"])));
exports.ComboboxOptionText = ComboboxOptionText;
//# sourceMappingURL=ComboboxOption.js.map