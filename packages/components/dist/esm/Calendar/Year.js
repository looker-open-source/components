const _excluded = ["fullRender", "index", "setItemPosition", "date", "locale"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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