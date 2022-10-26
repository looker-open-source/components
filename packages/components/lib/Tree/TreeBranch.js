let _ = t => t,
    _t,
    _t2;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { TreeContext } from './TreeContext';
import { generateIndent } from './utils';

const TreeBranchLayout = ({
  children,
  className
}) => {
  const {
    depth,
    density
  } = useContext(TreeContext);
  return React.createElement(TreeBranchIndentSpacer, {
    className: className,
    depth: depth + 1,
    density: density
  }, children);
};

const TreeBranchIndentSpacer = styled.div.withConfig({
  displayName: "TreeBranch__TreeBranchIndentSpacer",
  componentId: "sc-1uogj9w-0"
})(_t || (_t = _`
  ${0}
`), generateIndent);
export const TreeBranch = styled(TreeBranchLayout).withConfig({
  displayName: "TreeBranch",
  componentId: "sc-1uogj9w-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=TreeBranch.js.map