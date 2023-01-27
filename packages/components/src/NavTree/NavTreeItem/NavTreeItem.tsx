/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import styled, { useTheme } from 'styled-components'
import type { SpacingSizes } from '@looker/design-tokens'
import type { GenerateIndentProps } from '../../Tree/utils/generateIndent'
import { generateIndentCalculation } from '../../Tree/utils/generateIndent'
import { TreeContext } from '../../Tree/TreeContext'
import { ListItemDetail, listItemDimensions } from '../../ListItem'
import { TreeItem } from '../../Tree'
import { accordionDimensions } from '../../Accordion2/accordionDimensions'
import { TreeItemContent } from '../../Tree/TreeItemContent'
import type { NavTreeItemProps } from '../types'
import { INDICATOR_SPACER } from '../NavTree'

const IndentOverrideTreeItem = styled(TreeItem).withConfig<
  {
    gap: SpacingSizes
    indicatorGap: SpacingSizes
    px: SpacingSizes
  } & GenerateIndentProps &
    NavTreeItemProps
>({
  shouldForwardProp: prop =>
    !['depth', 'density', 'gap', 'indicatorGap', 'parentIcon', 'px'].includes(
      prop
    ),
})`
  ${TreeItemContent} {
    ${({ depth = 0, density, gap, indicatorGap, parentIcon, theme }) =>
      `padding-left: calc(${generateIndentCalculation(
        parentIcon ? depth + 1 : depth,
        density || theme.defaults.density,
        theme
      )} + ${theme.space[gap]} - ${
        theme.space[indicatorGap]
      } + ${INDICATOR_SPACER});`}
  }

  ${ListItemDetail} {
    padding-right: ${({ px, theme }) => theme.space[px]};
  }
`

export const NavTreeItem = styled(
  ({ ripple = true, truncate = true, ...props }: NavTreeItemProps) => {
    const theme = useTheme()
    const { depth } = useContext(TreeContext)
    const { gap, px } = listItemDimensions(theme.defaults.density)
    const { indicatorGap } = accordionDimensions()

    return (
      <IndentOverrideTreeItem
        depth={depth}
        color="key"
        gap={gap}
        indicatorGap={indicatorGap}
        itemRole={props.href ? 'link' : props.itemRole}
        px={px}
        ripple={ripple}
        truncate={truncate}
        {...props}
      />
    )
  }
)``
