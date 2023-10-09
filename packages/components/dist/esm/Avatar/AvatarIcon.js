let _ = t => t,
  _t;
const _excluded = ["color", "icon", "role"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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