let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;

import { css } from 'styled-components';
import { borderRadius } from '../system';

const borderPropertyHelper = (color, property) => css(_t || (_t = _`
  ${0}: 1px solid
    ${0};
`), property, ({
  theme
}) => theme.colors[color] || color);

const borderPositionHelper = (border, position) => {
  const color = border === true ? 'ui2' : border;
  if (color === 'none' || !color) return null;
  let properties = [];

  switch (position) {
    case 'x':
      properties = ['border-left', 'border-right'];
      break;

    case 'y':
      properties = ['border-bottom', 'border-top'];
      break;

    case undefined:
      return css(_t2 || (_t2 = _`
        ${0}
      `), borderPropertyHelper(color, 'border'));

    default:
      properties = [`border-${position}`];
  }

  return css(_t3 || (_t3 = _`
    ${0}
  `), properties.map(property => borderPropertyHelper(color, property)));
};

export const borderHelper = ({
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderX,
  borderY
}) => css(_t4 || (_t4 = _`
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`), border && borderPositionHelper(border), borderBottom && borderPositionHelper(borderBottom, 'bottom'), borderLeft && borderPositionHelper(borderLeft, 'left'), borderRight && borderPositionHelper(borderRight, 'right'), borderTop && borderPositionHelper(borderTop, 'top'), borderX && borderPositionHelper(borderX, 'x'), borderY && borderPositionHelper(borderY, 'y'), borderRadius);
//# sourceMappingURL=semanticBorderHelper.js.map