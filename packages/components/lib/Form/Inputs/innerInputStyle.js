let _ = t => t,
    _t;

import { css } from 'styled-components';
export const innerInputStyle = css(_t || (_t = _`
  background: transparent;
  border: none;
  caret-color: ${0};
  color: inherit;
  font-family: inherit;
  height: 100%;
  outline: none;
  width: 100%;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    appearance: none;
  }

  ::placeholder {
    color: ${0};
  }
`), ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.text2);
//# sourceMappingURL=innerInputStyle.js.map