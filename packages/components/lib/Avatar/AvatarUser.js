import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3;

const _excluded = ["color", "user", "role", "size"];
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