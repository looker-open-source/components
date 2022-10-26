let _ = t => t,
    _t,
    _t2,
    _t3;

import { css } from 'styled-components';
export const multiInputWidth = 280;
const flatBorderRight = css(_t || (_t = _`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  &:not(:focus-within) {
    border-right-color: transparent;
  }
`));
const flatBorderLeft = css(_t2 || (_t2 = _`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`));
export const inputPlacementStyle = ({
  placement
}) => {
  switch (placement) {
    case 'left':
      return `
      ${flatBorderRight}
    `;

    case 'right':
      return `
      ${flatBorderLeft}
    `;

    case 'middle':
      return `
      ${flatBorderLeft}
      ${flatBorderRight}
    `;

    default:
      return '';
  }
};
export const tokenStylePlaceholder = props => props.tokenStyle ? css(_t3 || (_t3 = _`
        input::placeholder {
          color: ${0};
        }
      `), ({
  theme
}) => theme.colors.text3) : '';
//# sourceMappingURL=filter_styles.js.map