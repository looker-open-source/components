import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;

const _excluded = ["label", "subdued", "maxWidth", "isEmpty", "isHoverTarget", "hasError", "onClick"];
import { ChipButton } from '@looker/components';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
const MAX_TOKEN_WIDTH = '20rem';
export const Token = forwardRef((_ref, ref) => {
  let {
    label,
    subdued = true,
    maxWidth,
    isEmpty,
    isHoverTarget,
    hasError,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const showError = !props['aria-expanded'] && hasError;
  let TokenComponent;

  if (isHoverTarget) {
    TokenComponent = DropTargetToken;
  } else if (isEmpty) {
    TokenComponent = EmptyToken;
  } else {
    TokenComponent = TokenBase;
  }

  return React.createElement(TokenComponent, {
    showError: showError,
    onClick: onClick,
    maxWidth: maxWidth,
    ref: ref,
    role: "button",
    "aria-selected": !subdued
  }, label);
});
Token.displayName = 'Token';
const TokenBase = styled(ChipButton).withConfig({
  displayName: "Token__TokenBase",
  componentId: "sc-194gay4-0"
})(_t || (_t = _`
  ${0}
  max-width: ${0};
`), ({
  theme,
  showError
}) => showError && `border: 1px solid ${theme.colors.criticalBorder};`, ({
  maxWidth
}) => maxWidth || MAX_TOKEN_WIDTH);
const DropTargetToken = styled(TokenBase).withConfig({
  displayName: "Token__DropTargetToken",
  componentId: "sc-194gay4-1"
})(_t2 || (_t2 = _`
  &:hover {
    border-color: ${0};
  }
`), ({
  theme
}) => theme.colors.key);
const EmptyToken = styled(TokenBase).withConfig({
  displayName: "Token__EmptyToken",
  componentId: "sc-194gay4-2"
})(_t3 || (_t3 = _`
  &[aria-selected='false'] {
    background: ${0};
    border: 1px dashed ${0};
    color: ${0};
  }
`), ({
  theme
}) => theme.colors.ui1, ({
  theme
}) => theme.colors.ui4, ({
  theme
}) => theme.colors.text1);
export const SubduedToken = styled(TokenBase).withConfig({
  displayName: "Token__SubduedToken",
  componentId: "sc-194gay4-3"
})(_t4 || (_t4 = _`
  font-weight: normal;

  &:hover {
    cursor: not-allowed;
  }
`));
//# sourceMappingURL=Token.js.map