import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["color", "icon", "role"];
import React from 'react';
import { omitStyledProps, variant } from '@looker/design-tokens';
import { PersonOutline } from '@styled-icons/material/PersonOutline';
import { StyledIconBase } from '@styled-icons/styled-icon';
import styled from 'styled-components';
import { avatarCSS } from './Avatar';
const size = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      height: '16px',
      width: '16px'
    },
    xsmall: {
      height: '20px',
      width: '20px'
    },
    small: {
      height: '20px',
      width: '20px'
    },
    medium: {
      height: '30px',
      width: '30px'
    },
    large: {
      height: '36px',
      width: '36px'
    }
  }
});

const AvatarLayout = _ref => {
  let {
    color,
    icon = React.createElement(PersonOutline, null),
    role
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const BaseElement = role === 'button' ? 'button' : 'div';
  return React.createElement(BaseElement, omitStyledProps(props), icon);
};

export const AvatarIcon = styled(AvatarLayout).attrs(({
  bg: _bg = 'background',
  color: _color = 'keyFocus',
  size: _size = 'small'
}) => ({
  bg: _bg,
  color: _color,
  size: _size
})).withConfig({
  displayName: "AvatarIcon",
  componentId: "sc-18uvd0-0"
})(_t || (_t = _`
  ${0}
  ${0}
  border: solid 1px currentColor;

  ${0} {
    ${0}
  }
`), avatarCSS, ({
  role
}) => role === 'button' && 'cursor: pointer;', StyledIconBase, size);
//# sourceMappingURL=AvatarIcon.js.map