/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { useContext } from 'react'
import styled from 'styled-components'
import { SpacingSizes } from '@looker/design-tokens'
import {
  generateIndentCalculation,
  GenerateIndentProps,
} from '../Tree/utils/generateIndent'
import { TreeContext } from '../Tree/TreeContext'
import { ListItemDetail, ListItemProps, listItemDimensions } from '../ListItem'
import { TreeItem } from '../Tree'
import { accordionDimensions } from '../Accordion2/accordionDimensions'
import { TreeItemContent } from '../Tree/TreeItemContent'
import { INDICATOR_SPACER } from './NavTree'

const IndentOverrideTreeItem = styled(TreeItem).withConfig<
  {
    iconGap: SpacingSizes
    indicatorGap: SpacingSizes
    px: SpacingSizes
  } & GenerateIndentProps &
    NavTreeItemProps
>({
  shouldForwardProp: (prop) =>
    ![
      'depth',
      'density',
      'iconGap',
      'indicatorGap',
      'parentIcon',
      'px',
    ].includes(prop),
})`
  ${TreeItemContent} {
    ${({ depth = 0, density = 0, iconGap, indicatorGap, parentIcon, theme }) =>
      `padding-left: calc(${generateIndentCalculation(
        parentIcon ? depth + 1 : depth,
        density,
        theme
      )} + ${theme.space[iconGap]} - ${
        theme.space[indicatorGap]
      } + ${INDICATOR_SPACER});`}
  }

  ${ListItemDetail} {
    padding-right: ${({ px, theme }) => theme.space[px]};
  }
`

export type NavTreeItemProps = {
  /**
   * Aligns item label based on parent Tree's icon prop
   */
  parentIcon?: boolean
} & Omit<ListItemProps, 'truncate'>

export const NavTreeItem = styled((props: NavTreeItemProps) => {
  const { density: contextDensity, depth } = useContext(TreeContext)
  const density = props.density || contextDensity
  const { iconGap, px } = listItemDimensions(density)
  const { indicatorGap } = accordionDimensions(density)

  return (
    <IndentOverrideTreeItem
      density={density}
      depth={depth}
      iconGap={iconGap}
      indicatorGap={indicatorGap}
      px={px}
      truncate
      {...props}
    />
  )
})``
