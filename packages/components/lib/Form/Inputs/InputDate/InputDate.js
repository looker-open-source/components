let _ = t => t,
    _t;

import React, { useCallback, useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import isFunction from 'lodash/isFunction';
import isEqual from 'lodash/isEqual';
import { format } from 'date-fns';
import { CalendarToday } from '@styled-icons/material/CalendarToday';
import { InputText } from '../InputText';
import { useReadOnlyWarn, useToggle, useTranslation } from '../../../utils';
import { formatDateString, parseDateFromString } from '../../../Calendar/utils';
import { Calendar } from '../../../Calendar';
import { usePopover } from '../../../Popover';
import { VisuallyHidden } from '../../../VisuallyHidden';
import { IconButton } from '../../../Button/IconButton';

const isDateInView = (value, viewMonth) => !!(value.getFullYear() === viewMonth.getFullYear() && value.getMonth() === viewMonth.getMonth());

export const InputDate = styled(forwardRef((props, ref) => {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledby,
    dateStringFormat,
    defaultValue,
    disabled,
    id,
    locale,
    onChange,
    onValidationFail,
    readOnly,
    validationType,
    value
  } = props;
  const {
    t
  } = useTranslation('InputDate');
  useReadOnlyWarn('InputDate', value, onChange);
  const [selectedDate, setSelectedDate] = useState(value || defaultValue);
  const [textInputValue, setTextInputValue] = useState(selectedDate ? formatDateString(selectedDate, dateStringFormat, locale) : '');
  const [viewMonth, setViewMonth] = useState(value || defaultValue || new Date(Date.now()));
  const handleDateChange = useCallback(date => {
    setSelectedDate(date);
    setViewMonth(date || new Date());

    if (isFunction(onChange)) {
      onChange(date);
    }
  }, [onChange]);
  const handleTextInputChange = useCallback(e => {
    if (e.target === e.currentTarget) {
      const value = e.currentTarget.value;
      setTextInputValue(value);
    }
  }, []);
  const updateDateFromInput = useCallback(currentTarget => {
    const {
      value
    } = currentTarget;
    const isValid = value.length === 0 || !!parseDateFromString(value, locale, dateStringFormat);

    if (!isValid && isFunction(onValidationFail)) {
      onValidationFail(value);
    }

    if (value.length === 0) {
      handleDateChange();
    } else {
      const parsedValue = parseDateFromString(value, locale, dateStringFormat);

      if (parsedValue) {
        handleDateChange(parsedValue);
      }
    }
  }, [dateStringFormat, handleDateChange, locale, onValidationFail]);
  const handleBlur = useCallback(e => {
    updateDateFromInput(e.currentTarget);
  }, [updateDateFromInput]);
  const handleKeyDown = useCallback(e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateDateFromInput(e.currentTarget);
    }
  }, [updateDateFromInput]);
  const handleCalendarClose = useCallback(date => {
    setTextInputValue(formatDateString(date, dateStringFormat, locale));
    handleDateChange(date);
  }, [dateStringFormat, handleDateChange, locale]);
  useEffect(() => {
    if (value && !isEqual(value, selectedDate)) {
      setSelectedDate(value);
      value && setTextInputValue(formatDateString(value, dateStringFormat, locale));
      value && viewMonth && !isDateInView(value, viewMonth) && setViewMonth(value);
    }
  }, [textInputValue, value, onChange]);
  const {
    value: isOpen,
    change: setOpen,
    toggle
  } = useToggle();
  const {
    popover,
    ref: popoverRef
  } = usePopover({
    content: React.createElement("div", null, React.createElement(VisuallyHidden, {
      "aria-live": "assertive",
      "data-testid": "hidden-value"
    }, viewMonth ? format(viewMonth, 'MMMM-yyyy') : ''), React.createElement(Calendar, {
      selectedDate: selectedDate,
      onSelectDate: handleCalendarClose,
      viewMonth: viewMonth,
      onMonthChange: setViewMonth
    })),
    focusTrap: false,
    isOpen,
    placement: 'bottom-start',
    setOpen,
    triggerToggle: false
  });
  return React.createElement("div", {
    ref: popoverRef
  }, React.createElement(InputText, {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby,
    after: React.createElement(IconButton, {
      size: "xsmall",
      label: t('Open calendar'),
      icon: React.createElement(CalendarToday, null),
      onClick: toggle
    }),
    value: textInputValue,
    onChange: handleTextInputChange,
    validationType: validationType,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    "data-testid": "text-input",
    id: id,
    ref: ref,
    disabled: disabled,
    readOnly: readOnly
  }), popover);
})).withConfig({
  displayName: "InputDate",
  componentId: "sc-9tulkd-0"
})(_t || (_t = _`
  width: 100%;
`));
//# sourceMappingURL=InputDate.js.map