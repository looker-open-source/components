let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { Span } from '../Text';
import { formatDateString, rangeTypeStyle } from './utils';
export const MonthTitle = styled(({
  className,
  locale,
  month
}) => {
  return React.createElement(Span, {
    className: className,
    fontSize: "xsmall",
    color: "text2",
    fontWeight: "bold",
    px: "u8",
    py: "u2"
  }, formatDateString(month, 'MMM yyyy', locale));
}).withConfig({
  displayName: "MonthTitle",
  componentId: "sc-1cr2h3a-0"
})(_t || (_t = _`
  ${0}
  display: block;
  /* Title is inline with first week if month starts > 3 days after firstDayOfWeek */
  /* stylelint-disable */
  margin: ${0};
  /* stylelint-enable */
  position: relative;
  width: fit-content;
  z-index: ${0};
`), rangeTypeStyle, ({
  inline,
  theme: {
    space
  }
}) => inline ? `0 0 -${space.u8} 0` : `${space.u05} 0`, ({
  theme
}) => theme.zIndexFloor);
//# sourceMappingURL=MonthTitle.js.map