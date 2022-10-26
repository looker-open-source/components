let _ = t => t,
    _t,
    _t2;

import { color, reset, space, typography, variant } from '@looker/design-tokens';
import { css } from 'styled-components';
const size = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      fontSize: 'xsmall',
      height: '24px',
      width: '24px'
    },
    xsmall: {
      fontSize: 'xsmall',
      height: '32px',
      width: '32px'
    },
    small: {
      fontSize: 'small',
      height: '40px',
      width: '40px'
    },
    medium: {
      fontSize: 'medium',
      height: '54px',
      width: '54px'
    },
    large: {
      fontSize: 'large',
      height: '60px',
      width: '60px'
    }
  }
});
export const avatarButtonOverrides = css(_t || (_t = _`
  /* Need this in case Avatar is rendered as a <button /> */
  background: transparent;
  border: none;
  padding: 0;
`));
export const avatarCSS = css(_t2 || (_t2 = _`
  ${0}

  ${0}

  ${0}
  ${0}
  ${0}
  ${0}

  align-items: center;
  border-radius: 100%;
  display: grid;
  flex-shrink: 0;
  justify-items: center;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`), reset, avatarButtonOverrides, color, space, typography, size);
//# sourceMappingURL=Avatar.js.map