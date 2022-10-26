import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["values", "onChange", "chipIconLabel", "clearIconLabel", "inputValue", "onInputChange", "parseInputValue", "validate", "formatInputValue", "onValidationFail", "onDuplicate", "onBlur", "onKeyDown", "onPaste"];

let _ = t => t,
    _t;

import React, { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { useControlWarn, useWrapEvent } from '../../../utils';
import { InputChipsBase } from './InputChipsBase';
export const splitInputValue = inputValue => {
  const commaKey = '0UX1bJKsFBFQonIIXq9oyeV40ITHwtew';
  const tabKey = 'heF6X4qMBtIti8c8U9nMhskYOQUQiXqx';
  const removedEscapes = inputValue.replace(/\\,/g, commaKey).replace(/\\\t/g, tabKey);
  const splitRegexp = `[,\\t\\n\\r]+`;
  return removedEscapes.split(new RegExp(splitRegexp)).map(value => value.replace(new RegExp(commaKey, 'g'), ',').replace(new RegExp(tabKey, 'g'), '\t'));
};
export const validateValues = (newValues, currentValues, validate, formatInputValue) => {
  const duplicateValues = [];
  const invalidValues = [];
  const unusedValues = [];
  const validValues = [];
  newValues.forEach(val => {
    const formattedValue = formatInputValue ? formatInputValue(val) : val;
    if (formattedValue === '') return;

    if (validate && !validate(formattedValue)) {
      unusedValues.push(formattedValue);
      return invalidValues.push(formattedValue);
    } else if (currentValues && currentValues.includes(formattedValue)) {
      unusedValues.push(formattedValue);
      return duplicateValues.push(formattedValue);
    } else {
      return validValues.push(formattedValue);
    }
  });
  return {
    duplicateValues,
    invalidValues,
    unusedValues,
    validValues
  };
};

const trimValue = value => value.trim();

export const InputChips = styled(forwardRef((_ref, ref) => {
  let {
    values,
    onChange,
    chipIconLabel,
    clearIconLabel,
    inputValue: controlledInputValue,
    onInputChange,
    parseInputValue = splitInputValue,
    validate,
    formatInputValue = trimValue,
    onValidationFail,
    onDuplicate,
    onBlur,
    onKeyDown,
    onPaste
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isControlled = useControlWarn({
    controllingProps: ['inputValue', 'onInputChange'],
    isControlledCheck: () => controlledInputValue !== undefined && onInputChange !== undefined,
    name: 'InputChips'
  });
  const [uncontrolledValue, setUncontrolledValue] = useState('');
  const inputValue = isControlled ? controlledInputValue || '' : uncontrolledValue;

  const setInputValue = (val, event) => {
    if (!isControlled) {
      setUncontrolledValue(val);
    }

    if (val !== inputValue) {
      onInputChange && onInputChange(val, event);
    }
  };

  const updateValues = newInputValue => {
    const inputValues = parseInputValue(newInputValue || inputValue);
    const {
      duplicateValues,
      invalidValues,
      unusedValues,
      validValues
    } = validateValues(inputValues, values, validate, formatInputValue);
    const updatedInputValue = unusedValues.join(', ');
    const updatedValues = validValues.length && [...values, ...validValues];

    if (updatedValues) {
      onChange(updatedValues);
    }

    setInputValue(updatedInputValue);

    if (invalidValues.length > 0) {
      onValidationFail && onValidationFail(invalidValues);
    }

    if (duplicateValues.length > 0) {
      onDuplicate && onDuplicate(duplicateValues);
    }
  };

  const handleBlur = () => {
    updateValues();
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateValues();
    }
  };

  const pastedValue = useRef();

  const handlePaste = e => {
    pastedValue.current = e.clipboardData.getData('Text');
  };

  const handleInputChange = (value, event) => {
    if (pastedValue.current || value.endsWith(',') && !value.endsWith('\\,')) {
      updateValues(pastedValue.current || value);
      pastedValue.current = null;
    } else {
      setInputValue(value, event);
    }
  };

  const wrappedEvents = {
    onBlur: useWrapEvent(handleBlur, onBlur),
    onKeyDown: useWrapEvent(handleKeyDown, onKeyDown),
    onPaste: useWrapEvent(handlePaste, onPaste)
  };
  return React.createElement(InputChipsBase, _extends({
    ref: ref,
    values: values,
    onChange: onChange,
    chipIconLabel: chipIconLabel,
    clearIconLabel: clearIconLabel,
    inputValue: inputValue,
    onInputChange: handleInputChange
  }, wrappedEvents, props));
})).withConfig({
  displayName: "InputChips",
  componentId: "sc-6zpztz-0"
})(_t || (_t = _``));
//# sourceMappingURL=InputChips.js.map