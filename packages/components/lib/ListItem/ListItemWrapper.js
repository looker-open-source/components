let _ = t => t,
    _t;

import styled from 'styled-components';
export const ListItemWrapper = styled.li.attrs(({
  role: _role = 'none',
  color: _color = 'text5'
}) => ({
  color: _color,
  role: _role
})).withConfig({
  displayName: "ListItemWrapper",
  componentId: "sc-o8p2ju-0"
})(_t || (_t = _`
  align-items: center;
  display: flex;
  font-size: ${0};
  font-weight: ${0};
  list-style-type: none;
  outline: none;
  text-decoration: none;

  &[disabled] {
    & > * {
      cursor: not-allowed;
    }

    &:hover {
      color: ${0};
    }
  }
`), ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.fontWeights.normal, ({
  theme: {
    colors
  }
}) => colors.text1);
//# sourceMappingURL=ListItemWrapper.js.map