let _ = t => t,
    _t,
    _t2;

import styled, { css } from 'styled-components';
export const styleDefenderCSS = css(_t || (_t = _`
  box-sizing: border-box;
  font-family: ${0};
  line-height: normal;
  width: 100%;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    box-sizing: border-box;
  }
`), ({
  theme
}) => theme.fonts.body);
export const StyleDefender = styled.div.attrs(({
  className: _className = 'looker-components-reset'
}) => ({
  className: _className
})).withConfig({
  displayName: "StyleDefender",
  componentId: "sc-1kd51tv-0"
})(_t2 || (_t2 = _`
  background: ${0};

  ${0}
`), ({
  theme
}) => theme.colors.background, styleDefenderCSS);
//# sourceMappingURL=StyleDefender.js.map