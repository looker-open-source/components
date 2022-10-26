import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t,
    _t2,
    _t3;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef, useEffect, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import isFunction from 'lodash/isFunction';
import isEmpty from 'lodash/isEmpty';
import { isBefore, isSameDay } from 'date-fns';
import { CalendarToday } from '@styled-icons/material/CalendarToday';
import { useTranslation } from '../../../utils';
import { Calendar } from '../../../Calendar/Calendar';
import { formatDateString, parseDateFromString } from '../../../Calendar/utils';
import { VisuallyHidden } from '../../../VisuallyHidden';
import { usePopover } from '../../../Popover';
import { InlineInputTextBase } from '../InlineInputText';
import { InputTextContent } from '../InputText/InputTextContent';
import { ErrorIcon } from '../ErrorIcon';
import { IconButton } from '../../../Button/IconButton';
import { Space } from '../../../Layout/Space';
import { useToggle, useID } from '../../../utils/';
import { inputCSS, inputTextDisabled, inputTextFocus, inputTextHover, inputTextValidation } from '../InputText';
import { inputHeight } from '../height';

const getTextForDate = (range, dateStringFormat, locale) => endpoint => {
  const date = endpoint ? range === null || range === void 0 ? void 0 : range[endpoint] : undefined;
  return formatDateString(date, dateStringFormat, locale);
};

const getViewMonthFromValue = value => value.from || value.to || new Date();

