import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "p", "py", "px"];

let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { layout } from '@looker/design-tokens';
import { ModalContent } from '../../../Modal/ModalContent';
const popoverContentDefaults = {
  px: 'u5',
  py: 'u4'
};
export const PopoverContent = styled(_ref => {
  let {
    children,
    p,
    py,
    px
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  py = py || p || popoverContentDefaults.py;
  px = px || p || popoverContentDefaults.px;
  return React.createElement(ModalContent, _extends({
    overflowVerticalPadding: "u1",
    py: py,
    px: px
  }, props), children);
}).withConfig({
  displayName: "PopoverContent",
  componentId: "sc-pgzun4-0"
})(_t || (_t = _`
  ${0}
`), layout);
//# sourceMappingURL=PopoverContent.js.map