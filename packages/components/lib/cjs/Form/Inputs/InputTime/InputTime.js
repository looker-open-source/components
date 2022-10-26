"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert12To24HrString = exports.InputTime = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _noop = _interopRequireDefault(require("lodash/noop"));

var _add = _interopRequireDefault(require("lodash/add"));

var _subtract = _interopRequireDefault(require("lodash/subtract"));

var _ErrorIcon = require("../ErrorIcon");

var _InputProps = require("../InputProps");

var _InputText = require("../InputText");

var _height = require("../height");

var _innerInputStyle = require("../innerInputStyle");

var _simple = require("../../../Layout/utils/simple");

var _utils = require("./utils");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  charCount: 0,
  format: '12h',
  hour: '',
  isComplete: false,
  minute: '',
  period: '',
  subInputFocus: 'NONE'
};

var isNumericKey = function isNumericKey(e) {
  return e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
};

var isArrowKey = function isArrowKey(e) {
  return e.key === 'ArrowUp' || e.key === 'ArrowDown';
};

var isDeleteKey = function isDeleteKey(e) {
  return e.key === 'Backspace' || e.key === 'Delete';
};

var selectNextInput = function selectNextInput(current) {
  switch (current) {
    case 'HOUR':
      return 'MINUTE';

    case 'MINUTE':
      return 'PERIOD';

    case 'PERIOD':
      return 'NONE';

    default:
      return 'NONE';
  }
};

var isInputComplete = function isInputComplete(_ref) {
  var format = _ref.format,
      hour = _ref.hour,
      minute = _ref.minute,
      period = _ref.period;

  if (format === '12h') {
    return !!(hour.length && minute.length && period.length);
  }

  return !!(hour.length && minute.length);
};

var reducer = function reducer(state, action) {
  var payload = action.payload,
      type = action.type;
  var inputValues = {
    format: state.format,
    hour: state.hour,
    minute: state.minute,
    period: state.period
  };

  switch (type) {
    case 'SET_FOCUS':
      return _objectSpread(_objectSpread({}, state), {}, {
        subInputFocus: payload
      });

    case 'FOCUS_NEXT_FIELD':
      return _objectSpread(_objectSpread({}, state), {}, {
        subInputFocus: selectNextInput(state.subInputFocus)
      });

    case 'INCREMENT_CHAR_COUNT':
      return _objectSpread(_objectSpread({}, state), {}, {
        charCount: state.charCount + 1
      });

    case 'RESET_CHAR_COUNT':
      return _objectSpread(_objectSpread({}, state), {}, {
        charCount: 0
      });

    case 'SET_HOUR_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        hour: payload,
        isComplete: isInputComplete(_objectSpread(_objectSpread({}, inputValues), {}, {
          hour: payload
        }))
      });

    case 'SET_MINUTE_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isComplete: isInputComplete(_objectSpread(_objectSpread({}, inputValues), {}, {
          minute: payload
        })),
        minute: payload
      });

    case 'SET_PERIOD_VALUE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isComplete: isInputComplete(_objectSpread(_objectSpread({}, inputValues), {}, {
          period: payload
        })),
        period: payload
      });

    default:
      return state;
  }
};

var cycleValue = function cycleValue(currentValue, key, max, min) {
  var transform = key === 'ArrowUp' ? _add["default"] : _subtract["default"];
  var newValue = transform((0, _utils.parseBase10Int)(currentValue), 1);

  if (newValue < min) {
    return (0, _utils.formatTimeString)(max);
  } else if (newValue > max) {
    return (0, _utils.formatTimeString)(min);
  } else {
    return (0, _utils.formatTimeString)(newValue);
  }
};

var parseValue = function parseValue(format) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (value.length) {
    var _value$split$map = value.split(':').map(_utils.parseBase10Int),
        _value$split$map2 = (0, _slicedToArray2["default"])(_value$split$map, 2),
        hr24 = _value$split$map2[0],
        minute = _value$split$map2[1];

    var hr12 = hr24 <= 12 ? hr24 : hr24 - 12;
    var period = hr24 >= 12 ? 'PM' : 'AM';
    return [(0, _utils.formatTimeString)(format === '12h' ? hr12 : hr24), (0, _utils.formatTimeString)(minute), period];
  }

  return ['', '', ''];
};

