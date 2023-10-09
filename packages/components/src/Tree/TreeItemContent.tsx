/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components';
import type { ListItemContentProps } from '../ListItem';
import { ListItemContent } from '../ListItem';
import type { GenerateIndentProps } from './utils';
import { generateIndent, generateTreeBorder } from './utils';

type TreeItemContentProps = ListItemContentProps &
  GenerateIndentProps & {
    border?: boolean;
  };

export const TreeItemContent = styled(
  ListItemContent
).attrs<TreeItemContentProps>(({ role = 'treeitem' }) => ({
  role,
}))<TreeItemContentProps>`
  ${({ depth = 0, ...props }) =>
    generateTreeBorder({
      // Subtract 2 from parent Tree's depth to get borders to line up
      depth: Math.max(0, depth - 2),
      ...props,
    })}
  ${({ density, depth }) => generateIndent({ density, depth })}
  display: flex;
  flex: 1;
  padding-right: 0;

  &[disabled] {
    color: ${({ theme }) => theme.colors.text1};
    cursor: not-allowed;
  }
`;
