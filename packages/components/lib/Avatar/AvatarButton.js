import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["imageUrl", "label", "size"];

let _ = t => t,
    _t;

import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from '../utils';
import { IconButton } from '../Button';
export const AvatarButton = styled(forwardRef((_ref, forwardedRef) => {
  let {
    imageUrl,
    label,
    size = 'large'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = useTranslation('AvatarButton');
  return React.createElement(IconButton, _extends({
    label: label,
    "aria-label": typeof label === 'string' ? label : '',
    icon: React.createElement(AccountCircle, null),
    size: size,
    ref: forwardedRef
  }, rest), imageUrl && React.createElement("img", {
    alt: t('Profile Picture'),
    className: "default-image",
    src: imageUrl
  }));
})).withConfig({
  displayName: "AvatarButton",
  componentId: "sc-yers8c-0"
})(_t || (_t = _`
  position: relative;

  img {
    border-radius: 50%;
    height: ${0};
    position: absolute;
    width: ${0};
  }
`), ({
  theme
}) => theme.sizes.medium, ({
  theme
}) => theme.sizes.medium);
//# sourceMappingURL=AvatarButton.js.map