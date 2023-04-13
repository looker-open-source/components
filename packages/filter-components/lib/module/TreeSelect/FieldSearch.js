let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7;
import { Box, Flex, Icon, IconButton, InputText, Label, Text } from '@looker/components';
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore';
import { Search } from '@styled-icons/material-outlined/Search';
import React from 'react';
import styled from 'styled-components';
export const FieldSearch = React.forwardRef(({
  disabled,
  fieldSearchInputId,
  width,
  height,
  label,
  onClick,
  value,
  onChange,
  onFocus,
  placeholder,
  isOpen,
  withDropdown,
  showSelectedSection,
  disabledText
}, ref) => {
  const [section, field] = (value === null || value === void 0 ? void 0 : value.split('•')) || [];
  return React.createElement(Flex, {
    position: "relative",
    flexDirection: "column",
    width: width,
    height: height,
    overflow: "hidden",
    flexShrink: 0
  }, label && React.createElement(SearchLabel, {
    htmlFor: fieldSearchInputId
  }, label), React.createElement(SearchInput, {
    disabled: disabled,
    ref: ref,
    flexWrap: "nowrap",
    alignItems: "center",
    onClick: onClick,
    px: "small"
  }, React.createElement(Icon, {
    icon: React.createElement(Search, null),
    size: 24
  }), disabledText ? React.createElement(TextContainer, {
    px: "small"
  }, disabledText) : React.createElement(InnerInputText, {
    id: label ? fieldSearchInputId : undefined,
    display:
    showSelectedSection && withDropdown ? isOpen || value === '' ? 'block' : 'none' : 'block',
    width: "100%",
    height: "auto",
    value: value,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    autoComplete: "off"
  }), !disabledText && showSelectedSection && withDropdown && !isOpen && value && React.createElement(TextContainer, {
    px: "xsmall"
  }, React.createElement(SectionText, null, section), React.createElement(DividerText, null, "\u2022"), React.createElement(FieldText, null, field)), React.createElement(IconButton, {
    tooltipDisabled: true,
    label: "View fields",
    icon: React.createElement(ExpandMore, null),
    size: "small",
    outline: false,
    p: "none",
    mr: "xsmall"
  })));
});
const InnerInputText = styled(InputText).withConfig({
  displayName: "FieldSearch__InnerInputText",
  componentId: "sc-1poof9l-0"
})(_t || (_t = _`
  &:focus,
  &:focus-within {
    box-shadow: none;
  }
`));
const TextContainer = styled(Box).withConfig({
  displayName: "FieldSearch__TextContainer",
  componentId: "sc-1poof9l-1"
})(_t2 || (_t2 = _`
  cursor: text;
  display: table;
  font-size: ${0};
  overflow: hidden;
  width: 100%;
  table-layout: fixed;
  text-overflow: ellipsis;
  white-space: nowrap;
`), ({
  theme
}) => theme.fontSizes.small);
const SectionText = styled(Text).withConfig({
  displayName: "FieldSearch__SectionText",
  componentId: "sc-1poof9l-2"
})(_t3 || (_t3 = _`
  color: ${0};
  font-size: ${0};
`), ({
  theme
}) => theme.colors.text4, ({
  theme
}) => theme.fontSizes.small);
const DividerText = styled(Text).withConfig({
  displayName: "FieldSearch__DividerText",
  componentId: "sc-1poof9l-3"
})(_t4 || (_t4 = _`
  color: ${0};
  font-size: ${0};
`), ({
  theme
}) => theme.colors.text4, ({
  theme
}) => theme.fontSizes.small);
const FieldText = styled(Text).withConfig({
  displayName: "FieldSearch__FieldText",
  componentId: "sc-1poof9l-4"
})(_t5 || (_t5 = _`
  color: ${0};
  font-size: ${0};
  font-weight: ${0};
`), ({
  theme
}) => theme.colors.text4, ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.fontWeights.semiBold);
const SearchLabel = styled(Label).withConfig({
  displayName: "FieldSearch__SearchLabel",
  componentId: "sc-1poof9l-5"
})(_t6 || (_t6 = _`
  color: ${0};
  font-size: ${0};
  font-weight: ${0};
  margin-bottom: ${0};
`), ({
  theme
}) => theme.colors.text2, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.fontWeights.normal, ({
  theme: {
    space
  }
}) => space.xsmall);
const SearchInput = styled(Flex).withConfig({
  displayName: "FieldSearch__SearchInput",
  componentId: "sc-1poof9l-6"
})(_t7 || (_t7 = _`
  border: solid 1px ${0};
  border-radius: ${0};
  height: 48px;
  padding-right: 0;

  &:focus-within {
    border-color: ${0};
    box-shadow: 0 0 1px ${0};
  }

  &[disabled] {
    background-color: ${0};
    border-color: ${0};
    * {
      color: ${0};
      pointer-events: none;
    }
  }

  ${0} {
    border: none;
    font-size: ${0};
    outline: none;

    :not(:focus) {
      color: ${0};
    }
  }

  ${0} {
    color: ${0};
    margin-right: 6px;

    &:focus,
    &:hover {
      color: ${0};
      background-color: transparent;
      border-color: transparent;
    }
  }
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.colors.keyFocus, ({
  theme
}) => theme.colors.keyFocus, ({
  theme: {
    colors
  }
}) => colors.ui1, ({
  theme: {
    colors
  }
}) => colors.ui2, ({
  theme: {
    colors
  }
}) => colors.text1, InputText, ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.colors.text4, IconButton, ({
  theme
}) => theme.colors.text1, ({
  theme
}) => theme.colors.text5);
//# sourceMappingURL=FieldSearch.js.map