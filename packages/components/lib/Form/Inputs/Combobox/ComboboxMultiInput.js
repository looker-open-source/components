import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["autoComplete", "inputReadOnly", "readOnly", "onClear", "onInputChange", "inputValue", "freeInput", "validate", "formatInputValue", "onValidationFail", "onDuplicate", "chipIconLabel", "clearIconLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import omit from 'lodash/omit';
import React, { forwardRef, useContext, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useForkedRef } from '../../../utils';
import { InputChips, InputChipsBase, joinValues, splitInputValue } from '../InputChips';
import { ComboboxMultiContext } from './ComboboxContext';
import { comboboxStyles } from './ComboboxInput';
import { getComboboxText, formatOptionAsString, parseOption } from './utils';
import { makeHash } from './utils/makeHash';
import { ComboboxActionType, ComboboxState, getOptionsFromValues } from './utils/state';
import { useInputEvents } from './utils/useInputEvents';
import { useInputPropRefs } from './utils/useInputPropRefs';

function parseInputValue(value) {
  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.map(option => typeof option === 'string' ? option : JSON.stringify(option));
    }

    return splitInputValue(value);
  } catch (e) {
    return splitInputValue(value);
  }
}

function formatTextToCopy(selectedValues) {
  let noJson = true;
  const jsonReadyValues = selectedValues.map(value => {
    try {
      JSON.parse(value);
      noJson = false;
      return value;
    } catch (e) {
      return `"${value}"`;
    }
  });

  if (noJson) {
    return joinValues(selectedValues);
  }

  return `[${jsonReadyValues.join(',')}]`;
}

export const ComboboxMultiInputInternal = forwardRef((props, forwardedRef) => {
  const {
    autoComplete = true,
    inputReadOnly = false,
    readOnly = false,
    onClear,
    onInputChange,
    inputValue: controlledInputValue,
    freeInput = false,
    validate,
    formatInputValue,
    onValidationFail,
    onDuplicate,
    chipIconLabel,
    clearIconLabel
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const {
    data: {
      navigationOption,
      options,
      inputValue: contextInputValue
    },
    onChange: contextOnChange,
    inputCallbackRef,
    state,
    transition,
    id,
    isVisible
  } = useContext(ComboboxMultiContext);
  useInputPropRefs(props, ComboboxMultiContext);

  function handleClear() {
    transition && transition(ComboboxActionType.CLEAR);
    contextOnChange && contextOnChange([]);
    onClear && onClear();
  }

  function handleChange(values) {
    transition && transition(ComboboxActionType.CHANGE_VALUES, {
      inputValues: values
    });
    const newOptions = getOptionsFromValues(options, values);
    contextOnChange && contextOnChange(newOptions);
  }

  const isInputting = useRef(false);
  const handleInputValueChange = useCallback(value => {
    const action = isInputting.current ? ComboboxActionType.CHANGE : ComboboxActionType.CHANGE_SILENT;
    transition === null || transition === void 0 ? void 0 : transition(action, {
      inputValue: value
    });
  }, [transition]);
  const latestInputValueRef = useRef();
  useEffect(() => {
    if (contextInputValue !== undefined && contextInputValue !== latestInputValueRef.current) {
      onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(contextInputValue);
      latestInputValueRef.current = contextInputValue;
    }
  }, [contextInputValue]);
  useEffect(() => {
    if (controlledInputValue !== undefined) {
      handleInputValueChange(controlledInputValue);
      latestInputValueRef.current = controlledInputValue;
    }
  }, [controlledInputValue]);
  const isControlled = controlledInputValue !== undefined;
  const handleInputChange = useCallback((value, event) => {
    isInputting.current = event !== undefined;

    if (!isControlled) {
      handleInputValueChange(value);
    }

    requestAnimationFrame(() => {
      isInputting.current = false;
    });
  }, [handleInputValueChange, isControlled]);
  const inputValues = options.map(formatOptionAsString);
  let inputValue = contextInputValue || '';

  if (autoComplete && (state === ComboboxState.NAVIGATING || state === ComboboxState.INTERACTING) && navigationOption) {
    inputValue = getComboboxText(navigationOption);
  }

  const wrappedOnInputChange = useCallback((value, event) => {
    handleInputChange(value, event);
    onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(value, event);
    latestInputValueRef.current = value;
  }, [handleInputChange, onInputChange]);
  const inputEvents = useInputEvents(props, ComboboxMultiContext);

  function formatChip(value) {
    const option = parseOption(value);
    return option.label || option.value;
  }

  const commonProps = _objectSpread(_objectSpread(_objectSpread({}, omit(rest, 'selectOnClick')), inputEvents), {}, {
    'aria-activedescendant': navigationOption ? String(makeHash(navigationOption ? navigationOption.value : '')) : undefined,
    'aria-autocomplete': 'both',
    autoComplete: 'off',
    chipIconLabel,
    clearIconLabel,
    formatChip,
    formatTextToCopy,
    id: `listbox-input-${id}`,
    inputReadOnly,
    inputValue,
    isVisibleOptions: isVisible,
    onChange: handleChange,
    onClear: handleClear,
    onInputChange: wrappedOnInputChange,
    readOnly,
    showCaret: true,
    values: inputValues
  });

  const ref = useForkedRef(inputCallbackRef, forwardedRef);
  return freeInput ? React.createElement(InputChips, _extends({}, commonProps, {
    validate: validate,
    formatInputValue: formatInputValue,
    onValidationFail: onValidationFail,
    onDuplicate: onDuplicate,
    parseInputValue: parseInputValue,
    ref: ref
  })) : React.createElement(InputChipsBase, _extends({}, commonProps, {
    ref: ref
  }));
});
ComboboxMultiInputInternal.displayName = 'ComboboxMultiInputInternal';
export const ComboboxMultiInput = styled(ComboboxMultiInputInternal).attrs(({
  width: _width = '100%'
}) => ({
  width: _width
})).withConfig({
  displayName: "ComboboxMultiInput",
  componentId: "sc-17k5d0g-0"
})(_t || (_t = _`
  ${0}
  padding-right: 0;
`), comboboxStyles);
//# sourceMappingURL=ComboboxMultiInput.js.map