var convert12To24HrString = function convert12To24HrString(value) {
  var period = value.includes('P') ? 'PM' : 'AM';
  var numericTime = value.replace(/[APM]/gi, '');

  var _numericTime$split$ma = numericTime.split(':').map(_utils.parseBase10Int),
      _numericTime$split$ma2 = (0, _slicedToArray2["default"])(_numericTime$split$ma, 2),
      _numericTime$split$ma3 = _numericTime$split$ma2[0],
      hour = _numericTime$split$ma3 === void 0 ? 0 : _numericTime$split$ma3,
      _numericTime$split$ma4 = _numericTime$split$ma2[1],
      minute = _numericTime$split$ma4 === void 0 ? 0 : _numericTime$split$ma4;

  var hr24;

  if (period === 'AM' && hour === 12) {
    hr24 = 0;
  } else if (period === 'PM' && hour < 12) {
    hr24 = hour + 12;
  } else {
    hr24 = hour;
  }

  return "".concat((0, _utils.formatTimeString)(hr24), ":").concat((0, _utils.formatTimeString)(minute));
};

exports.convert12To24HrString = convert12To24HrString;
var InputTimeInternal = (0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      defaultValue = _ref2.defaultValue,
      ariaDescribedby = _ref2['aria-describedby'],
      ariaLabelledby = _ref2['aria-labelledby'],
      autoFocus = _ref2.autoFocus,
      disabled = _ref2.disabled,
      _ref2$format = _ref2.format,
      format = _ref2$format === void 0 ? '12h' : _ref2$format,
      id = _ref2.id,
      onChange = _ref2.onChange,
      readOnly = _ref2.readOnly,
      onBlur = _ref2.onBlur,
      onFocus = _ref2.onFocus,
      onValidationFail = _ref2.onValidationFail,
      required = _ref2.required,
      validationType = _ref2.validationType,
      value = _ref2.value;

  var _useReducer = (0, _react.useReducer)(reducer, _objectSpread(_objectSpread({}, initialState), {}, {
    format: format
  })),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      inputState = _useReducer2[0],
      dispatch = _useReducer2[1];

  var hour = inputState.hour,
      minute = inputState.minute,
      period = inputState.period,
      isComplete = inputState.isComplete,
      subInputFocus = inputState.subInputFocus;
  var inputRefs = {
    HOUR: (0, _react.useRef)(null),
    MINUTE: (0, _react.useRef)(null),
    NONE: (0, _react.useRef)(null),
    PERIOD: (0, _react.useRef)(null)
  };

  var handleValidKeyDown = function handleValidKeyDown() {
    dispatch({
      type: 'INCREMENT_CHAR_COUNT'
    });

    if (inputState.charCount > 0) {
      dispatch({
        type: 'FOCUS_NEXT_FIELD'
      });
    }
  };

  var handleDelete = function handleDelete(setStateCB) {
    onChange && onChange(undefined);
    setStateCB();
  };

  var handleHourKeyDown = function handleHourKeyDown(e) {
    var clearHourField = function clearHourField() {
      dispatch({
        payload: '',
        type: 'SET_HOUR_VALUE'
      });
      dispatch({
        type: 'RESET_CHAR_COUNT'
      });
    };

    if (isNumericKey(e)) {
      var _value = (0, _utils.parseBase10Int)(inputState.charCount === 1 ? "".concat(hour).concat(e.key) : e.key);

      if (_value < 24) {
        if (format === '12h' && _value > 12) {
          dispatch({
            payload: (0, _utils.formatTimeString)(_value - 12),
            type: 'SET_HOUR_VALUE'
          });
          dispatch({
            payload: 'PM',
            type: 'SET_PERIOD_VALUE'
          });
        } else {
          dispatch({
            payload: (0, _utils.formatTimeString)(_value),
            type: 'SET_HOUR_VALUE'
          });
        }

        handleValidKeyDown();
      } else {
        clearHourField();
      }
    } else if (isArrowKey(e)) {
      var max = format === '12h' ? 12 : 23;
      var min = format === '12h' ? 1 : 0;
      dispatch({
        payload: cycleValue(hour, e.key, max, min),
        type: 'SET_HOUR_VALUE'
      });
    } else if (isDeleteKey(e)) {
      handleDelete(clearHourField);
    }
  };

  var handleMinuteKeyDown = function handleMinuteKeyDown(e) {
    var clearMinuteField = function clearMinuteField() {
      dispatch({
        payload: '',
        type: 'SET_MINUTE_VALUE'
      });
      dispatch({
        type: 'RESET_CHAR_COUNT'
      });
    };

    if (isNumericKey(e)) {
      var _value2 = (0, _utils.parseBase10Int)(inputState.charCount === 1 ? "".concat(minute).concat(e.key) : e.key);

      if (_value2 < 60) {
        dispatch({
          payload: (0, _utils.formatTimeString)(_value2),
          type: 'SET_MINUTE_VALUE'
        });
        handleValidKeyDown();
      } else {
        clearMinuteField();
      }
    } else if (isArrowKey(e)) {
      dispatch({
        payload: cycleValue(minute, e.key, 59, 0),
        type: 'SET_MINUTE_VALUE'
      });
    } else if (isDeleteKey(e)) {
      handleDelete(clearMinuteField);
    }
  };

  var handlePeriodKeyDown = function handlePeriodKeyDown(e) {
    var clearPeriodField = function clearPeriodField() {
      dispatch({
        payload: '',
        type: 'SET_PERIOD_VALUE'
      });
      dispatch({
        type: 'RESET_CHAR_COUNT'
      });
    };

    var key = e.key.toUpperCase();

    if (key === 'P' || key === 'A') {
      dispatch({
        payload: "".concat(key, "M"),
        type: 'SET_PERIOD_VALUE'
      });
      handleValidKeyDown();
    } else if (isArrowKey(e)) {
      var nextPeriod = period === 'PM' ? 'AM' : 'PM';
      dispatch({
        payload: nextPeriod,
        type: 'SET_PERIOD_VALUE'
      });
    } else if (isDeleteKey(e)) {
      handleDelete(clearPeriodField);
    }
  };

  var handleHourFocus = function handleHourFocus() {
    return dispatch({
      payload: 'HOUR',
      type: 'SET_FOCUS'
    });
  };

  var handleMinuteFocus = function handleMinuteFocus() {
    return dispatch({
      payload: 'MINUTE',
      type: 'SET_FOCUS'
    });
  };

  var handlePeriodFocus = function handlePeriodFocus() {
    return dispatch({
      payload: 'PERIOD',
      type: 'SET_FOCUS'
    });
  };

  var handleBlur = function handleBlur() {
    dispatch({
      payload: 'NONE',
      type: 'SET_FOCUS'
    });
    dispatch({
      type: 'RESET_CHAR_COUNT'
    });
  };

  (0, _react.useEffect)(function () {
    var ref = subInputFocus && inputRefs[subInputFocus];

    if (ref !== null && ref !== void 0 && ref.current) {
      ref.current.focus();
    }
  }, [subInputFocus]);
  (0, _react.useEffect)(function () {
    var valueProp = value || defaultValue;

    if ((0, _utils.isValidTime)(valueProp)) {
      var _parseValue = parseValue(format, valueProp),
          _parseValue2 = (0, _slicedToArray2["default"])(_parseValue, 3),
          newHour = _parseValue2[0],
          newMinute = _parseValue2[1],
          newPeriod = _parseValue2[2];

      hour !== newHour && dispatch({
        payload: newHour,
        type: 'SET_HOUR_VALUE'
      });
      minute !== newMinute && dispatch({
        payload: newMinute,
        type: 'SET_MINUTE_VALUE'
      });
      period !== newPeriod && dispatch({
        payload: newPeriod,
        type: 'SET_PERIOD_VALUE'
      });
    } else {
      onValidationFail && onValidationFail(valueProp);
      console.error("Invalid time (\"".concat(valueProp, "\") passed to <InputTime />. Value should be formatted as a 24-hour string (e.g. value=\"02:00\" or value=\"23:15\")."));
    }
  }, [value]);
  (0, _react.useEffect)(function () {
    if (isComplete) {
      var newValue = format === '12h' ? convert12To24HrString("".concat(hour, ":").concat(minute, " ").concat(period)) : "".concat(hour, ":").concat(minute);

      if (newValue !== value) {
        onChange && onChange("".concat(newValue));
      }
    }
  }, [isComplete, hour, minute, period]);
  return _react["default"].createElement("div", {
    className: "".concat(className, " ").concat(disabled && 'disabled'),
    ref: ref,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby,
    "aria-disabled": disabled
  }, _react["default"].createElement(StyledInput, (0, _extends2["default"])({
    id: id,
    value: hour,
    onKeyDown: readOnly ? _noop["default"] : handleHourKeyDown,
    onFocus: handleHourFocus,
    onBlur: handleBlur,
    onChange: _noop["default"],
    ref: inputRefs.HOUR,
    "data-testid": "input-hour",
    disabled: disabled,
    readOnly: readOnly,
    required: required
  }, (0, _InputProps.getAutoFocusProps)(autoFocus))), _react["default"].createElement("div", null, ":"), _react["default"].createElement(StyledInput, {
    value: minute,
    onKeyDown: readOnly ? _noop["default"] : handleMinuteKeyDown,
    onFocus: handleMinuteFocus,
    onBlur: handleBlur,
    onChange: _noop["default"],
    ref: inputRefs.MINUTE,
    "data-testid": "input-minute",
    disabled: disabled,
    readOnly: readOnly,
    required: required
  }), format === '12h' ? _react["default"].createElement(StyledInput, {
    value: period,
    onKeyDown: readOnly ? _noop["default"] : handlePeriodKeyDown,
    onFocus: handlePeriodFocus,
    onBlur: handleBlur,
    onChange: _noop["default"],
    ref: inputRefs.PERIOD,
    "data-testid": "input-period",
    disabled: disabled,
    readOnly: readOnly,
    required: required
  }) : _react["default"].createElement("span", null), validationType && _react["default"].createElement(_InputText.InputTextContent, {
    pr: "u2"
  }, _react["default"].createElement(_ErrorIcon.ErrorIcon, null)));
});

