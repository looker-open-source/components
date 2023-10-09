const _excluded = ["secondaryIcon", "secondaryColor", "secondaryBg", "color", "icon", "user", "role"];
let _ = t => t,
  _t,
  _t2;
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styled from 'styled-components';
import { omitStyledProps } from '@looker/design-tokens';
import { PersonOutline } from '@styled-icons/material/PersonOutline';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { AvatarUser } from './AvatarUser';
import { AvatarIcon } from './AvatarIcon';
import { avatarButtonOverrides } from './Avatar';
const AvatarIconSecondary = styled(AvatarIcon).withConfig({
  displayName: "AvatarCombo__AvatarIconSecondary",
  componentId: "sc-gekgjm-0"
})(_t || (_t = _``));
const AvatarLayout = _ref => {
  let {
      secondaryIcon,
      secondaryColor,
      secondaryBg,
      color,
      icon = React.createElement(PersonOutline, null),
      user,
      role
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const BaseElement = role === 'button' ? 'button' : 'div';
  return React.createElement(BaseElement, omitStyledProps(props), user ? React.createElement(AvatarUser, {
    user: user,
    color: color
  }) : React.createElement(AvatarIcon, {
    color: color,
    icon: icon
  }), React.createElement(AvatarIconSecondary, {
    bg: secondaryBg,
    color: secondaryColor,
    icon: secondaryIcon
  }));
};
export const AvatarCombo = styled(AvatarLayout).withConfig({
  displayName: "AvatarCombo",
  componentId: "sc-gekgjm-1"
})(_t2 || (_t2 = _`
  ${0}
  border: none;
  height: 40px;
  position: relative;
  width: 40px;

  ${0} {
    bottom: -4px;
    height: 20px;
    position: absolute;
    right: -4px;
    width: 20px;

    ${0} {
      height: 14px;
      width: 14px;
    }
  }
`), avatarButtonOverrides, AvatarIconSecondary, StyledIconBase);
//# sourceMappingURL=AvatarCombo.js.map