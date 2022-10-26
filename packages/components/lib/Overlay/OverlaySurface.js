import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["children", "className", "eventHandlers", "placement", "style", "role"];
import { fadeIn, maxWidth, reset } from '@looker/design-tokens';
import React, { forwardRef, useContext, useRef } from 'react';
import styled from 'styled-components';
import { useGlobalHotkeys, useForkedRef, partitionAriaProps } from '../utils';
import { DialogContext } from '../Dialog';
const OverlaySurfaceLayout = forwardRef((props, forwardedRef) => {
  const {
    children,
    className,
    eventHandlers,
    placement,
    style,
    role
  } = props,
        otherProps = _objectWithoutProperties(props, _excluded);

  const {
    closeModal
  } = useContext(DialogContext);
  const [ariaProps] = partitionAriaProps(otherProps);
  const innerRef = useRef(null);
  const ref = useForkedRef(forwardedRef, innerRef);
  useGlobalHotkeys('esc', closeModal, innerRef);
  return React.createElement("div", _extends({
    role: role
  }, ariaProps, {
    ref: ref,
    style: style,
    className: className
  }, eventHandlers, {
    tabIndex: -1,
    "data-placement": placement
  }), React.createElement(OverlaySurfaceContentArea, {
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
}) => `${theme.transitions.quick}ms`, maxWidth, ({
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