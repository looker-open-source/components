import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["currentDate", "baseMonth", "setBaseMonth", "onMonthChange"];
import { getMonth, setMonth } from 'date-fns';
import React from 'react';
import { ScrollableDateList } from './ScrollableDateList';
import { Month } from './Month';

const getItemMonth = (baseDate, offset) => {
  const currentMonthIndex = getMonth(baseDate);
  return setMonth(baseDate, currentMonthIndex + offset);
};

export const MonthList = _ref => {
  let {
    currentDate,
    baseMonth,
    setBaseMonth,
    onMonthChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(ScrollableDateList, {
    currentDate: currentDate,
    baseMonth: baseMonth,
    setBaseMonth: setBaseMonth,
    onMonthChange: onMonthChange,
    buffer: 12,
    getItemDate: getItemMonth,
    itemComponent: Month,
    itemProps: props,
    thresholdRatio: 5 / 7
  });
};
//# sourceMappingURL=MonthList.js.map