let _ = t => t,
    _t,
    _t2;

import { css } from 'styled-components';
export const rangeTypeStyle = ({
  rangePosition,
  rangeType
}) => {
  if (rangeType === 'none' || !rangePosition) return '';

  if (rangeType === 'selected') {
    return css(_t || (_t = _`
      background: ${0};
    `), ({
      theme
    }) => theme.colors.keyAccent);
  }

  return css(_t2 || (_t2 = _`
    background-image: linear-gradient(
        to right,
        ${0} 60%,
        transparent 40%
      ),
      linear-gradient(
        to right,
        ${0} 60%,
        transparent 40%
      );
    background-position: left top, left bottom;
    background-repeat: repeat-x, repeat-x;
    background-size: 4px 1px, 4px 1px;
  `), ({
    theme
  }) => theme.colors.ui4, ({
    theme
  }) => theme.colors.ui4);
};
//# sourceMappingURL=rangeTypeStyle.js.map