let _2 = t => t,
    _t;

import { endOfMonth, getDay, getDaysInMonth, isSameDay, startOfMonth, setDate, isAfter, isBefore } from 'date-fns';
import React, { useCallback } from 'react';
import styled, { useTheme } from 'styled-components';
import { fadeIn } from '@looker/design-tokens';
import { Grid } from '../Layout';
import { Day } from './Day';
import { Cell } from './Cell';
import { MonthTitle } from './MonthTitle';

const getMonthPadding = (month, firstDayOfWeek) => {
  const startDate = startOfMonth(month);
  const endDate = endOfMonth(month);
  const startDay = getDay(startDate);
  const endDay = getDay(endDate);
  const startPadding = correctNegativePadding(startDay - firstDayOfWeek);
  const endPadding = 6 - endDay + firstDayOfWeek;
  return {
    endPadding,
    startPadding
  };
};

const correctNegativePadding = padding => padding < 0 ? padding + 7 : padding;

const getDaysArray = (month, startPadding, endPadding) => {
  const daysInMonth = getDaysInMonth(month);
  const totalDays = startPadding + daysInMonth + endPadding;
  return Array.from(Array(totalDays), (_, i) => {
    if (i < startPadding) return 'before';
    if (i > totalDays - endPadding - 1) return 'after';
    const dayOfMonth = i - startPadding + 1;
    return setDate(month, dayOfMonth);
  });
};

const getRangeType = ({
  datesSelected,
  draftTo
}) => {
  if (datesSelected.length === 2) return 'selected';
  if (draftTo) return 'draft';
  return 'none';
};

const getRangePosition = (day, month, {
  datesSelected,
  draftTo
}) => {
  const start = datesSelected[0];
  const end = datesSelected[1] || draftTo;
  if (!start || !end) return undefined;

  if (day === 'before') {
    if (start && end && isBefore(start, startOfMonth(month)) && isAfter(end, startOfMonth(month))) {
      return 'middle';
    }

    return undefined;
  }

  if (day === 'after') {
    if (start && end && isBefore(start, endOfMonth(month)) && isAfter(end, endOfMonth(month))) {
      return 'middle';
    }

    return undefined;
  }

  if (isSameDay(day, start) && isSameDay(day, end)) return undefined;
  if (isSameDay(day, start)) return 'start';
  if (isSameDay(day, end)) return 'end';
  if (isAfter(day, start) && isBefore(day, end)) return 'middle';
  return undefined;
};

export const Month = styled(({
  className,
  datesSelected,
  draftTo,
  firstDayOfWeek,
  fullRender,
  index,
  locale,
  onSelect,
  onDraftSelect,
  date,
  setItemPosition
}) => {
  const {
    startPadding,
    endPadding
  } = getMonthPadding(date, firstDayOfWeek);
  const days = getDaysArray(date, startPadding, endPadding);
  const rangeType = getRangeType({
    datesSelected,
    draftTo
  });
  const ref = useCallback(element => {
    if (element) {
      setItemPosition(index, element);
    }
  }, [setItemPosition, index]);
  const titleInline = startPadding > 2;
  const firstDayRangePosition = getRangePosition(startOfMonth(date), date, {
    datesSelected,
    draftTo
  });
  const titleRangeType = !titleInline && fullRender && firstDayRangePosition === 'middle' ? rangeType : 'none';
  const {
    space
  } = useTheme();
  const height = `calc(${space.u8} * ${days.length / 7})`;
  return React.createElement("div", {
    className: className,
    ref: ref
  }, React.createElement(MonthTitle, {
    month: date,
    rangePosition: firstDayRangePosition,
    rangeType: titleRangeType,
    inline: titleInline,
    locale: locale
  }), React.createElement(Grid, {
    columns: 7,
    gap: "none",
    height: height,
    className: fullRender ? 'full-render' : ''
  }, fullRender && days.map((day, i) => {
    const rangePosition = getRangePosition(day, date, {
      datesSelected,
      draftTo
    });
    return React.createElement(Cell, {
      key: i,
      weekStart: i % 7 === 0,
      weekEnd: i % 7 === 6,
      rangeType: rangeType,
      rangePosition: rangePosition
    }, typeof day !== 'string' && React.createElement(Day, {
      date: day,
      locale: locale,
      onSelect: onSelect,
      onDraftSelect: onDraftSelect,
      selected: datesSelected.some(date => isSameDay(date, day))
    }));
  })));
}).withConfig({
  displayName: "Month",
  componentId: "sc-1d3pod3-0"
})(_t || (_t = _2`
  width: fit-content;
  ${0} {
    /* Use auto instead of the default minmax(0, 1fr)
    so that 1st & last cells in the row can be larger */
    grid-template-columns: repeat(7, auto);
    &.full-render {
      animation-duration: ${0};
      animation-fill-mode: forwards;
      animation-name: ${0};
    }
  }
`), Grid, ({
  theme
}) => `${theme.transitions.moderate}ms`, fadeIn);
//# sourceMappingURL=Month.js.map