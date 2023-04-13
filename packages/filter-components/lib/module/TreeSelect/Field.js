import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
let _ = t => t,
  _t,
  _t2;
const _excluded = ["payload", "label", "onClick", "isSecondary", "detail", "disabled", "displayLabel"];

import { Box, Flex, Tooltip } from '@looker/components';
import React from 'react';
import styled, { css } from 'styled-components';
import { SectionLabelDetail } from './Section';
const InternalField = _ref => {
  let {
      payload,
      label,
      onClick,
      isSecondary,
      detail,
      disabled,
      displayLabel
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const handleClick = () => !disabled && onClick(label, payload);
  return React.createElement(Flex, _extends({
    onClick: handleClick,
    ml: "small",
    role: "button"
  }, props), disabled ? React.createElement(Tooltip, {
    content: disabled,
    placement: "right"
  }, React.createElement(Box, {
    display: "block",
    fontSize: "small"
  }, displayLabel)) : React.createElement(Flex, {
    fontSize: "small",
    alignItems: "center",
    width: "100%"
  }, displayLabel, detail && React.createElement(SectionLabelDetail, {
    ml: "auto",
    fontSize: "xsmall"
  }, detail)));
};
export const Field = styled(InternalField).withConfig({
  displayName: "Field",
  componentId: "sc-d48zha-0"
})(_t || (_t = _`
  border-left: 1px solid
    ${0};
  color: ${0};
  cursor: ${0};
  height: 30px;
  white-space: pre-wrap;

  &:hover {
    background: ${0};
    text-shadow: 0.45px 0 0 currentColor;
  }

  /* highlighting for search results */
  ${0}
`), ({
  isSecondary,
  theme: {
    colors
  }
}) => isSecondary ? colors.warn : colors.inform, ({
  disabled,
  theme: {
    colors
  }
}) => disabled ? colors.text1 : colors.text3, ({
  disabled
}) => disabled ? 'not-allowed' : 'pointer', ({
  isSecondary,
  theme: {
    colors
  }
}) => isSecondary ? colors.warnAccent : colors.informAccent, ({
  disabled
}) => !disabled && css(_t2 || (_t2 = _`
      b {
        color: ${0};
        text-decoration: underline;
        font-weight: ${0};
      }
    `), ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.fontWeights.semiBold));
//# sourceMappingURL=Field.js.map