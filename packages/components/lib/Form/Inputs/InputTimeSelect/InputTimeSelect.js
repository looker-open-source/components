import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _2 = t => t,
    _t;

const _excluded = ["className", "interval", "format", "onChange", "onBlur", "value", "defaultValue", "validationType", "disabled", "autoFocus", "id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useMemo, forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import reduce from 'lodash/reduce';
import map from 'lodash/map';
import isFunction from 'lodash/isFunction';
import find from 'lodash/find';
import trim from 'lodash/trim';
import last from 'lodash/last';
import head from 'lodash/head';
import sortedIndex from 'lodash/sortedIndex';
import throttle from 'lodash/throttle';
import { Combobox } from '../Combobox';
import { ComboboxInput } from '../Combobox/ComboboxInput';
import { ComboboxList } from '../Combobox/ComboboxList';
import { ComboboxOption } from '../Combobox/ComboboxOption';
import { pickAriaAndValidationProps } from '../ariaProps';
import { useReadOnlyWarn, useTranslation } from '../../../utils';
import { formatTimeString, parseBase10Int, isValidTime } from '../InputTime/utils';

const cycleHourDisplay = (format, hour) => {
  if (format === '12h') {
    if (hour === 0) {
      return 12;
    } else if (hour > 12) {
      return hour - 12;
    }
  }

  return hour;
};

const formatLabel = (format, hour, minute) => {
  const formattedHour = formatTimeString(cycleHourDisplay(format, hour));
  const formattedMinute = formatTimeString(minute);
  const period = format === '12h' && (hour < 12 ? 'am' : 'pm');
  return trim(`${formattedHour}:${formattedMinute} ${period || ''}`);
};

const generateMinuteIntervals = interval => {
  const minutes = new Array(60 / interval);
  return map(minutes, (_, index) => formatTimeString(index * interval));
};

const generateTimes = (format, interval) => {
  const hours = new Array(24);
  const minutes = generateMinuteIntervals(interval);
  return reduce(hours, (result, _, hour) => {
    const formatLabel = format === '12h' && (hour < 12 ? 'am' : 'pm');
    const formattedHour = formatTimeString(cycleHourDisplay(format, hour));
    const hourWithMinutes = map(minutes, minute => {
      const label = trim(`${formattedHour}:${minute} ${formatLabel || ''}`);
      const value = `${formatTimeString(hour)}:${minute}`;
      return {
        label,
        value
      };
    });
    return [...result, ...hourWithMinutes];
  }, []);
};

const matchClosestMinute = (interval, timeCode) => {
  const minuteOptions = map(generateMinuteIntervals(interval), parseBase10Int);
  const now = new Date(Date.now());
  const currentMinute = timeCode ? parseBase10Int(timeCode.split(':')[1]) : now.getMinutes();
  const currentHour = timeCode ? parseBase10Int(timeCode.split(':')[0]) : now.getHours();
  const index = sortedIndex(minuteOptions, currentMinute);
  const optionBefore = minuteOptions[index - 1] || head(minuteOptions);
  const optionAfter = minuteOptions[index] || last(minuteOptions);
  const roundedMinute = currentMinute - optionBefore < optionAfter - currentMinute ? optionBefore : optionAfter;
  const formattedHour = formatTimeString(currentHour);
  const formattedMinute = formatTimeString(roundedMinute);
  return `${formattedHour}:${formattedMinute}`;
};

const createOptionFromStringValue = (format, value) => {
  const [hour, minute] = map(value.split(':'), parseBase10Int);
  return {
    label: formatLabel(format, hour, minute),
    value
  };
};

const convert12to24hr = (hour, period) => {
  if (hour + period === '12am') {
    return 0;
  } else if (period === 'pm' && hour < 12) {
    return hour + 12;
  } else {
    return hour;
  }
};

const createOptionFromLabel = (format, label) => {
  const period = label.toLowerCase().includes('p') ? 'pm' : 'am';
  const numericTime = label.replace(/[apm]/gi, '');
  const [hour = 0, minute = 0] = numericTime.split(':').map(parseBase10Int);
  const hr24 = convert12to24hr(hour, period);
  const value = `${formatTimeString(hr24)}:${formatTimeString(minute)}`;

  if (isValidTime(value)) {
    return {
      label: formatLabel(format, hr24, minute),
      value
    };
  }

  return undefined;
};

const matchStringValueToOption = (options, format, value) => {
  if (value && isValidTime(value)) {
    const option = find(options, {
      value
    });
    return option || createOptionFromStringValue(format, value);
  }

  return undefined;
};

const matchStringLabelToOption = (options, label) => {
  if (label) {
    return find(options, o => {
      return o.label ? o.label.includes(label) : false;
    });
  }

  return undefined;
};

const setScrollIntoView = (options, interval, selectedOption) => {
  if (selectedOption) {
    return map(options, option => matchClosestMinute(interval, selectedOption.value) === option.value ? _objectSpread(_objectSpread({}, option), {}, {
      scrollIntoView: true
    }) : option);
  }

  const now = matchClosestMinute(interval);
  return map(options, option => option.value === now ? _objectSpread(_objectSpread({}, option), {}, {
    scrollIntoView: true
  }) : option);
};

const arrowKeys = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'];
const InputTimeSelectLayout = forwardRef((_ref, ref) => {
  let {
    className,
    interval = 15,
    format = '12h',
    onChange,
    onBlur,
    value = '',
    defaultValue,
    validationType,
    disabled,
    autoFocus,
    id
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  useReadOnlyWarn('InputTimeSelect', value, onChange);
  const valueProp = value || defaultValue;

  if (!isValidTime(valueProp)) {
    console.error(`Invalid time ("${valueProp}") passed to <InputTimeSelect />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").`);
  }

  const timeOptions = generateTimes(format, interval);
  const [selectedOption, setSelectedOption] = useState();
  const [inputTextValue, setInputTextValue] = useState('');
  useEffect(() => {
    setSelectedOption(matchStringValueToOption(timeOptions, format, value || defaultValue));
  }, [value]);
  const throttledHandleChange = useMemo(() => throttle(newSelectedOption => {
    setSelectedOption(newSelectedOption);
    const newValue = newSelectedOption ? newSelectedOption.value : undefined;

    if (isFunction(onChange) && isValidTime(newValue)) {
      onChange(newValue);
    }
  }, 50, {
    trailing: false
  }), [onChange]);

  const handleTextInputChange = e => {
    setInputTextValue(e.target.value);
  };

  const handleTextInputBlur = () => {
    onBlur && onBlur();
    setInputTextValue('');
  };

  const [isNavigating, setIsNavigating] = useState(false);

  const handleKeyDown = e => {
    const {
      key
    } = e;

    if (arrowKeys.includes(key)) {
      setIsNavigating(true);
    } else if (key === 'Enter' || key === 'Tab') {
      if (inputTextValue.length) {
        const option = createOptionFromLabel(format, inputTextValue);
        !isNavigating && throttledHandleChange(option);
      }
    } else {
      setIsNavigating(false);
    }
  };

  const optionToFocus = matchStringLabelToOption(timeOptions, inputTextValue) || selectedOption;
  const timeOptionsFocused = setScrollIntoView(timeOptions, interval, optionToFocus);
  const ariaProps = pickAriaAndValidationProps(props);
  const {
    t
  } = useTranslation('InputTimeSelect');
  return React.createElement(Combobox, {
    className: className,
    ref: ref,
    onChange: throttledHandleChange,
    value: selectedOption,
    wrapperAriaLabel: t('Select time')
  }, React.createElement(ComboboxInput, _extends({
    placeholder: t('Select time'),
    onChange: handleTextInputChange,
    onBlur: handleTextInputBlur,
    onKeyDown: handleKeyDown,
    autoComplete: false,
    validationType: validationType,
    disabled: disabled,
    autoFocus: autoFocus,
    id: id
  }, ariaProps)), React.createElement(ComboboxList, {
    persistSelection: true,
    "aria-label": t('Select time')
  }, timeOptionsFocused.map((option, index) => React.createElement(ComboboxOption, _extends({}, option, {
    key: index
  })))));
});
InputTimeSelectLayout.displayName = 'InputTimeSelectLayout';
export const InputTimeSelect = styled(InputTimeSelectLayout).withConfig({
  displayName: "InputTimeSelect",
  componentId: "sc-jpi7di-0"
})(_t || (_t = _2`
  width: 100%;
`));
//# sourceMappingURL=InputTimeSelect.js.map