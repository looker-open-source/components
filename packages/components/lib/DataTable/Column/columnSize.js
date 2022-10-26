let _ = t => t,
    _t;

import { variant } from '@looker/design-tokens';
import { css } from 'styled-components';
export const sizeInfersTruncate = size => size && typeof size !== 'number' && !['auto', 'nowrap'].includes(size);
const columnSizeVariants = variant({
  prop: 'size',
  variants: {
    small: {
      maxWidth: '3rem',
      minWidth: '3rem'
    },
    medium: {
      maxWidth: '12rem',
      minWidth: '12rem'
    },
    large: {
      maxWidth: '20rem',
      minWidth: '20rem'
    },
    nowrap: {
      whiteSpace: 'nowrap'
    }
  }
});

const percentWidth = width => `width: ${width}%;`;

export const columnSize = css(_t || (_t = _`
  ${0}
`), ({
  size
}) => size && typeof size === 'number' ? percentWidth(size) : columnSizeVariants);
//# sourceMappingURL=columnSize.js.map