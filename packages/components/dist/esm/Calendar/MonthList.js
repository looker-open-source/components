const _excluded = ["currentDate", "baseMonth", "setBaseMonth", "onMonthChange"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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