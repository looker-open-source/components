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
import { TreeContext } from '../Tree/TreeContext'
import { ListItemDetail, listItemDimensions } from '../ListItem'
import { Tree, TreeProps } from '../Tree'
import { AccordionIndicator } from '../Accordion2/AccordionIndicator'
import { ControlledLoosely } from '../Accordion2/controlTypes'
import { GenericClickProps } from '../utils/useClickable'
import { NavTreeItemProps } from './NavTreeItem'

const NavTreeStyle = styled(Tree).withConfig<
  {
    iconGap: SpacingSizes
    px: SpacingSizes
  } & TreeProps
>({
  shouldForwardProp: (prop) => !['iconGap', 'px'].includes(prop),
})`
  ${AccordionIndicator} {
    ${({ icon, iconGap, theme }) =>
      !icon && `margin-right: ${theme.space[iconGap]}`}
  }

  ${ListItemDetail} {
    padding-right: ${({ px, theme }) => theme.space[px]};
  }
`

export type NavTreeProps = Omit<NavTreeItemProps, 'parentIcon'> &
  ControlledLoosely &
  GenericClickProps<HTMLElement> &
  Pick<TreeProps, 'itemRole' | 'label'>

export const NavTree = styled((props: NavTreeProps) => {
  const { density: contextDensity } = useContext(TreeContext)
  const density = props.density || contextDensity
  const { iconGap, px } = listItemDimensions(density)

  return <NavTreeStyle {...props} iconGap={iconGap} px={px} truncate />
})``
