"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputDate = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _dateFns = require("date-fns");

var _CalendarToday = require("@styled-icons/material/CalendarToday");

var _InputText = require("../InputText");

var _utils = require("../../../utils");

var _utils2 = require("../../../Calendar/utils");

var _Calendar = require("../../../Calendar");

var _Popover = require("../../../Popover");

var _VisuallyHidden = require("../../../VisuallyHidden");

var _IconButton = require("../../../Button/IconButton");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isDateInView = function isDateInView(value, viewMonth) {
  return !!(value.getFullYear() === viewMonth.getFullYear() && value.getMonth() === viewMonth.getMonth());
};

var InputDate = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      dateStringFormat = props.dateStringFormat,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      id = props.id,
      locale = props.locale,
      onChange = props.onChange,
      onValidationFail = props.onValidationFail,
      readOnly = props.readOnly,
      validationType = props.validationType,
      value = props.value;

  var _useTranslation = (0, _utils.useTranslation)('InputDate'),
      t = _useTranslation.t;

  (0, _utils.useReadOnlyWarn)('InputDate', value, onChange);

  var _useState = (0, _react.useState)(value || defaultValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var _useState3 = (0, _react.useState)(selectedDate ? (0, _utils2.formatDateString)(selectedDate, dateStringFormat, locale) : ''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      textInputValue = _useState4[0],
      setTextInputValue = _useState4[1];

  var _useState5 = (0, _react.useState)(value || defaultValue || new Date(Date.now())),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      viewMonth = _useState6[0],
      setViewMonth = _useState6[1];

  var handleDateChange = (0, _react.useCallback)(function (date) {
    setSelectedDate(date);
    setViewMonth(date || new Date());

    if ((0, _isFunction["default"])(onChange)) {
      onChange(date);
    }
  }, [onChange]);
  var handleTextInputChange = (0, _react.useCallback)(function (e) {
    if (e.target === e.currentTarget) {
      var _value = e.currentTarget.value;
      setTextInputValue(_value);
    }
  }, []);
  var updateDateFromInput = (0, _react.useCallback)(function (currentTarget) {
    var value = currentTarget.value;
    var isValid = value.length === 0 || !!(0, _utils2.parseDateFromString)(value, locale, dateStringFormat);

    if (!isValid && (0, _isFunction["default"])(onValidationFail)) {
      onValidationFail(value);
    }

    if (value.length === 0) {
      handleDateChange();
    } else {
      var parsedValue = (0, _utils2.parseDateFromString)(value, locale, dateStringFormat);

      if (parsedValue) {
        handleDateChange(parsedValue);
      }
    }
  }, [dateStringFormat, handleDateChange, locale, onValidationFail]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    updateDateFromInput(e.currentTarget);
  }, [updateDateFromInput]);
  var handleKeyDown = (0, _react.useCallback)(function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateDateFromInput(e.currentTarget);
    }
  }, [updateDateFromInput]);
  var handleCalendarClose = (0, _react.useCallback)(function (date) {
    setTextInputValue((0, _utils2.formatDateString)(date, dateStringFormat, locale));
    handleDateChange(date);
  }, [dateStringFormat, handleDateChange, locale]);
  (0, _react.useEffect)(function () {
    if (value && !(0, _isEqual["default"])(value, selectedDate)) {
      setSelectedDate(value);
      value && setTextInputValue((0, _utils2.formatDateString)(value, dateStringFormat, locale));
      value && viewMonth && !isDateInView(value, viewMonth) && setViewMonth(value);
    }
  }, [textInputValue, value, onChange]);

  var _useToggle = (0, _utils.useToggle)(),
      isOpen = _useToggle.value,
      setOpen = _useToggle.change,
      toggle = _useToggle.toggle;

  var _usePopover = (0, _Popover.usePopover)({
    content: _react["default"].createElement("div", null, _react["default"].createElement(_VisuallyHidden.VisuallyHidden, {
      "aria-live": "assertive",
      "data-testid": "hidden-value"
    }, viewMonth ? (0, _dateFns.format)(viewMonth, 'MMMM-yyyy') : ''), _react["default"].createElement(_Calendar.Calendar, {
      selectedDate: selectedDate,
      onSelectDate: handleCalendarClose,
      viewMonth: viewMonth,
      onMonthChange: setViewMonth
    })),
    focusTrap: false,
    isOpen: isOpen,
    placement: 'bottom-start',
    setOpen: setOpen,
    triggerToggle: false
  }),
      popover = _usePopover.popover,
      popoverRef = _usePopover.ref;

  return _react["default"].createElement("div", {
    ref: popoverRef
  }, _react["default"].createElement(_InputText.InputText, {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby,
    after: _react["default"].createElement(_IconButton.IconButton, {
      size: "xsmall",
      label: t('Open calendar'),
      icon: _react["default"].createElement(_CalendarToday.CalendarToday, null),
      onClick: toggle
    }),
    value: textInputValue,
    onChange: handleTextInputChange,
    validationType: validationType,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    "data-testid": "text-input",
    id: id,
    ref: ref,
    disabled: disabled,
    readOnly: readOnly
  }), popover);
})).withConfig({
  displayName: "InputDate",
  componentId: "sc-9tulkd-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
exports.InputDate = InputDate;
//# sourceMappingURL=InputDate.js.map