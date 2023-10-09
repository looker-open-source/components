let _ = t => t,
  _t,
  _t2,
  _t3;
const _excluded = ["autoComplete", "disabled", "freeInput", "clearIconLabel", "inputReadOnly", "isClearable", "onChange", "noErrorIcon", "readOnly", "summary", "validationType", "value"],
  _excluded2 = ["selectOnClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef, useRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { useForkedRef, useSafeLayoutEffect, useWrapEvent } from '../../../../utils';
import { InputText } from '../../InputText';
import { AdvancedInputControls } from '../../AdvancedInputControls';
import { ComboboxContext } from '../ComboboxContext';
import { getComboboxText } from '../utils/getComboboxText';
import { makeHash } from '../utils/makeHash';
import { ComboboxActionType, ComboboxState } from '../utils/state';
import { useInputEvents } from '../utils/useInputEvents';
import { useInputPropRefs } from '../utils/useInputPropRefs';
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
      handleValueChange(event.target.value);
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
  const {
      selectOnClick: _selectOnClick
    } = rest,
    restForInputText = _objectWithoutProperties(rest, _excluded2);
  return React.createElement(InputText, _extends({}, restForInputText, inputEvents, {
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
  componentId: "sc-1c0xkr8-0"
})(_t3 || (_t3 = _`
  ${0}
  flex-shrink: 0;
`), comboboxStyles);
//# sourceMappingURL=ComboboxInput.js.map