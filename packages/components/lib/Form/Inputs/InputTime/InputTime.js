import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t,
    _t2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef, useReducer, useEffect, useRef } from 'react';
import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import noop from 'lodash/noop';
import add from 'lodash/add';
import subtract from 'lodash/subtract';
import { ErrorIcon } from '../ErrorIcon';
import { getAutoFocusProps } from '../InputProps';
import { InputTextContent, inputCSS, inputTextHover, inputTextFocus, inputTextDisabled, inputTextValidation } from '../InputText';
import { inputHeight } from '../height';
import { innerInputStyle } from '../innerInputStyle';
import { simpleLayoutCSS } from '../../../Layout/utils/simple';
import { formatTimeString, parseBase10Int, isValidTime } from './utils';
const initialState = {
  charCount: 0,
  format: '12h',
  hour: '',
  isComplete: false,
  minute: '',
  period: '',
  subInputFocus: 'NONE'
};

const isNumericKey = e => e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105;

const isArrowKey = e => e.key === 'ArrowUp' || e.key === 'ArrowDown';

const isDeleteKey = e => {
  return e.key === 'Backspace' || e.key === 'Delete';
};

const selectNextInput = current => {
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

const isInputComplete = ({
  format,
  hour,
  minute,
  period
}) => {
  if (format === '12h') {
    return !!(hour.length && minute.length && period.length);
  }

  return !!(hour.length && minute.length);
};

const reducer = (state, action) => {
  const {
    payload,
    type
  } = action;
  const inputValues = {
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

const cycleValue = (currentValue, key, max, min) => {
  const transform = key === 'ArrowUp' ? add : subtract;
  const newValue = transform(parseBase10Int(currentValue), 1);

  if (newValue < min) {
    return formatTimeString(max);
  } else if (newValue > max) {
    return formatTimeString(min);
  } else {
    return formatTimeString(newValue);
  }
};

const parseValue = (format, value = '') => {
  if (value.length) {
    const [hr24, minute] = value.split(':').map(parseBase10Int);
    const hr12 = hr24 <= 12 ? hr24 : hr24 - 12;
    const period = hr24 >= 12 ? 'PM' : 'AM';
    return [formatTimeString(format === '12h' ? hr12 : hr24), formatTimeString(minute), period];
  }

  return ['', '', ''];
};

export const convert12To24HrString = value => {
  const period = value.includes('P') ? 'PM' : 'AM';
  const numericTime = value.replace(/[APM]/gi, '');
  const [hour = 0, minute = 0] = numericTime.split(':').map(parseBase10Int);
  let hr24;

  if (period === 'AM' && hour === 12) {
    hr24 = 0;
  } else if (period === 'PM' && hour < 12) {
    hr24 = hour + 12;
  } else {
    hr24 = hour;
  }

  return `${formatTimeString(hr24)}:${formatTimeString(minute)}`;
};
const InputTimeInternal = forwardRef(({
  className,
  defaultValue,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  autoFocus,
  disabled,
  format: _format = '12h',
  id,
  onChange,
  readOnly,
  onBlur,
  onFocus,
  onValidationFail,
  required,
  validationType,
  value
}, ref) => {
  const [inputState, dispatch] = useReducer(reducer, _objectSpread(_objectSpread({}, initialState), {}, {
    format: _format
  }));
  const {
    hour,
    minute,
    period,
    isComplete,
    subInputFocus
  } = inputState;
  const inputRefs = {
    HOUR: useRef(null),
    MINUTE: useRef(null),
    NONE: useRef(null),
    PERIOD: useRef(null)
  };

  const handleValidKeyDown = () => {
    dispatch({
      type: 'INCREMENT_CHAR_COUNT'
    });

    if (inputState.charCount > 0) {
      dispatch({
        type: 'FOCUS_NEXT_FIELD'
      });
    }
  };

  const handleDelete = setStateCB => {
    onChange && onChange(undefined);
    setStateCB();
  };

  const handleHourKeyDown = e => {
    const clearHourField = () => {
      dispatch({
        payload: '',
        type: 'SET_HOUR_VALUE'
      });
      dispatch({
        type: 'RESET_CHAR_COUNT'
      });
    };

    if (isNumericKey(e)) {
      const value = parseBase10Int(inputState.charCount === 1 ? `${hour}${e.key}` : e.key);

      if (value < 24) {
        if (_format === '12h' && value > 12) {
          dispatch({
            payload: formatTimeString(value - 12),
            type: 'SET_HOUR_VALUE'
          });
          dispatch({
            payload: 'PM',
            type: 'SET_PERIOD_VALUE'
          });
        } else {
          dispatch({
            payload: formatTimeString(value),
            type: 'SET_HOUR_VALUE'
          });
        }

        handleValidKeyDown();
      } else {
        clearHourField();
      }
    } else if (isArrowKey(e)) {
      const max = _format === '12h' ? 12 : 23;
      const min = _format === '12h' ? 1 : 0;
      dispatch({
        payload: cycleValue(hour, e.key, max, min),
        type: 'SET_HOUR_VALUE'
      });
    } else if (isDeleteKey(e)) {
      handleDelete(clearHourField);
    }
  };

  const handleMinuteKeyDown = e => {
    const clearMinuteField = () => {
      dispatch({
        payload: '',
        type: 'SET_MINUTE_VALUE'
      });
      dispatch({
        type: 'RESET_CHAR_COUNT'
      });
    };

    if (isNumericKey(e)) {
      const value = parseBase10Int(inputState.charCount === 1 ? `${minute}${e.key}` : e.key);

      if (value < 60) {
        dispatch({
          payload: formatTimeString(value),
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

  const handlePeriodKeyDown = e => {
    const clearPeriodField = () => {
      dispatch({
        payload: '',
        type: 'SET_PERIOD_VALUE'
      });
      dispatch({
        type: 'RESET_CHAR_COUNT'
      });
    };

    const key = e.key.toUpperCase();

    if (key === 'P' || key === 'A') {
      dispatch({
        payload: `${key}M`,
        type: 'SET_PERIOD_VALUE'
      });
      handleValidKeyDown();
    } else if (isArrowKey(e)) {
      const nextPeriod = period === 'PM' ? 'AM' : 'PM';
      dispatch({
        payload: nextPeriod,
        type: 'SET_PERIOD_VALUE'
      });
    } else if (isDeleteKey(e)) {
      handleDelete(clearPeriodField);
    }
  };

  const handleHourFocus = () => dispatch({
    payload: 'HOUR',
    type: 'SET_FOCUS'
  });

  const handleMinuteFocus = () => dispatch({
    payload: 'MINUTE',
    type: 'SET_FOCUS'
  });

  const handlePeriodFocus = () => dispatch({
    payload: 'PERIOD',
    type: 'SET_FOCUS'
  });

  const handleBlur = () => {
    dispatch({
      payload: 'NONE',
      type: 'SET_FOCUS'
    });
    dispatch({
      type: 'RESET_CHAR_COUNT'
    });
  };

  useEffect(() => {
    const ref = subInputFocus && inputRefs[subInputFocus];

    if (ref !== null && ref !== void 0 && ref.current) {
      ref.current.focus();
    }
  }, [subInputFocus]);
  useEffect(() => {
    const valueProp = value || defaultValue;

    if (isValidTime(valueProp)) {
      const [newHour, newMinute, newPeriod] = parseValue(_format, valueProp);
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
      console.error(`Invalid time ("${valueProp}") passed to <InputTime />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").`);
    }
  }, [value]);
  useEffect(() => {
    if (isComplete) {
      const newValue = _format === '12h' ? convert12To24HrString(`${hour}:${minute} ${period}`) : `${hour}:${minute}`;

      if (newValue !== value) {
        onChange && onChange(`${newValue}`);
      }
    }
  }, [isComplete, hour, minute, period]);
  return React.createElement("div", {
    className: `${className} ${disabled && 'disabled'}`,
    ref: ref,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby,
    "aria-disabled": disabled
  }, React.createElement(StyledInput, _extends({
    id: id,
    value: hour,
    onKeyDown: readOnly ? noop : handleHourKeyDown,
    onFocus: handleHourFocus,
    onBlur: handleBlur,
    onChange: noop,
    ref: inputRefs.HOUR,
    "data-testid": "input-hour",
    disabled: disabled,
    readOnly: readOnly,
    required: required
  }, getAutoFocusProps(autoFocus))), React.createElement("div", null, ":"), React.createElement(StyledInput, {
    value: minute,
    onKeyDown: readOnly ? noop : handleMinuteKeyDown,
    onFocus: handleMinuteFocus,
    onBlur: handleBlur,
    onChange: noop,
    ref: inputRefs.MINUTE,
    "data-testid": "input-minute",
    disabled: disabled,
    readOnly: readOnly,
    required: required
  }), _format === '12h' ? React.createElement(StyledInput, {
    value: period,
    onKeyDown: readOnly ? noop : handlePeriodKeyDown,
    onFocus: handlePeriodFocus,
    onBlur: handleBlur,
    onChange: noop,
    ref: inputRefs.PERIOD,
    "data-testid": "input-period",
    disabled: disabled,
    readOnly: readOnly,
    required: required
  }) : React.createElement("span", null), validationType && React.createElement(InputTextContent, {
    pr: "u2"
  }, React.createElement(ErrorIcon, null)));
});
const StyledInput = styled.input.withConfig({
  shouldForwardProp,
  displayName: "InputTime__StyledInput",
  componentId: "sc-plt6tg-0"
}).attrs(() => ({
  maxLength: 2,
  placeholder: '--',
  type: 'text'
}))(_t || (_t = _`
  ${0}
  font-family: inherit;
  font-size: ${0};
  line-height: ${0};
  padding: 0;
  text-align: center;
  width: ${0};

  &:focus {
    background: ${0};
  }
`), innerInputStyle, ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.lineHeights.medium, ({
  theme
}) => theme.space.u5, ({
  theme
}) => theme.colors.keyAccent);
export const InputTime = styled(InputTimeInternal).withConfig({
  displayName: "InputTime",
  componentId: "sc-plt6tg-1"
})(_t2 || (_t2 = _`
  ${0}
  ${0}

  align-items: center;
  display: inline-grid;
  grid-gap: 0.15rem;
  grid-template-columns: auto auto auto auto 1fr;
  height: ${0};
  padding: ${0};

  ${0} {
    justify-self: end;
  }

  &:focus-within {
    ${0}
  }

  &:hover {
    ${0}
  }

  &.disabled {
    ${0}
  }

  ${0}
`), simpleLayoutCSS, inputCSS, inputHeight, ({
  theme: {
    space
  }
}) => `${space.u05} ${space.u1} ${space.u05} ${space.u3}`, InputTextContent, inputTextFocus, inputTextHover, inputTextDisabled, inputTextValidation);
//# sourceMappingURL=InputTime.js.map