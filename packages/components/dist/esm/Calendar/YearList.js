const _excluded = ["baseMonth", "setBaseMonth", "onMonthChange", "currentDate"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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