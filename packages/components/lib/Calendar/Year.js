import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["fullRender", "index", "setItemPosition", "date", "locale"];
import { getYear } from 'date-fns';
import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Grid, SpaceVertical } from '../Layout';
import { Span } from '../Text';
import { MonthPicker } from './MonthPicker';
import { confirmToday } from './utils/dateConfirmations';
export const Year = _ref => {
  let {
    fullRender,
    index,
    setItemPosition,
    date,
    locale
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const ref = useCallback(element => {
    if (element) {
      setItemPosition(index, element);
    }
  }, [setItemPosition, index]);
  const {
    space
  } = useTheme();
  const height = `calc(${space.u7} * 3 + ${space.u3} * 2)`;
  return React.createElement(SpaceVertical, {
    py: "u3",
    px: "u4",
    gap: "u5",
    ref: ref
  }, React.createElement(Span, {
    fontSize: "small",
    color: "text5",
    fontWeight: "bold"
  }, getYear(date)), React.createElement(Grid, {
    columns: 4,
    gap: "u3",
    height: height
  }, fullRender && [...Array(12)].map((_, i) => {
    return React.createElement(MonthPicker, _extends({
      isTodaysMonth: confirmToday(i),
      key: i,
      monthNumber: i,
      date: date,
      locale: locale
    }, props));
  })));
};
//# sourceMappingURL=Year.js.map