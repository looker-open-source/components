let _ = t => t,
  _t,
  _t2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { reset, omitStyledProps } from '@looker/design-tokens';
import React, { useContext, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useGlobalHotkeys } from '../utils';
import { DialogContext } from './DialogContext';
const SurfaceLayout = props => {
  const {
    closeModal
  } = useContext(DialogContext);
  const ref = useRef(null);
  useGlobalHotkeys('Escape', closeModal, ref);
  return React.createElement("div", _extends({
    "data-overlay-surface": true,
    ref: ref,
    tabIndex: -1
  }, omitStyledProps(props)));
};
export const surfaceTransition = () => css(_t || (_t = _`
  ${0}
`), ({
  theme
}) => `${theme.transitions.moderate}ms ${theme.easings.ease}`);
export const SurfaceBase = styled(SurfaceLayout).attrs(() => ({
  'aria-modal': true,
  role: 'dialog'
})).withConfig({
  displayName: "SurfaceBase",
  componentId: "sc-7dy58h-0"
})(_t2 || (_t2 = _`
  ${0}

  background: ${0};
  color: ${0};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`), reset, ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.text);
//# sourceMappingURL=SurfaceBase.js.map