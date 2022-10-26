import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "hasFooter", "hasHeader", "pb", "pt", "py", "p", "overflowVerticalPadding"];
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