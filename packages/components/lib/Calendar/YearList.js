import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["baseMonth", "setBaseMonth", "onMonthChange", "currentDate"];
import { getYear, setYear } from 'date-fns';
import React from 'react';
import { ScrollableDateList } from './ScrollableDateList';
import { Year } from './Year';

const getItemMonth = (baseDate, offset) => {
  const currentMonthIndex = getYear(baseDate);
  return setYear(baseDate, currentMonthIndex + offset);
};

export const YearList = _ref => {
  let {
    baseMonth,
    setBaseMonth,
    onMonthChange,
    currentDate
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(ScrollableDateList, {
    currentDate: currentDate,
    baseMonth: baseMonth,
    setBaseMonth: setBaseMonth,
    onMonthChange: onMonthChange,
    buffer: 10,
    getItemDate: getItemMonth,
    itemComponent: Year,
    itemProps: props,
    thresholdRatio: 7 / 11
  });
};
//# sourceMappingURL=YearList.js.map