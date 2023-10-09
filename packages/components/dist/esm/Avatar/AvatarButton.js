const _excluded = ["imageUrl", "label", "size"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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