var StyledInput = _styledComponents["default"].input.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "InputTime__StyledInput",
  componentId: "sc-plt6tg-0"
}).attrs(function () {
  return {
    maxLength: 2,
    placeholder: '--',
    type: 'text'
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  font-family: inherit;\n  font-size: ", ";\n  line-height: ", ";\n  padding: 0;\n  text-align: center;\n  width: ", ";\n\n  &:focus {\n    background: ", ";\n  }\n"])), _innerInputStyle.innerInputStyle, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.small;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeights.medium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.space.u5;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.keyAccent;
});

var InputTime = (0, _styledComponents["default"])(InputTimeInternal).withConfig({
  displayName: "InputTime",
  componentId: "sc-plt6tg-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\n  align-items: center;\n  display: inline-grid;\n  grid-gap: 0.15rem;\n  grid-template-columns: auto auto auto auto 1fr;\n  height: ", ";\n  padding: ", ";\n\n  ", " {\n    justify-self: end;\n  }\n\n  &:focus-within {\n    ", "\n  }\n\n  &:hover {\n    ", "\n  }\n\n  &.disabled {\n    ", "\n  }\n\n  ", "\n"])), _simple.simpleLayoutCSS, _InputText.inputCSS, _height.inputHeight, function (_ref7) {
  var space = _ref7.theme.space;
  return "".concat(space.u05, " ").concat(space.u1, " ").concat(space.u05, " ").concat(space.u3);
}, _InputText.InputTextContent, _InputText.inputTextFocus, _InputText.inputTextHover, _InputText.inputTextDisabled, _InputText.inputTextValidation);
exports.InputTime = InputTime;
//# sourceMappingURL=InputTime.js.map