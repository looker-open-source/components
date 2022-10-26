let _2 = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { Grid } from '../Layout';
export const DaysOfWeek = styled(({
  className,
  firstDayOfWeek,
  locale
}) => {
  const allDays = Array.from(Array(7), (_, i) => {
    var _locale$localize;

    return (_locale$localize = locale.localize) === null || _locale$localize === void 0 ? void 0 : _locale$localize.day(i, {
      width: 'narrow'
    });
  });
  const daysOfWeek = [...allDays.slice(firstDayOfWeek), ...allDays.slice(0, firstDayOfWeek)];
  return React.createElement("div", {
    className: className
  }, React.createElement(Grid, {
    columns: 7,
    gap: "none"
  }, daysOfWeek.map((day, i) => React.createElement("div", {
    key: i
  }, day))));
}).withConfig({
  displayName: "DaysOfWeek",
  componentId: "sc-10k3m05-0"
})(_t || (_t = _2`
  background: ${0};
  ${0} {
    padding-left: ${0};
    width: fit-content;
    div {
      color: ${0};
      font-family: ${0};
      font-size: ${0};
      line-height: ${0};
      text-align: center;
      width: ${0};
    }
  }
`), ({
  theme
}) => theme.colors.ui1, Grid, ({
  theme
}) => theme.space.u5, ({
  theme
}) => theme.colors.text2, ({
  theme
}) => theme.fonts.body, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.space.u8, ({
  theme
}) => theme.space.u8);
//# sourceMappingURL=DaysOfWeek.js.map