export const InputDateRange = styled(forwardRef((props, ref) => {
  const {
    'aria-labelledby': ariaLabelledby,
    dateStringFormat,
    disabled,
    locale,
    id,
    onChange,
    onValidationFail,
    readOnly,
    value,
    validationType
  } = props;
  const {
    t
  } = useTranslation('InputDateRange');
  const [viewMonth, setViewMonth] = useState(getViewMonthFromValue(value));
  const startDateLabelledby = `startDate-labelledby-${id}`;
  const endDateLabelledby = `endDate-labelledby-${id}`;
  const dateTexts = useMemo(() => {
    const getText = getTextForDate(value, dateStringFormat, locale);
    return {
      from: getText('from'),
      to: getText('to')
    };
  }, [value, dateStringFormat, locale]);
  const [fromTextInputValue, setFromTextInputValue] = useState(dateTexts.from);
  useEffect(() => {
    setFromTextInputValue(dateTexts.from);
  }, [dateTexts.from]);
  const fromID = useID(id && `from-${id}`);
  const [toTextInputValue, setToTextInputValue] = useState(dateTexts.to);
  useEffect(() => {
    setToTextInputValue(dateTexts.to);
  }, [dateTexts.to]);
  const toID = useID(id && `to-${id}`);
  const getEndpoint = useCallback(({
    id
  }) => {
    return id === fromID ? 'from' : 'to';
  }, [fromID]);
  const updateRangeFromInput = useCallback(currentTarget => {
    const inputValue = currentTarget.value;
    const endpoint = getEndpoint(currentTarget);
    let validationMessage = inputValue;
    const valueEndpoint = value[endpoint];

    if (inputValue === '') {
      validationMessage = '';

      if (valueEndpoint) {
        const newRange = _objectSpread({}, value);

        delete newRange[endpoint];
        onChange(newRange);
      }
    } else {
      const parsedValue = parseDateFromString(inputValue, locale, dateStringFormat);

      if (parsedValue) {
        const newRange = _objectSpread(_objectSpread({}, value), {}, {
          [endpoint]: parsedValue
        });

        validationMessage = newRange.from && newRange.to && !isBefore(newRange.from, newRange.to) ? 'Invalid range' : '';

        if (!valueEndpoint || !isSameDay(valueEndpoint, parsedValue)) {
          setViewMonth(parsedValue);
          onChange(newRange);
        }
      }
    }

    if (validationMessage && isFunction(onValidationFail)) {
      onValidationFail(validationMessage);
    }
  }, [dateStringFormat, getEndpoint, locale, onChange, onValidationFail, value]);
  const handleBlur = useCallback(e => {
    updateRangeFromInput(e.currentTarget);
  }, [updateRangeFromInput]);
  const handleKeyDown = useCallback(e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateRangeFromInput(e.currentTarget);
    }
  }, [updateRangeFromInput]);

  const handleInputChange = e => {
    const {
      currentTarget
    } = e;
    const {
      value
    } = currentTarget;
    const endpoint = getEndpoint(currentTarget);

    if (endpoint === 'from') {
      setFromTextInputValue(value);
    } else {
      setToTextInputValue(value);
    }
  };

  const {
    value: isOpen,
    change: setOpen,
    toggle
  } = useToggle();
  const handleIconClick = useCallback(() => {
    setViewMonth(getViewMonthFromValue(value));
    toggle();
  }, [toggle, value]);
  const {
    popover,
    ref: popoverRef
  } = usePopover({
    content: React.createElement("div", null, React.createElement(VisuallyHidden, {
      "aria-live": "assertive"
    }, viewMonth ? formatDateString(viewMonth, 'MMMM-yyyy', locale) : ''), React.createElement(Calendar, {
      disabled: disabled,
      locale: locale,
      isRange: true,
      onSelectRange: onChange,
      selectedRange: value,
      viewMonth: viewMonth,
      onMonthChange: setViewMonth
    })),
    focusTrap: false,
    isOpen,
    placement: 'bottom-start',
    ref,
    setOpen,
    triggerToggle: false
  });
  const commonInputProps = {
    disabled,
    fontSize: 'small',
    onBlur: handleBlur,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    readOnly
  };
  return React.createElement(InputTextGroupWrapper, {
    ref: popoverRef,
    disabled: disabled,
    validationType: validationType
  }, React.createElement(InlineInputTextBase, _extends({
    placeholder: t('Start date'),
    "data-testid": "date-from-text-input",
    id: fromID,
    value: fromTextInputValue,
    "aria-labelledby": `${ariaLabelledby} ${startDateLabelledby}`
  }, commonInputProps)), React.createElement(HyphenWrapper, {
    hasInputValues: !isEmpty(value),
    "aria-hidden": "true"
  }, "\u2013"), React.createElement(VisuallyHidden, {
    id: endDateLabelledby
  }, 'End date'), React.createElement(InlineInputTextBase, _extends({
    placeholder: t('End date'),
    "data-testid": "date-to-text-input",
    id: toID,
    value: toTextInputValue,
    "aria-labelledby": `${ariaLabelledby} ${endDateLabelledby}`
  }, commonInputProps)), React.createElement(Space, {
    gap: "xxsmall",
    justify: "end",
    pr: "u2"
  }, React.createElement(IconButton, {
    size: "xsmall",
    label: 'Open calendar',
    icon: React.createElement(CalendarToday, null),
    onClick: handleIconClick,
    disabled: readOnly || disabled
  }), validationType === 'error' && React.createElement(InputTextContent, {
    pl: "u1"
  }, React.createElement(ErrorIcon, null))), popover);
})).withConfig({
  displayName: "InputDateRange",
  componentId: "sc-1mk7l5x-0"
})(_t || (_t = _``));
const HyphenWrapper = styled.span.withConfig({
  displayName: "InputDateRange__HyphenWrapper",
  componentId: "sc-1mk7l5x-1"
})(_t2 || (_t2 = _`
  align-items: center;
  color: ${0};
  display: flex;
  .label-down & {
    display: none;
  }
`), ({
  theme,
  hasInputValues
}) => hasInputValues ? theme.colors.text3 : theme.colors.text1);
const InputTextGroupWrapper = styled.div.withConfig({
  displayName: "InputDateRange__InputTextGroupWrapper",
  componentId: "sc-1mk7l5x-2"
})(_t3 || (_t3 = _`
  ${0}
  align-items: stretch;
  display: flex;
  font-family: ${0};
  height: ${0};
  justify-content: space-evenly;
  padding: ${0};
  width: 100%;
  &:hover {
    ${0}
  }

  &:focus-within {
    ${0}
  }

  ${0}

  ${0}

  input {
    font-family: inherit;
  }
  ${0} {
    flex-shrink: 0;
    margin: ${0} 0;
    &:focus-within {
      background: ${0};
    }
    input,
    span {
      padding: 0 ${0};
    }
  }
`), inputCSS, ({
  theme
}) => theme.fonts.body, inputHeight, ({
  theme: {
    space
  }
}) => `${space.u05} ${space.u1}`, inputTextHover, inputTextFocus, inputTextValidation, ({
  disabled
}) => disabled && inputTextDisabled, InlineInputTextBase, ({
  theme
}) => theme.space.u05, ({
  theme
}) => theme.colors.keyAccent, ({
  theme
}) => theme.space.u2);
//# sourceMappingURL=InputDateRange.js.map