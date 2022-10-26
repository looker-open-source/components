let _ = t => t,
    _t,
    _t2,
    _t3;

import { css } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
export const iconMargins = props => {
  const spacing = {
    inner: '0',
    outer: '0'
  };

  switch (props.size) {
    case 'xxsmall':
    case 'xsmall':
    case 'small':
      spacing.outer = '0.25rem';
      spacing.inner = '0.25rem';
      break;

    case 'large':
    default:
      spacing.outer = '0.25rem';
      spacing.inner = '0.5rem';
  }

  if (props.iconBefore) {
    return css(_t || (_t = _`
      margin-left: -${0};
      margin-right: ${0};
    `), spacing.outer, spacing.inner);
  } else if (props.iconAfter) {
    return css(_t2 || (_t2 = _`
      margin-left: ${0};
      margin-right: -${0};
    `), spacing.inner, spacing.outer);
  } else {
    return false;
  }
};
export const buttonIcon = props => css(_t3 || (_t3 = _`
  ${0} {
    ${0}
    flex-shrink: 0;
  }
`), StyledIconBase, iconMargins(props));
//# sourceMappingURL=icon.js.map