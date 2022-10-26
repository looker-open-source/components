let _ = t => t,
    _t,
    _t2;

import { color, position, reset, space, shouldForwardProp, variant } from '@looker/design-tokens';
import styled from 'styled-components';
const appearanceVariant = variant({
  prop: 'appearance',
  variants: {
    dark: {
      bg: 'ui4'
    },
    default: {
      bg: 'ui3'
    },
    light: {
      bg: 'ui2'
    },
    onDark: {
      bg: 'text2'
    }
  }
});
export const DividerBase = styled.hr.withConfig({
  shouldForwardProp,
  displayName: "Divider__DividerBase",
  componentId: "sc-1ceogl5-0"
}).attrs(({
  appearance: _appearance = 'default',
  customColor,
  size: _size = '1px'
}) => ({
  appearance: _appearance,
  'aria-orientation': 'horizontal',
  bg: customColor,
  role: 'separator',
  size: _size
}))(_t || (_t = _`
  ${0}
  ${0}

  border: none;
  margin: 0; /* reset <hr /> built-in margin */
  ${0}

  ${0}
`), reset, position, space, ({
  customColor
}) => customColor ? color : appearanceVariant);
export const Divider = styled(DividerBase).withConfig({
  displayName: "Divider",
  componentId: "sc-1ceogl5-1"
})(_t2 || (_t2 = _`
  height: ${0};
  width: 100%;
`), ({
  size
}) => size);
//# sourceMappingURL=Divider.js.map