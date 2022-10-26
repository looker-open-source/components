import React from 'react';
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft/ChevronLeft';
import { ChevronRight } from '@styled-icons/material-rounded/ChevronRight/ChevronRight';
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown/ArrowDropDown';
import { getMonth, setMonth } from 'date-fns';
import { ButtonTransparent, IconButton } from '../Button';
import { Space } from '../Layout';
import { useTranslation } from '../utils';
import { formatDateString } from './utils';
export const CalendarNav = ({
  locale,
  monthYear,
  onMonthChange,
  onOpenMonthPicker
}) => {
  const {
    t
  } = useTranslation('CalendarNav');

  const handleNextMonth = () => {
    onMonthChange && onMonthChange(setMonth(monthYear, getMonth(monthYear) + 1));
  };

  const handlePreviousMonth = () => {
    onMonthChange && onMonthChange(setMonth(monthYear, getMonth(monthYear) - 1));
  };

  return React.createElement(Space, {
    py: "u3",
    px: "u4"
  }, React.createElement(ButtonTransparent, {
    color: "neutral",
    iconAfter: React.createElement(ArrowDropDown, null),
    onClick: onOpenMonthPicker,
    size: "xsmall"
  }, formatDateString(monthYear, 'MMM yyyy', locale)), React.createElement(Space, {
    justify: "end",
    gap: "xsmall"
  }, React.createElement(IconButton, {
    icon: React.createElement(ChevronLeft, null),
    label: t('previous month'),
    onClick: handlePreviousMonth
  }), React.createElement(IconButton, {
    icon: React.createElement(ChevronRight, null),
    label: t('next month'),
    onClick: handleNextMonth
  })));
};
//# sourceMappingURL=CalendarNav.js.map