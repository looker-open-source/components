import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3;

const _excluded = ["values", "onChange", "onKeyDown", "onFocus", "chipIconLabel", "clearIconLabel", "inputValue", "inputReadOnly", "onInputChange", "formatTextToCopy", "disabled", "noErrorIcon", "validationType", "onClear", "isVisibleOptions", "showCaret", "isClearable", "readOnly", "summary", "removeOnBackspace", "formatChip", "height"];
import difference from 'lodash/difference';
import React, { forwardRef, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Chip } from '../../../Chip';
import { inputHeight } from '../height';
import { InputTextContent, InputText } from '../InputText';
import { AdvancedInputControls } from '../AdvancedInputControls';
import { useForkedRef, useWrapEvent } from '../../../utils';
import { visuallyHiddenStyle } from '../../../VisuallyHidden';
export const joinValues = selectedValues => selectedValues.join(',');

function isCtrlCmdPressed(event) {
  return event.ctrlKey || event.metaKey;
}

function focusInput(inputRef) {
  inputRef.current && inputRef.current.focus();
}

export const InputChipsBaseInternal = forwardRef((_ref, forwardedRef) => {
  let {
    values,
    onChange,
    onKeyDown,
    onFocus,
    chipIconLabel,
    clearIconLabel,
    inputValue,
    inputReadOnly,
    onInputChange,
    formatTextToCopy = joinValues,
    disabled,
    noErrorIcon,
    validationType,
    onClear,
    isVisibleOptions,
    showCaret = false,
    isClearable = true,
    readOnly,
    summary,
    removeOnBackspace = true,
    formatChip,
    height = 'auto'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const internalRef = useRef(null);
  const hiddenInputRef = useRef(null);
  const ref = useForkedRef(forwardedRef, internalRef);
  const [selectedValues, setSelectedValues] = useState([]);

  function selectAll() {
    setSelectedValues([...values]);
  }

  function deselectAll() {
    setSelectedValues([]);
  }

  function selectPrevious(e) {
    if (selectedValues.length === 0) {
      setSelectedValues([values[values.length - 1]]);
    } else {
      const curIndex = values.indexOf(selectedValues[0]);

      if (curIndex > 0) {
        const newSelectedValue = values[curIndex - 1];

        if (e.shiftKey) {
          setSelectedValues([newSelectedValue, ...selectedValues]);
        } else {
          setSelectedValues([newSelectedValue]);
        }
      }
    }
  }

  function selectNext(e) {
    if (selectedValues.length > 0) {
      const curIndex = values.indexOf(selectedValues[selectedValues.length - 1]);

      if (curIndex === values.length - 1) {
        focusInput(internalRef);
      } else {
        const newSelectedValue = values[curIndex + 1];

        if (e.shiftKey) {
          setSelectedValues([...selectedValues, newSelectedValue]);
        } else {
          setSelectedValues([newSelectedValue]);
        }
      }
    }
  }

  function deleteSelected() {
    if (!readOnly) {
      const newValues = difference(values, selectedValues);
      onChange(newValues);
      focusInput(internalRef);
    }
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function handleDeleteChip(value, e) {
    const newValues = values.filter(v => value !== v);
    onChange(newValues);
    focusInput(internalRef);
    e && e.stopPropagation();
  }

  function handleChipClick(value) {
    return e => {
      focusInput(hiddenInputRef);
      e.stopPropagation();

      if (selectedValues.length > 0) {
        if (isCtrlCmdPressed(e)) {
          const newSelectedValues = values.reduce((acc, currentValue) => {
            const isSelected = selectedValues.includes(currentValue);

            if (isSelected && currentValue !== value || !isSelected && currentValue === value) {
              return [...acc, currentValue];
            }

            return acc;
          }, []);
          setSelectedValues(newSelectedValues);
          return;
        } else if (e.shiftKey) {
          const newIndex = values.indexOf(value);
          const previousLow = values.indexOf(selectedValues[0]);
          const previousHigh = values.indexOf(selectedValues[selectedValues.length - 1]);

          if (newIndex > previousHigh) {
            setSelectedValues(values.slice(previousLow, newIndex + 1));
          } else if (newIndex < previousLow) {
            setSelectedValues(values.slice(newIndex, previousHigh + 1));
          }

          return;
        }
      }

      setSelectedValues([value]);
    };
  }

  function handleKeyDown(e) {
    if (inputValue === '') {
      if (e.key === 'Backspace' && removeOnBackspace && !readOnly) {
        inputValue === '' && handleDeleteChip(values[values.length - 1]);
      } else if (isCtrlCmdPressed(e) && e.key === 'a') {
        focusInput(hiddenInputRef);
        selectAll();
      } else if (e.key === 'ArrowLeft') {
        focusInput(hiddenInputRef);
        selectPrevious(e);
      }
    }
  }

  function copyToClipboard() {
    hiddenInputRef.current && hiddenInputRef.current.select();
    document.execCommand('copy');
  }

  function handleHiddenInputKeyDown(e) {
    if (isCtrlCmdPressed(e)) {
      switch (e.key) {
        case 'a':
          selectAll();
          break;

        case 'x':
          copyToClipboard();
          deleteSelected();
          break;

        case 'c':
          copyToClipboard();
          break;
      }
    } else {
      switch (e.key) {
        case 'Delete':
        case 'Backspace':
          deleteSelected();
          break;

        case 'ArrowLeft':
          selectPrevious(e);
          break;

        case 'ArrowRight':
          selectNext(e);
          break;
      }
    }
  }

  function handleHiddenInputBlur(e) {
    const nextFocusTarget = e.relatedTarget;

    if (nextFocusTarget && nextFocusTarget.parentNode !== e.currentTarget.parentNode) {
      deselectAll();
    }
  }

  function handleClear() {
    onChange([]);
    onInputChange('');
    onClear && onClear();
    focusInput(internalRef);
  }

  const chips = values.map(value => {
    function onChipDelete(e) {
      handleDeleteChip(value, e);
    }

    const isSelected = selectedValues.includes(value);
    const chipLabel = formatChip ? formatChip(value) : value;
    return React.createElement(Chip, {
      "aria-selected": isSelected,
      disabled: disabled,
      iconLabel: chipIconLabel,
      key: value,
      onClick: handleChipClick(value),
      onDelete: onChipDelete,
      onMouseDown: stopPropagation,
      readOnly: readOnly,
      role: "option",
      tabIndex: disabled ? undefined : -1
    }, chipLabel);
  });

  function handleInputChange(e) {
    onInputChange(e.currentTarget.value, e);
  }

  const wrappedOnFocus = useWrapEvent(deselectAll, onFocus);
  const wrappedOnKeyDown = useWrapEvent(handleKeyDown, onKeyDown);
  return React.createElement(InputText, _extends({
    disabled: disabled,
    after: React.createElement(AdvancedInputControls, {
      disabled: disabled,
      clearIconLabel: clearIconLabel,
      isVisibleOptions: isVisibleOptions,
      onClear: handleClear,
      showCaret: showCaret,
      showClear: isClearable && values.length > 0 && !disabled && !readOnly,
      summary: summary,
      errorIcon: !noErrorIcon && validationType === 'error'
    }),
    height: height,
    onChange: handleInputChange,
    onFocus: wrappedOnFocus,
    onKeyDown: wrappedOnKeyDown,
    readOnly: readOnly || inputReadOnly,
    ref: ref,
    validationType: validationType,
    value: inputValue
  }, props), chips, React.createElement(HiddenInput, {
    "data-testid": "hidden-input",
    "aria-hidden": "true",
    disabled: disabled,
    onBlur: handleHiddenInputBlur,
    onKeyDown: handleHiddenInputKeyDown,
    readOnly: true,
    ref: hiddenInputRef,
    tabIndex: -1,
    value: formatTextToCopy(selectedValues)
  }));
});
const HiddenInput = styled.input.withConfig({
  displayName: "InputChipsBase__HiddenInput",
  componentId: "sc-1a9apwv-0"
})(_t || (_t = _`
  ${0}
`), visuallyHiddenStyle);
InputChipsBaseInternal.displayName = 'InputChipsBaseInternal';
const inputHeightStyle = css(_t2 || (_t2 = _`
  height: calc(${0} - 6px);
`), inputHeight);
export const InputChipsBase = styled(InputChipsBaseInternal).withConfig({
  displayName: "InputChipsBase",
  componentId: "sc-1a9apwv-1"
})(_t3 || (_t3 = _`
  align-items: stretch;
  position: relative;

  ${0} {
    margin: 1px 0;
    margin-right: ${0};
  }

  .inner {
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    /* Workaround for Chip's truncate styling breaking flexbox layout */
    min-width: 0;
    overflow-y: auto;
    width: 100%;
  }

  input {
    min-width: 25%;
    width: auto;
    ${0}
  }

  ${0} {
    ${0}
  }
`), Chip, ({
  theme: {
    space
  }
}) => space.u1, inputHeightStyle, InputTextContent, inputHeightStyle);
//# sourceMappingURL=InputChipsBase.js.map