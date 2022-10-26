let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { flexbox, layout, space, reset } from '@looker/design-tokens';

const TabPanels2Layout = ({
  children,
  className,
  id
}) => React.createElement("div", {
  "aria-labelledby": `tab-${id}`,
  className: className,
  id: `panel-${id}`,
  role: "tabpanel"
}, children);

export const TabPanels2 = styled(TabPanels2Layout).attrs(({
  height: _height = '100%',
  pt: _pt = 'large'
}) => ({
  height: _height,
  pt: _pt
})).withConfig({
  displayName: "TabPanels2",
  componentId: "sc-1iawi3n-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  ${0}
`), reset, flexbox, layout, space);
//# sourceMappingURL=TabPanels2.js.map