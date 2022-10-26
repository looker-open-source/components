let _ = t => t,
    _t;

import { layout, position, reset, space, shouldForwardProp, textColor, typography, variant } from '@looker/design-tokens';
import styled from 'styled-components';
const typeVariant = variant({
  prop: 'type',
  variants: {
    bullet: {
      listStyleType: 'disc',
      pl: 'u4'
    },
    none: {
      listStyleType: 'none'
    }
  }
});
export const UnorderedList = styled.ul.withConfig({
  shouldForwardProp,
  displayName: "UnorderedList",
  componentId: "sc-qnps5j-0"
}).attrs(({
  color: _color = 'body',
  type: _type = 'none'
}) => ({
  color: _color,
  type: _type
}))(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}

  ${0}
  ${0}

  li {
    margin-bottom: ${0};
  }
`), reset, textColor, typography, typeVariant, space, position, layout, ({
  theme
}) => theme.space.u1);
//# sourceMappingURL=UnorderedList.js.map