/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { ListItemContentProps } from '../ListItem'
import { ListItemContent } from '../ListItem'
import type { GenerateIndentProps } from './utils'
import { generateIndent } from './utils'

type TreeItemContentProps = ListItemContentProps & GenerateIndentProps

export const TreeItemContent = styled(
  ListItemContent
).attrs<TreeItemContentProps>(({ role = 'treeitem' }) => ({
  role,
}))<TreeItemContentProps>`
  ${({ density, depth }) => generateIndent({ density, depth })}
  display: flex;
  flex: 1;
  padding-right: 0;

  &[disabled] {
    color: ${({ theme }) => theme.colors.text1};
    cursor: not-allowed;
  }
`
