import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["theme"];

let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';

const getColor = ({
  on,
  validationType
}) => {
  if (validationType === 'error') return 'criticalAccent';
  if (on) return 'keyAccent';
  return 'ui3';
};

export const Track = styled(({
  className
}) => React.createElement("div", {
  className: className
})).withConfig({
  displayName: "Track",
  componentId: "sc-1sf45zk-0"
})(_t || (_t = _`
  background: ${0};
  border-radius: ${0};
  height: 14px;
  transition: ${0}ms;
  width: ${0};
`), _ref => {
  let {
    theme
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return theme.colors[getColor(props)];
}, ({
  theme
}) => theme.radii.large, ({
  theme
}) => theme.transitions.rapid, ({
  theme
}) => theme.space.u9);
//# sourceMappingURL=Track.js.map