import { addYears, getYear, setMonth, setYear } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft/ChevronLeft';
import { ChevronRight } from '@styled-icons/material-rounded/ChevronRight/ChevronRight';
import { Close } from '@styled-icons/material/Close';
import { Divider } from '../Divider';
import { IconButton } from '../Button';
import { InlineInputText } from '../Form';
import { Space } from '../Layout';
import { useTranslation } from '../utils';
import { formatDateString } from './utils';
import { YearList } from './YearList';
export const MonthPickerNav = ({
  date,
  locale,
  onClose,
  onMonthChange
}) => {
  const {
    t
  } = useTranslation('MonthPickerNav');
  const [trackYear, setTrackYear] = useState(date);
  const [inputText, setInputText] = useState(formatDateString(trackYear, 'yyyy', locale));
  const [baseMonth, setBaseMonth] = useState(date);
  const handleInputChange = useCallback(event => setInputText(event.target.value), [setInputText]);
  useEffect(() => {
    setInputText(getYear(trackYear).toString());
  }, [trackYear]);
  const handleInputBlur = useCallback(event => {
    if (event.target.value.length === 4) {
      const newYear = setYear(trackYear, Number(event.target.value));
      setTrackYear(newYear);
      setBaseMonth(newYear);
    }
  }, [trackYear]);
  const handleNextYear = useCallback(() => {
    const newYear = addYears(trackYear, 1);
    setTrackYear(newYear);
    setBaseMonth(newYear);
  }, [setTrackYear, trackYear]);
  const handlePreviousYear = useCallback(() => {
    const newYear = addYears(trackYear, -1);
    setTrackYear(newYear);
    setBaseMonth(newYear);
  }, [setTrackYear, trackYear]);
  const handleMonthClick = useCallback(month => {
    onMonthChange(setMonth(trackYear, month));
    onClose();
  }, [trackYear, onMonthChange, onClose]);
  return React.createElement(React.Fragment, null, React.createElement(Space, {
    between: true,
    py: "u3",
    pl: "u05",
    pr: "u5"
  }, React.createElement(Space, {
    justify: "start",
    gap: "u2"
  }, React.createElement(IconButton, {
    icon: React.createElement(ChevronLeft, null),
    label: t('previous year'),
    onClick: handlePreviousYear,
    size: "xsmall"
  }), React.createElement(InlineInputText, {
    onBlur: handleInputBlur,
    onChange: handleInputChange,
    value: inputText
  }), React.createElement(IconButton, {
    icon: React.createElement(ChevronRight, null),
    label: t('next year'),
    onClick: handleNextYear,
    size: "xsmall"
  })), React.createElement(Space, {
    justify: "end"
  }, React.createElement(IconButton, {
    icon: React.createElement(Close, null),
    label: t('close'),
    onClick: onClose,
    size: "xsmall"
  }))), React.createElement(Divider, {
    appearance: "light"
  }), React.createElement(YearList, {
    baseMonth: baseMonth,
    currentDate: trackYear,
    locale: locale,
    onMonthChange: setTrackYear,
    onMonthClick: handleMonthClick,
    selectedMonth: date,
    setBaseMonth: setBaseMonth
  }));
};
//# sourceMappingURL=MonthPickerNav.js.map