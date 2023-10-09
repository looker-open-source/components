const _excluded = ["children", "p", "py", "px"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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