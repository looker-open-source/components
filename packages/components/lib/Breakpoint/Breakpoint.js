import React, { useState } from 'react';
import { convertRemToPx, BreakpointRamp } from '@looker/design-tokens';
import isArray from 'lodash/isArray';
import { useTheme } from 'styled-components';
import { useResize } from '../utils';
export const Breakpoint = ({
  children,
  show
}) => {
  const [from = 'mobile', to = 'xl'] = isArray(show) ? show : [show, show];
  const [screenWidth, setScreenWidth] = useState(typeof document === 'undefined' ? 800 : document.body.clientWidth);
  const theme = useTheme();
  const breakpointPx = theme.breakpoints.map(b => convertRemToPx(parseInt(b.replace('rem', ''))));
  const fromIndex = theme.breakpoints.indexOf(BreakpointRamp[from]);
  const toIndex = theme.breakpoints.indexOf(BreakpointRamp[to]);

  const handleResize = () => {
    if (document) {
      setScreenWidth(document.body.clientWidth);
    }
  };

  useResize(typeof document === 'undefined' ? null : document.body, handleResize);
  const screenMin = from === 'mobile' ? 0 : breakpointPx[fromIndex - 1];
  const screenMax = to === 'xl' ? Infinity : breakpointPx[toIndex];
  return React.createElement(React.Fragment, null, screenWidth > screenMin && screenWidth <= screenMax ? children : null);
};
//# sourceMappingURL=Breakpoint.js.map