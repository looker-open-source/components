let _ = t => t,
    _t;

import { reset, space, shouldForwardProp, textColor, typography, position, layout, variant } from '@looker/design-tokens';
import styled from 'styled-components';
const typeVariant = variant({
  prop: 'type',
  variants: {
    letter: {
      listStyleType: 'upper-alpha',
      pl: 'u4'
    },
    none: {
      listStyleType: 'none'
    },
    number: {
      listStyleType: 'decimal',
      pl: 'u4'
    }
  }
});
export const OrderedList = styled.div.withConfig({
  shouldForwardProp,
  displayName: "OrderedList",
  componentId: "sc-csldlu-0"
}).attrs(({
  color: _color = 'body',
  type: _type = 'none'
}) => ({
  as: 'ol',
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
//# sourceMappingURL=OrderedList.js.map