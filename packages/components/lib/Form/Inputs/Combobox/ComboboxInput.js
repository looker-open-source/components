import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3;

const _excluded = ["autoComplete", "disabled", "freeInput", "clearIconLabel", "inputReadOnly", "isClearable", "onChange", "noErrorIcon", "readOnly", "summary", "validationType", "value"];
import omit from 'lodash/omit';
import React, { forwardRef, useRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { useForkedRef, useSafeLayoutEffect, useWrapEvent } from '../../../utils';
import { InputText } from '../InputText';
import { AdvancedInputControls } from '../AdvancedInputControls';
import { ComboboxContext } from './ComboboxContext';
import { getComboboxText } from './utils/getComboboxText';
import { makeHash } from './utils/makeHash';
import { ComboboxActionType, ComboboxState } from './utils/state';
import { useInputEvents } from './utils/useInputEvents';
import { useInputPropRefs } from './utils/useInputPropRefs';
export const ComboboxInputInternal = forwardRef((props, forwardedRef) => {
  const {
    autoComplete = true,
    disabled,
    freeInput,
    clearIconLabel,
    inputReadOnly = false,
    isClearable,
    onChange,
    noErrorIcon,
    readOnly = false,
    summary,
    validationType,
    value: controlledValue
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const {
    data: {
      navigationOption,
      option,
      inputValue: contextInputValue
    },
    onChange: contextOnChange,
    inputCallbackRef,
    inputElement,
    state,
    transition,
    id,
    isVisible
  } = useContext(ComboboxContext);
  useInputPropRefs(props, ComboboxContext);
  const ref = useForkedRef(inputCallbackRef, forwardedRef);
  const isControlled = controlledValue !== undefined;

  function handleClear() {
    contextOnChange && contextOnChange(undefined);
    transition && transition(ComboboxActionType.CLEAR);
    inputElement === null || inputElement === void 0 ? void 0 : inputElement.focus();
  }

  function handleValueChange(value) {
    transition && transition(ComboboxActionType.CHANGE, {
      inputValue: value
    });
  }

  const isInputting = useRef(false);
  useSafeLayoutEffect(() => {
    if (controlledValue !== undefined) {
      if (isInputting.current) {
        handleValueChange(controlledValue);
      } else {
        transition && transition(ComboboxActionType.CHANGE_SILENT, {
          inputValue: controlledValue
        });
      }
    }
  }, [controlledValue]);

  function handleChange(event) {
    isInputting.current = true;

    if (!isControlled) {
      handleValueChange(event.currentTarget.value);
    }

    requestAnimationFrame(() => {
      isInputting.current = false;
    });
  }

  let inputOption = contextInputValue !== undefined ? contextInputValue : option;

  if (autoComplete && (state === ComboboxState.NAVIGATING || state === ComboboxState.INTERACTING)) {
    inputOption = navigationOption || option;
  }

  const inputValue = controlledValue !== undefined ? controlledValue : getComboboxText(inputOption);
  const wrappedOnChange = useWrapEvent(handleChange, onChange);
  const inputEvents = useInputEvents(props, ComboboxContext);
  return React.createElement(InputText, _extends({}, omit(rest, 'selectOnClick'), inputEvents, {
    disabled: disabled,
    after: React.createElement(AdvancedInputControls, {
      disabled: disabled,
      clearIconLabel: clearIconLabel,
      isVisibleOptions: isVisible,
      onClear: handleClear,
      showCaret: !freeInput,
      showClear: !!(isClearable && inputValue) && !disabled && !readOnly,
      summary: summary,
      errorIcon: !noErrorIcon && validationType === 'error'
    }),
    ref: ref,
    value: inputValue,
    readOnly: inputReadOnly || readOnly,
    onChange: wrappedOnChange,
    id: `listbox-input-${id}`,
    autoComplete: "off",
    "aria-autocomplete": "both",
    validationType: validationType,
    "aria-activedescendant": navigationOption ? String(makeHash(navigationOption ? navigationOption.value : '')) : undefined
  }));
});
ComboboxInputInternal.displayName = 'ComboboxInputInternal';
export const comboboxStyles = css(_t || (_t = _`
  ${0}
`), ({
  inputReadOnly
}) => inputReadOnly ? css(_t2 || (_t2 = _`
          cursor: default;
          input {
            cursor: default;
          }
        `)) : '');
export const ComboboxInput = styled(ComboboxInputInternal).attrs(({
  width: _width = '100%'
}) => ({
  width: _width
})).withConfig({
  displayName: "ComboboxInput",
  componentId: "sc-kxdvwm-0"
})(_t3 || (_t3 = _`
  ${0}
`), comboboxStyles);
//# sourceMappingURL=ComboboxInput.js.map