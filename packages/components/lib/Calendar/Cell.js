let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7;

import React from 'react';
import styled, { css } from 'styled-components';
import { rangeTypeStyle } from './utils';

const rangePositionWidth = ({
  rangePosition,
  weekStart,
  weekEnd
}) => {
  if (!rangePosition || rangePosition === 'middle') {
    return css(_t || (_t = _`
      width: 100%;
    `));
  }

  if (rangePosition === 'end' && weekStart || rangePosition === 'start' && weekEnd) {
    return css(_t2 || (_t2 = _`
      width: calc(100% - ${0});
    `), ({
      theme: {
        space
      }
    }) => space.u4);
  }

  return css(_t3 || (_t3 = _`
    width: ${0};
  `), ({
    theme
  }) => theme.space.u4);
};

const rangePositionLeft = ({
  rangePosition,
  weekStart
}) => {
  if (rangePosition === 'start') {
    if (weekStart) {
      return css(_t4 || (_t4 = _`
        left: auto;
        right: 0;
      `));
    } else {
      return css(_t5 || (_t5 = _`
        left: ${0};
      `), ({
        theme
      }) => theme.space.u4);
    }
  }

  return css(_t6 || (_t6 = _`
    left: 0;
  `));
};

export const Cell = styled(({
  children,
  className
}) => {
  return React.createElement("div", {
    className: className
  }, children);
}).withConfig({
  displayName: "Cell",
  componentId: "sc-y9lybp-0"
})(_t7 || (_t7 = _`
  margin: ${0} 0;
  padding-left: ${0};
  padding-right: ${0};
  position: relative;
  &::before {
    content: ' ';
    height: 100%;
    position: absolute;
    ${0}
    ${0}
     ${0}
  }
`), ({
  theme
}) => theme.space.u05, ({
  theme,
  weekStart
}) => weekStart ? theme.space.u5 : '0', ({
  theme,
  weekEnd
}) => weekEnd ? theme.space.u5 : '0', rangePositionWidth, rangePositionLeft, rangeTypeStyle);
//# sourceMappingURL=Cell.js.map