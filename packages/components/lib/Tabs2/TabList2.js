import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t,
    _t2,
    _t3;

import React, { forwardRef } from 'react';
import { fontSize, padding, reset } from '@looker/design-tokens';
import styled, { css } from 'styled-components';
import { useArrowKeyNav, useTranslation } from '../utils';
import { TabIndicator } from './TabIndicator';
export const tabListCSS = css(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  border-bottom: 1px solid ${0};
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  ${0}
`), reset, padding, fontSize, ({
  theme
}) => theme.colors.ui2, ({
  distribute
}) => distribute && css(_t2 || (_t2 = _`
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
      ${0} {
        border-radius: 0;
        height: 2px;
        left: 0;
        right: 0;
      }
    `), TabIndicator));
export const TabList2 = styled(forwardRef(({
  children,
  className
}, ref) => {
  const {
    t
  } = useTranslation('TabList');
  const navProps = useArrowKeyNav({
    axis: 'horizontal',
    ref
  });
  return React.createElement("div", _extends({
    "aria-label": t('Tabs'),
    className: className,
    role: "tablist"
  }, navProps), children);
})).attrs(({
  fontSize: _fontSize = 'small'
}) => ({
  fontSize: _fontSize
})).withConfig({
  displayName: "TabList2",
  componentId: "sc-2bxa01-0"
})(_t3 || (_t3 = _`
  ${0}
`), tabListCSS);
//# sourceMappingURL=TabList2.js.map