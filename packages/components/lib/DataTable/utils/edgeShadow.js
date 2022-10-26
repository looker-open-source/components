let _ = t => t,
    _t;

import { css } from 'styled-components';
export const edgeShadow = (placement = 'left', depth = 4) => {
  let pseudo = ':after';
  let relativeTo = 'right';
  let shadowReverse = '';

  if (placement === 'right') {
    pseudo = ':before';
    relativeTo = 'left';
    shadowReverse = '-';
  }

  const shadow = `${`${shadowReverse}${depth}px`} 0 ${depth}px -${depth}px rgba( 0, 0, 0, 0.25) inset`;
  const position = depth + 7;
  return css(_t || (_t = _`
    &${0} {
      box-shadow: ${0};
      content: ' ';
      height: 100%;
      position: absolute;
      ${0}
      top: 0;
      width: ${0}px;
    }
  `), pseudo, shadow, `${relativeTo}: -${position}px;`, position);
};
//# sourceMappingURL=edgeShadow.js.map