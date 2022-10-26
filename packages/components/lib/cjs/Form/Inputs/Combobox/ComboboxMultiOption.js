"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxMultiOption = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _FauxCheckbox = require("../Checkbox/FauxCheckbox");

var _CheckMark = require("../Checkbox/CheckMark");

var _ComboboxContext = require("./ComboboxContext");

var _ComboboxOption = require("./ComboboxOption");

var _ComboboxOptionIndicator = require("./ComboboxOptionIndicator");

var _useAddOptionToContext = require("./utils/useAddOptionToContext");

var _useOptionEvents = require("./utils/useOptionEvents");

var _useOptionStatus2 = require("./utils/useOptionStatus");

var _useOptionScroll = require("./utils/useOptionScroll");

var _excluded = ["children", "indicator", "highlightText", "scrollIntoView"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ComboboxMultiOption = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
      indicator = _ref.indicator,
      _ref$highlightText = _ref.highlightText,
      highlightText = _ref$highlightText === void 0 ? true : _ref$highlightText,
      scrollIntoView = _ref.scrollIntoView,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var label = props.label,
      value = props.value;
  (0, _useAddOptionToContext.useAddOptionToContext)(_ComboboxContext.ComboboxMultiContext, value, label, scrollIntoView);
  var optionEvents = (0, _useOptionEvents.useOptionEvents)(props, _ComboboxContext.ComboboxMultiContext);

  var _useOptionStatus = (0, _useOptionStatus2.useOptionStatus)(_ComboboxContext.ComboboxMultiContext, value),
      isActive = _useOptionStatus.isActive,
      isSelected = _useOptionStatus.isSelected;

  var scrollRef = (0, _useOptionScroll.useOptionScroll)(_ComboboxContext.ComboboxMultiContext, value, label, scrollIntoView, isActive);
  var ref = (0, _utils.useForkedRef)(scrollRef, forwardedRef);
  return _react["default"].createElement(_ComboboxOption.ComboboxOptionWrapper, (0, _extends2["default"])({}, props, optionEvents, {
    ref: ref,
    "aria-selected": isActive,
    isSelected: isSelected
  }), _react["default"].createElement(_ComboboxOptionIndicator.ComboboxOptionIndicator, {
    indicator: indicator,
    isActive: isActive,
    isSelected: isSelected,
    isMulti: true
  }, _react["default"].createElement(_FauxCheckbox.FauxCheckbox, {
    isSelected: isSelected
  }, _react["default"].createElement(_CheckMark.CheckMark, null))), children || _react["default"].createElement(_ComboboxOption.ComboboxOptionText, {
    highlightText: highlightText
  }));
})).attrs(function (_ref2) {
  var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'text4' : _ref2$color,
      _ref2$display = _ref2.display,
      display = _ref2$display === void 0 ? 'flex' : _ref2$display,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? 'small' : _ref2$fontSize,
      _ref2$lineHeight = _ref2.lineHeight,
      lineHeight = _ref2$lineHeight === void 0 ? 'small' : _ref2$lineHeight,
      _ref2$px = _ref2.px,
      px = _ref2$px === void 0 ? 'xsmall' : _ref2$px,
      _ref2$py = _ref2.py,
      py = _ref2$py === void 0 ? 'xxsmall' : _ref2$py;
  return {
    color: color,
    display: display,
    fontSize: fontSize,
    lineHeight: lineHeight,
    px: px,
    py: py
  };
}).withConfig({
  displayName: "ComboboxMultiOption",
  componentId: "sc-t8w536-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", " {\n    margin-top: 1px;\n  }\n"])), _ComboboxOption.comboboxOptionStyle, _FauxCheckbox.FauxCheckbox);
exports.ComboboxMultiOption = ComboboxMultiOption;
//# sourceMappingURL=ComboboxMultiOption.js.map