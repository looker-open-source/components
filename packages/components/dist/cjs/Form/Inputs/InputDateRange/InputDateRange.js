"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputDateRange = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _isFunction = _interopRequireDefault(require("lodash/isFunction"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _dateFns = require("date-fns");
var _CalendarToday = require("@styled-icons/material/CalendarToday");
var _utils = require("../../../utils");
var _Calendar = require("../../../Calendar/Calendar");
var _utils2 = require("../../../Calendar/utils");
var _VisuallyHidden = require("../../../VisuallyHidden");
var _Popover = require("../../../Popover");
var _InlineInputText = require("../InlineInputText");
var _InputTextContent = require("../InputText/InputTextContent");
var _ErrorIcon = require("../ErrorIcon");
var _IconButton = require("../../../Button/IconButton");
var _Space = require("../../../Layout/Space");
var _utils3 = require("../../../utils/");
var _InputText = require("../InputText");
var _height = require("../height");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var getTextForDate = function getTextForDate(range, dateStringFormat, locale) {
  return function (endpoint) {
    var date = endpoint ? range === null || range === void 0 ? void 0 : range[endpoint] : undefined;
    return (0, _utils2.formatDateString)(date, dateStringFormat, locale);
  };
};
var getViewMonthFromValue = function getViewMonthFromValue(value) {
  return value.from || value.to || new Date();
};
var InputDateRange = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var ariaLabelledby = props['aria-labelledby'],
    dateStringFormat = props.dateStringFormat,
    disabled = props.disabled,
    locale = props.locale,
    id = props.id,
    onChange = props.onChange,
    onValidationFail = props.onValidationFail,
    readOnly = props.readOnly,
    value = props.value,
    validationType = props.validationType;
  var _useTranslation = (0, _utils.useTranslation)('InputDateRange'),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)(getViewMonthFromValue(value)),
    _useState2 = _slicedToArray(_useState, 2),
    viewMonth = _useState2[0],
    setViewMonth = _useState2[1];
  var startDateLabelledby = "startDate-labelledby-".concat(id);
  var endDateLabelledby = "endDate-labelledby-".concat(id);
  var dateTexts = (0, _react.useMemo)(function () {
    var getText = getTextForDate(value, dateStringFormat, locale);
    return {
      from: getText('from'),
      to: getText('to')
    };
  }, [value, dateStringFormat, locale]);
  var _useState3 = (0, _react.useState)(dateTexts.from),
    _useState4 = _slicedToArray(_useState3, 2),
    fromTextInputValue = _useState4[0],
    setFromTextInputValue = _useState4[1];
  (0, _react.useEffect)(function () {
    setFromTextInputValue(dateTexts.from);
  }, [dateTexts.from]);
  var fromID = (0, _utils3.useID)(id && "from-".concat(id));
  var _useState5 = (0, _react.useState)(dateTexts.to),
    _useState6 = _slicedToArray(_useState5, 2),
    toTextInputValue = _useState6[0],
    setToTextInputValue = _useState6[1];
  (0, _react.useEffect)(function () {
    setToTextInputValue(dateTexts.to);
  }, [dateTexts.to]);
  var toID = (0, _utils3.useID)(id && "to-".concat(id));
  var getEndpoint = (0, _react.useCallback)(function (_ref) {
    var id = _ref.id;
    return id === fromID ? 'from' : 'to';
  }, [fromID]);
  var updateRangeFromInput = (0, _react.useCallback)(function (currentTarget) {
    var inputValue = currentTarget.value;
    var endpoint = getEndpoint(currentTarget);
    var validationMessage = inputValue;
    var valueEndpoint = value[endpoint];
    if (inputValue === '') {
      validationMessage = '';
      if (valueEndpoint) {
        var newRange = _objectSpread({}, value);
        delete newRange[endpoint];
        onChange(newRange);
      }
    } else {
      var parsedValue = (0, _utils2.parseDateFromString)(inputValue, locale, dateStringFormat);
      if (parsedValue) {
        var _newRange = _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, endpoint, parsedValue));
        validationMessage = _newRange.from && _newRange.to && !(0, _dateFns.isBefore)(_newRange.from, _newRange.to) ? 'Invalid range' : '';
        if (!valueEndpoint || !(0, _dateFns.isSameDay)(valueEndpoint, parsedValue)) {
          setViewMonth(parsedValue);
          onChange(_newRange);
        }
      }
    }
    if (validationMessage && (0, _isFunction["default"])(onValidationFail)) {
      onValidationFail(validationMessage);
    }
  }, [dateStringFormat, getEndpoint, locale, onChange, onValidationFail, value]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    updateRangeFromInput(e.currentTarget);
  }, [updateRangeFromInput]);
  var handleKeyDown = (0, _react.useCallback)(function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateRangeFromInput(e.currentTarget);
    }
  }, [updateRangeFromInput]);
  var handleInputChange = function handleInputChange(e) {
    var value = e.target.value;
    var endpoint = getEndpoint(e.target);
    if (endpoint === 'from') {
      setFromTextInputValue(value);
    } else {
      setToTextInputValue(value);
    }
  };
  var _useToggle = (0, _utils3.useToggle)(),
    isOpen = _useToggle.value,
    setOpen = _useToggle.change,
    toggle = _useToggle.toggle;
  var handleIconClick = (0, _react.useCallback)(function () {
    setViewMonth(getViewMonthFromValue(value));
    toggle();
  }, [toggle, value]);
  var _usePopover = (0, _Popover.usePopover)({
      content: _react["default"].createElement("div", null, _react["default"].createElement(_VisuallyHidden.VisuallyHidden, {
        "aria-live": "assertive"
      }, viewMonth ? (0, _utils2.formatDateString)(viewMonth, 'MMMM-yyyy', locale) : ''), _react["default"].createElement(_Calendar.Calendar, {
        disabled: disabled,
        locale: locale,
        isRange: true,
        onSelectRange: onChange,
        selectedRange: value,
        viewMonth: viewMonth,
        onMonthChange: setViewMonth
      })),
      focusTrap: false,
      isOpen: isOpen,
      placement: 'bottom-start',
      ref: ref,
      setOpen: setOpen,
      triggerToggle: false
    }),
    popover = _usePopover.popover,
    popoverRef = _usePopover.ref;
  var commonInputProps = {
    disabled: disabled,
    fontSize: 'small',
    onBlur: handleBlur,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    readOnly: readOnly
  };
  return _react["default"].createElement(InputTextGroupWrapper, {
    ref: popoverRef,
    disabled: disabled,
    validationType: validationType
  }, _react["default"].createElement(_InlineInputText.InlineInputTextBase, _extends({
    placeholder: t('Start date'),
    "data-testid": "date-from-text-input",
    id: fromID,
    value: fromTextInputValue,
    "aria-labelledby": "".concat(ariaLabelledby, " ").concat(startDateLabelledby)
  }, commonInputProps)), _react["default"].createElement(HyphenWrapper, {
    hasInputValues: !(0, _isEmpty["default"])(value),
    "aria-hidden": "true"
  }, "\u2013"), _react["default"].createElement(_VisuallyHidden.VisuallyHidden, {
    id: endDateLabelledby
  }, 'End date'), _react["default"].createElement(_InlineInputText.InlineInputTextBase, _extends({
    placeholder: t('End date'),
    "data-testid": "date-to-text-input",
    id: toID,
    value: toTextInputValue,
    "aria-labelledby": "".concat(ariaLabelledby, " ").concat(endDateLabelledby)
  }, commonInputProps)), _react["default"].createElement(_Space.Space, {
    gap: "xxsmall",
    justify: "end",
    pr: "u2"
  }, _react["default"].createElement(_IconButton.IconButton, {
    size: "xsmall",
    label: 'Open calendar',
    icon: _react["default"].createElement(_CalendarToday.CalendarToday, null),
    onClick: handleIconClick,
    disabled: readOnly || disabled
  }), validationType === 'error' && _react["default"].createElement(_InputTextContent.InputTextContent, {
    pl: "u1"
  }, _react["default"].createElement(_ErrorIcon.ErrorIcon, null))), popover);
})).withConfig({
  displayName: "InputDateRange",
  componentId: "sc-1mk7l5x-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.InputDateRange = InputDateRange;
var HyphenWrapper = _styledComponents["default"].span.withConfig({
  displayName: "InputDateRange__HyphenWrapper",
  componentId: "sc-1mk7l5x-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  .label-down & {\n    display: none;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme,
    hasInputValues = _ref2.hasInputValues;
  return hasInputValues ? theme.colors.text3 : theme.colors.text1;
});
var InputTextGroupWrapper = _styledComponents["default"].div.withConfig({
  displayName: "InputDateRange__InputTextGroupWrapper",
  componentId: "sc-1mk7l5x-2"
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  align-items: stretch;\n  display: flex;\n  font-family: ", ";\n  height: ", ";\n  justify-content: space-evenly;\n  padding: ", ";\n  width: 100%;\n  &:hover {\n    ", "\n  }\n\n  &:focus-within {\n    ", "\n  }\n\n  ", "\n\n  ", "\n\n  input {\n    font-family: inherit;\n  }\n  ", " {\n    flex-shrink: 0;\n    margin: ", " 0;\n    &:focus-within {\n      background: ", ";\n    }\n    input,\n    span {\n      padding: 0 ", ";\n    }\n  }\n"])), _InputText.inputCSS, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fonts.body;
}, _height.inputHeight, function (_ref4) {
  var space = _ref4.theme.space;
  return "".concat(space.u05, " ").concat(space.u1);
}, _InputText.inputTextHover, _InputText.inputTextFocus, _InputText.inputTextValidation, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled && _InputText.inputTextDisabled;
}, _InlineInputText.InlineInputTextBase, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.u05;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.keyAccent;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.space.u2;
});
//# sourceMappingURL=InputDateRange.js.map