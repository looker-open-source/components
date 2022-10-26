let _ = t => t,
    _t,
    _t2;

import styled, { css } from 'styled-components';
import { shouldForwardProp } from '@looker/design-tokens';
import { focusVisibleCSSWrapper } from '../../utils';

const focusVisibleStyle = () => css(_t || (_t = _`
  outline: 1px solid ${0};
`), ({
  theme
}) => theme.colors.key);

export const FocusableCell = styled.td.withConfig({
  shouldForwardProp,
  displayName: "FocusableCell",
  componentId: "sc-1310q9w-0"
}).attrs(() => ({
  tabIndex: -1
}))(_t2 || (_t2 = _`
  outline: none;
  ${0}
`), focusVisibleCSSWrapper(focusVisibleStyle));
//# sourceMappingURL=FocusableCell.js.map