let _ = t => t,
  _t,
  _t2,
  _t3;
const _excluded = ["color", "user", "role", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import styled from 'styled-components';
import { omitStyledProps, shouldForwardProp } from '@looker/design-tokens';
import { useTranslation } from '../utils';
import { avatarCSS } from './Avatar';
const AvatarLayout = _ref => {
  let {
      color,
      user,
      role,
      size
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    t
  } = useTranslation('AvatarUser');
  const [imgError, setImgError] = useState(false);
  const handleError = () => setImgError(true);
  const firstInitial = user && user.first_name && user.first_name[0];
  const lastInitial = user && user.last_name && user.last_name[0];
  const name = user ? `${user.first_name} ${user.last_name}` : t('Avatar');
  const BaseElement = role === 'button' ? 'button' : 'div';
  return React.createElement(BaseElement, _extends({}, omitStyledProps(props), {
    "aria-label": name
  }), React.createElement(AvatarInitials, {
    color: color,
    "aria-hidden": true
  }, size === 'xxsmall' ? `${firstInitial}` : `${firstInitial}${lastInitial}`), user && user.avatar_url && !imgError && React.createElement(AvatarPhoto, {
    "aria-hidden": true,
    onError: handleError,
    "data-testid": "avatar-photo",
    src: user.avatar_url
  }));
};
const AvatarPhoto = styled.img.withConfig({
  displayName: "AvatarUser__AvatarPhoto",
  componentId: "sc-ds3q2d-0"
})(_t || (_t = _`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`));
const AvatarInitials = styled.div.withConfig({
  shouldForwardProp,
  displayName: "AvatarUser__AvatarInitials",
  componentId: "sc-ds3q2d-1"
}).attrs(({
  color
}) => ({
  bg: color
}))(_t2 || (_t2 = _`
  color: ${0};
`), ({
  theme
}) => theme.colors.keyText);
export const AvatarUser = styled(AvatarLayout).attrs(({
  color: _color = 'key',
  size: _size = 'small'
}) => ({
  color: _color,
  size: _size
})).withConfig({
  displayName: "AvatarUser",
  componentId: "sc-ds3q2d-2"
})(_t3 || (_t3 = _`
  ${0}
  ${0}

  background: currentColor;
  position: relative;
`), avatarCSS, ({
  role
}) => role === 'button' && 'cursor: pointer;');
//# sourceMappingURL=AvatarUser.js.map