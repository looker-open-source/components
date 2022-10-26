import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { space } from '@looker/design-tokens';
import { Divider } from '../Divider';

const ListDividerLayout = props => React.createElement("li", _extends({}, props, {
  "aria-hidden": "true"
}), React.createElement(Divider, {
  appearance: "light"
}));

export const ListDivider = styled(ListDividerLayout).withConfig({
  displayName: "ListDivider",
  componentId: "sc-y85nke-0"
})(_t || (_t = _`
  ${0}

  margin: ${0} 0;

  /* CSS for hiding second divider when 2 ListDividers are adjacent */
  & + & {
    display: none;
  }
`), space, ({
  theme
}) => theme.space.u2);
//# sourceMappingURL=ListDivider.js.map