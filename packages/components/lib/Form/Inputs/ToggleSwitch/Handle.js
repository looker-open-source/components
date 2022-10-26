import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["theme"];

let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { rippleStyle } from '../../../Ripple';

const getColor = ({
  on,
  validationType
}) => {
  if (on) {
    if (validationType === 'error') return 'critical';
    return 'key';
  }

  return 'field';
};

export const Handle = styled(({
  className,
  style
}) => React.createElement("div", {
  className: className,
  style: style,
  "data-testid": "handle"
}, React.createElement("div", null))).withConfig({
  displayName: "Handle",
  componentId: "sc-1qvjj89-0"
})(_t || (_t = _`
  ${0}
  height: ${0};
  left: 0;
  padding: ${0};
  position: absolute;
  top: 0;
  transform: ${0};
  transition: ${0}ms;
  width: ${0};
  div {
    background: ${0};
    border-radius: 50%;
    box-shadow: ${0};
    height: 100%;
    /* This nested relative position div allows the handle
    to appear on top of the ripple bg */
    position: relative;
    width: 100%;
  }
`), rippleStyle, ({
  theme
}) => theme.space.u6, ({
  theme
}) => theme.space.u05, ({
  on,
  theme
}) => on ? `translateX(${theme.space.u4})` : undefined, ({
  theme
}) => theme.transitions.rapid, ({
  theme
}) => theme.space.u6, _ref => {
  let {
    theme
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return theme.colors[getColor(props)];
}, ({
  theme
}) => theme.elevations.plus1);
//# sourceMappingURL=Handle.js.map