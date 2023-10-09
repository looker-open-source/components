let _ = t => t,
  _t,
  _t2;
const _excluded = ["children", "className", "eventHandlers", "placement", "style", "role", "arrow", "styleArrow"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { fadeIn, maxWidth, minWidth, reset } from '@looker/design-tokens';
import React, { forwardRef, useContext, useRef } from 'react';
import styled from 'styled-components';
import merge from 'lodash/merge';
import { useGlobalHotkeys, useForkedRef, partitionAriaProps } from '../utils';
import { DialogContext } from '../Dialog';
import { OverlayArrow } from './OverlayArrow';
const OverlaySurfaceLayout = forwardRef((props, forwardedRef) => {
  const {
      children,
      className,
      eventHandlers,
      placement,
      style,
      role,
      arrow,
      styleArrow
    } = props,
    otherProps = _objectWithoutProperties(props, _excluded);
  const {
    closeModal
  } = useContext(DialogContext);
  const [ariaProps] = partitionAriaProps(otherProps);
  const innerRef = useRef(null);
  const ref = useForkedRef(forwardedRef, innerRef);
  useGlobalHotkeys('Escape', closeModal, innerRef);
  const arrowBaseProps = {
    'data-placement': placement,
    style: styleArrow
  };
  const arrowProps = typeof arrow === 'boolean' ? arrowBaseProps : merge(arrowBaseProps, arrow);
  return React.createElement("div", _extends({
    role: role
  }, ariaProps, {
    ref: ref,
    style: style,
    className: className
  }, eventHandlers, {
    tabIndex: -1,
    "data-placement": placement
  }), arrow && React.createElement(OverlayArrow, arrowProps), React.createElement(OverlaySurfaceContentArea, {
    tabIndex: -1,
    "data-overlay-surface": true
  }, children));
});
OverlaySurfaceLayout.displayName = 'OverlaySurfaceLayout';
export const OverlaySurface = styled(OverlaySurfaceLayout).withConfig({
  displayName: "OverlaySurface",
  componentId: "sc-wd3uv8-0"
})(_t || (_t = _`
  ${0}

  animation: ${0} ease-in;
  animation-duration: ${0};
  ${0}
  ${0}
  overflow: visible;
  z-index: ${0};

  &[data-placement*='top'] {
    padding-bottom: ${0};
  }

  &[data-placement*='right'] {
    padding-left: ${0};
  }

  &[data-placement*='bottom'] {
    padding-top: ${0};
  }

  &[data-placement*='left'] {
    padding-right: ${0};
  }

  &:focus {
    outline: none;
  }
`), reset, fadeIn, ({
  theme
}) => `${theme.transitions.quick}ms`, maxWidth, minWidth, ({
  theme: {
    zIndexFloor
  }
}) => zIndexFloor || undefined, ({
  theme: {
    space
  }
}) => space.u2, ({
  theme: {
    space
  }
}) => space.u2, ({
  theme: {
    space
  }
}) => space.u2, ({
  theme: {
    space
  }
}) => space.u2);
export const OverlaySurfaceContentArea = styled.div.withConfig({
  displayName: "OverlaySurface__OverlaySurfaceContentArea",
  componentId: "sc-wd3uv8-1"
})(_t2 || (_t2 = _`
  background: ${0};
  border-radius: ${0};
  box-shadow: ${0};
  color: ${0};

  &:focus {
    outline: none;
  }
`), ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.elevations.plus2, ({
  theme
}) => theme.colors.text);
//# sourceMappingURL=OverlaySurface.js.map