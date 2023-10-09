let _ = t => t,
  _t;
const _excluded = ["children", "hasFooter", "hasHeader", "pb", "pt", "py", "p", "overflowVerticalPadding"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { OverflowShadow, useOverflow } from '../../utils';
const ModalContentLayout = forwardRef((_ref, forwardedRef) => {
  let {
      children,
      hasFooter,
      hasHeader,
      pb,
      pt,
      py,
      p,
      overflowVerticalPadding = 'u05'
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const [hasOverflow, ref] = useOverflow(forwardedRef);
  return React.createElement(OverflowShadow, _extends({
    hasOverflow: hasOverflow,
    ref: ref,
    p: p,
    pb: hasFooter && !hasOverflow ? overflowVerticalPadding : pb || py || p,
    pt: hasHeader && !hasOverflow ? overflowVerticalPadding : pt || py || p
  }, props), children);
});
ModalContentLayout.displayName = 'ModalContentLayout';
export const ModalContent = styled(ModalContentLayout).withConfig({
  displayName: "ModalContent",
  componentId: "sc-15p3h9v-0"
})(_t || (_t = _`
  flex: 1 1 auto;
  overflow: auto;
`));
//# sourceMappingURL=ModalContent.js.map