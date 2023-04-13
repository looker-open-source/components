import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
let _ = t => t,
  _t;
const _excluded = ["tree", "onSectionClick", "onFieldClick"];
import { Box, Spinner } from '@looker/components';
import React from 'react';
import styled from 'styled-components';
import { Section, SectionContent } from './Section';
import { generateSections } from './utils/generate_sections';
export const TreeFactory = _ref => {
  let {
      tree,
      onSectionClick,
      onFieldClick
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(Box, props, tree ? generateSections(tree, 0, onSectionClick, onFieldClick) : React.createElement(Spinner, {
    mx: "auto"
  }));
};
export const Tree = styled(TreeFactory).withConfig({
  displayName: "Tree",
  componentId: "sc-ji2crs-0"
})(_t || (_t = _`
  ${0} ${0} {
    font-weight: ${0};
    padding: 0;
  }
  & > ${0} + ${0} {
    border-top: solid 1px ${0};
  }
`), SectionContent, Section, ({
  theme
}) => theme.fontWeights.normal, Section, Section, ({
  theme
}) => theme.colors.ui2);
//# sourceMappingURL=Tree.js.map