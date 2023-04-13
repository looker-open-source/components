import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6;
const _excluded = ["title", "isOpen", "onClick", "id", "detail"];

import { Box, Flex, Icon, Text } from '@looker/components';
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown';
import React from 'react';
import styled from 'styled-components';
export const SectionFactory = _ref => {
  let {
      title,
      isOpen,
      onClick,
      id,
      detail
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const handleClick = () => onClick({
    isOpen: !isOpen,
    id
  });
  return React.createElement(Box, props, React.createElement(SectionLabel, {
    role: "button",
    onClick: handleClick,
    alignItems: "center"
  }, React.createElement(TreeArrowIcon, {
    open: isOpen,
    icon: React.createElement(ArrowDropDown, null)
  }), React.createElement(SectionLabelName, {
    ml: "xxsmall",
    fontSize: "small"
  }, title), detail && React.createElement(SectionLabelDetail, {
    ml: "auto",
    fontSize: "xsmall"
  }, detail)), isOpen ? React.createElement(SectionContent, {
    pl: "medium"
  }, props.children) : React.createElement(React.Fragment, null));
};
export const SectionLabelName = styled(Text).withConfig({
  displayName: "Section__SectionLabelName",
  componentId: "sc-cfbkz1-0"
})(_t || (_t = _`
  color: ${0};
  font-weight: ${0};
`), ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.fontWeights.semiBold);
export const SectionLabelDetail = styled(Text).withConfig({
  displayName: "Section__SectionLabelDetail",
  componentId: "sc-cfbkz1-1"
})(_t2 || (_t2 = _`
  color: ${0};
  font-weight: ${0};
`), ({
  theme
}) => theme.colors.text2, ({
  theme
}) => theme.fontWeights.normal);
const TreeArrowIcon = styled(Icon).withConfig({
  displayName: "Section__TreeArrowIcon",
  componentId: "sc-cfbkz1-2"
})(_t3 || (_t3 = _`
  color: ${0};
  transform: ${0};
  transition: transform 90ms ease-out;
`), ({
  theme
}) => theme.colors.text1, ({
  open
}) => open ? 'rotate(0deg)' : 'rotate(-90deg)');
export const SectionContent = styled(Box).withConfig({
  displayName: "Section__SectionContent",
  componentId: "sc-cfbkz1-3"
})(_t4 || (_t4 = _``));
export const SectionLabel = styled(Flex).withConfig({
  displayName: "Section__SectionLabel",
  componentId: "sc-cfbkz1-4"
})(_t5 || (_t5 = _`
  cursor: pointer;
  padding: 0 ${0};
  background: ${0};
  height: 36px;
  top: 0;
  z-index: 1; /* Fixes bleed through of transformed caret icon */

  &:hover {
    background: ${0};
  }

  /* highlighting for search results */
  b {
    color: ${0};
    text-decoration: ${0};
    font-weight: ${0};
  }
`), ({
  theme
}) => theme.space.small, ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.ui1, ({
  disabled,
  theme
}) => disabled ? undefined : theme.colors.text5, ({
  disabled
}) => disabled ? undefined : 'underline', ({
  disabled,
  theme
}) => disabled ? undefined : theme.fontWeights.semiBold);
export const Section = styled(SectionFactory).withConfig({
  displayName: "Section",
  componentId: "sc-cfbkz1-5"
})(_t6 || (_t6 = _`
  color: ${0};
  ${0} {
    ${0} {
      height: 30px;
      padding: 0 ${0};
      position: initial;
    }

    ${0} {
      font-weight: ${0};
    }
  }
`), ({
  theme
}) => theme.colors.text3, SectionContent, SectionLabel, ({
  theme
}) => theme.space.xxsmall, SectionLabelName, ({
  theme
}) => theme.fontWeights.normal);
//# sourceMappingURL=Section.js.map