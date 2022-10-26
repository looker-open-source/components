"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTimeSelect = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reduce = _interopRequireDefault(require("lodash/reduce"));

var _map3 = _interopRequireDefault(require("lodash/map"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _find = _interopRequireDefault(require("lodash/find"));

var _trim = _interopRequireDefault(require("lodash/trim"));

var _last = _interopRequireDefault(require("lodash/last"));

var _head = _interopRequireDefault(require("lodash/head"));

var _sortedIndex = _interopRequireDefault(require("lodash/sortedIndex"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _Combobox = require("../Combobox");

var _ComboboxInput = require("../Combobox/ComboboxInput");

var _ComboboxList = require("../Combobox/ComboboxList");

var _ComboboxOption = require("../Combobox/ComboboxOption");

var _ariaProps = require("../ariaProps");

var _utils = require("../../../utils");

var _utils2 = require("../InputTime/utils");

var _templateObject;

var _excluded = ["className", "interval", "format", "onChange", "onBlur", "value", "defaultValue", "validationType", "disabled", "autoFocus", "id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var cycleHourDisplay = function cycleHourDisplay(format, hour) {
  if (format === '12h') {
    if (hour === 0) {
      return 12;
    } else if (hour > 12) {
      return hour - 12;
    }
  }

  return hour;
};

var formatLabel = function formatLabel(format, hour, minute) {
  var formattedHour = (0, _utils2.formatTimeString)(cycleHourDisplay(format, hour));
  var formattedMinute = (0, _utils2.formatTimeString)(minute);
  var period = format === '12h' && (hour < 12 ? 'am' : 'pm');
  return (0, _trim["default"])("".concat(formattedHour, ":").concat(formattedMinute, " ").concat(period || ''));
};

var generateMinuteIntervals = function generateMinuteIntervals(interval) {
  var minutes = new Array(60 / interval);
  return (0, _map3["default"])(minutes, function (_, index) {
    return (0, _utils2.formatTimeString)(index * interval);
  });
};

var generateTimes = function generateTimes(format, interval) {
  var hours = new Array(24);
  var minutes = generateMinuteIntervals(interval);
  return (0, _reduce["default"])(hours, function (result, _, hour) {
    var formatLabel = format === '12h' && (hour < 12 ? 'am' : 'pm');
    var formattedHour = (0, _utils2.formatTimeString)(cycleHourDisplay(format, hour));
    var hourWithMinutes = (0, _map3["default"])(minutes, function (minute) {
      var label = (0, _trim["default"])("".concat(formattedHour, ":").concat(minute, " ").concat(formatLabel || ''));
      var value = "".concat((0, _utils2.formatTimeString)(hour), ":").concat(minute);
      return {
        label: label,
        value: value
      };
    });
    return [].concat((0, _toConsumableArray2["default"])(result), (0, _toConsumableArray2["default"])(hourWithMinutes));
  }, []);
};

var matchClosestMinute = function matchClosestMinute(interval, timeCode) {
  var minuteOptions = (0, _map3["default"])(generateMinuteIntervals(interval), _utils2.parseBase10Int);
  var now = new Date(Date.now());
  var currentMinute = timeCode ? (0, _utils2.parseBase10Int)(timeCode.split(':')[1]) : now.getMinutes();
  var currentHour = timeCode ? (0, _utils2.parseBase10Int)(timeCode.split(':')[0]) : now.getHours();
  var index = (0, _sortedIndex["default"])(minuteOptions, currentMinute);
  var optionBefore = minuteOptions[index - 1] || (0, _head["default"])(minuteOptions);
  var optionAfter = minuteOptions[index] || (0, _last["default"])(minuteOptions);
  var roundedMinute = currentMinute - optionBefore < optionAfter - currentMinute ? optionBefore : optionAfter;
  var formattedHour = (0, _utils2.formatTimeString)(currentHour);
  var formattedMinute = (0, _utils2.formatTimeString)(roundedMinute);
  return "".concat(formattedHour, ":").concat(formattedMinute);
};

var createOptionFromStringValue = function createOptionFromStringValue(format, value) {
  var _map = (0, _map3["default"])(value.split(':'), _utils2.parseBase10Int),
      _map2 = (0, _slicedToArray2["default"])(_map, 2),
      hour = _map2[0],
      minute = _map2[1];

  return {
    label: formatLabel(format, hour, minute),
    value: value
  };
};

var convert12to24hr = function convert12to24hr(hour, period) {
  if (hour + period === '12am') {
    return 0;
  } else if (period === 'pm' && hour < 12) {
    return hour + 12;
  } else {
    return hour;
  }
};

var createOptionFromLabel = function createOptionFromLabel(format, label) {
  var period = label.toLowerCase().includes('p') ? 'pm' : 'am';
  var numericTime = label.replace(/[apm]/gi, '');

  var _numericTime$split$ma = numericTime.split(':').map(_utils2.parseBase10Int),
      _numericTime$split$ma2 = (0, _slicedToArray2["default"])(_numericTime$split$ma, 2),
      _numericTime$split$ma3 = _numericTime$split$ma2[0],
      hour = _numericTime$split$ma3 === void 0 ? 0 : _numericTime$split$ma3,
      _numericTime$split$ma4 = _numericTime$split$ma2[1],
      minute = _numericTime$split$ma4 === void 0 ? 0 : _numericTime$split$ma4;

  var hr24 = convert12to24hr(hour, period);
  var value = "".concat((0, _utils2.formatTimeString)(hr24), ":").concat((0, _utils2.formatTimeString)(minute));

  if ((0, _utils2.isValidTime)(value)) {
    return {
      label: formatLabel(format, hr24, minute),
      value: value
    };
  }

  return undefined;
};

var matchStringValueToOption = function matchStringValueToOption(options, format, value) {
  if (value && (0, _utils2.isValidTime)(value)) {
    var option = (0, _find["default"])(options, {
      value: value
    });
    return option || createOptionFromStringValue(format, value);
  }

  return undefined;
};

var matchStringLabelToOption = function matchStringLabelToOption(options, label) {
  if (label) {
    return (0, _find["default"])(options, function (o) {
      return o.label ? o.label.includes(label) : false;
    });
  }

  return undefined;
};

var setScrollIntoView = function setScrollIntoView(options, interval, selectedOption) {
  if (selectedOption) {
    return (0, _map3["default"])(options, function (option) {
      return matchClosestMinute(interval, selectedOption.value) === option.value ? _objectSpread(_objectSpread({}, option), {}, {
        scrollIntoView: true
      }) : option;
    });
  }

  var now = matchClosestMinute(interval);
  return (0, _map3["default"])(options, function (option) {
    return option.value === now ? _objectSpread(_objectSpread({}, option), {}, {
      scrollIntoView: true
    }) : option;
  });
};

var arrowKeys = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'];
var InputTimeSelectLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 15 : _ref$interval,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? '12h' : _ref$format,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      defaultValue = _ref.defaultValue,
      validationType = _ref.validationType,
      disabled = _ref.disabled,
      autoFocus = _ref.autoFocus,
      id = _ref.id,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  (0, _utils.useReadOnlyWarn)('InputTimeSelect', value, onChange);
  var valueProp = value || defaultValue;

  if (!(0, _utils2.isValidTime)(valueProp)) {
    console.error("Invalid time (\"".concat(valueProp, "\") passed to <InputTimeSelect />. Value should be formatted as a 24-hour string (e.g. value=\"02:00\" or value=\"23:15\")."));
  }

  var timeOptions = generateTimes(format, interval);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedOption = _useState2[0],
      setSelectedOption = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      inputTextValue = _useState4[0],
      setInputTextValue = _useState4[1];

  (0, _react.useEffect)(function () {
    setSelectedOption(matchStringValueToOption(timeOptions, format, value || defaultValue));
  }, [value]);
  var throttledHandleChange = (0, _react.useMemo)(function () {
    return (0, _throttle["default"])(function (newSelectedOption) {
      setSelectedOption(newSelectedOption);
      var newValue = newSelectedOption ? newSelectedOption.value : undefined;

      if ((0, _isFunction["default"])(onChange) && (0, _utils2.isValidTime)(newValue)) {
        onChange(newValue);
      }
    }, 50, {
      trailing: false
    });
  }, [onChange]);

  var handleTextInputChange = function handleTextInputChange(e) {
    setInputTextValue(e.target.value);
  };

  var handleTextInputBlur = function handleTextInputBlur() {
    onBlur && onBlur();
    setInputTextValue('');
  };

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isNavigating = _useState6[0],
      setIsNavigating = _useState6[1];

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.key;

    if (arrowKeys.includes(key)) {
      setIsNavigating(true);
    } else if (key === 'Enter' || key === 'Tab') {
      if (inputTextValue.length) {
        var option = createOptionFromLabel(format, inputTextValue);
        !isNavigating && throttledHandleChange(option);
      }
    } else {
      setIsNavigating(false);
    }
  };

  var optionToFocus = matchStringLabelToOption(timeOptions, inputTextValue) || selectedOption;
  var timeOptionsFocused = setScrollIntoView(timeOptions, interval, optionToFocus);
  var ariaProps = (0, _ariaProps.pickAriaAndValidationProps)(props);

  var _useTranslation = (0, _utils.useTranslation)('InputTimeSelect'),
      t = _useTranslation.t;

  return _react["default"].createElement(_Combobox.Combobox, {
    className: className,
    ref: ref,
    onChange: throttledHandleChange,
    value: selectedOption,
    wrapperAriaLabel: t('Select time')
  }, _react["default"].createElement(_ComboboxInput.ComboboxInput, (0, _extends2["default"])({
    placeholder: t('Select time'),
    onChange: handleTextInputChange,
    onBlur: handleTextInputBlur,
    onKeyDown: handleKeyDown,
    autoComplete: false,
    validationType: validationType,
    disabled: disabled,
    autoFocus: autoFocus,
    id: id
  }, ariaProps)), _react["default"].createElement(_ComboboxList.ComboboxList, {
    persistSelection: true,
    "aria-label": t('Select time')
  }, timeOptionsFocused.map(function (option, index) {
    return _react["default"].createElement(_ComboboxOption.ComboboxOption, (0, _extends2["default"])({}, option, {
      key: index
    }));
  })));
});
InputTimeSelectLayout.displayName = 'InputTimeSelectLayout';
var InputTimeSelect = (0, _styledComponents["default"])(InputTimeSelectLayout).withConfig({
  displayName: "InputTimeSelect",
  componentId: "sc-jpi7di-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
exports.InputTimeSelect = InputTimeSelect;
//# sourceMappingURL=InputTimeSelect.js.map