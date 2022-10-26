import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["validationType"];

let _ = t => t,
    _t;

import React from 'react';
import { inputHeight, Box2 } from '@looker/components';
import styled from 'styled-components';
export const MidInputLabel = styled(_ref => {
  let {
    validationType
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Box2, _extends({
    alignItems: "center",
    alignSelf: "center",
    bg: "background",
    border: validationType === 'error' ? 'critical' : 'ui3',
    color: "text1",
    display: "flex",
    height: inputHeight,
    lineHeight: "medium",
    px: "xsmall",
    textAlign: "right"
  }, props));
}).withConfig({
  displayName: "MidInputLabel",
  componentId: "sc-krsmua-0"
})(_t || (_t = _`
  border-right: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`));
//# sourceMappingURL=MidInputLabel.js.map