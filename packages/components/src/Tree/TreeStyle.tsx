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

import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { DensityProp, SpacingSizes } from '@looker/design-tokens'
import { Accordion2Disclosure } from '../Accordion2/Accordion2Disclosure'
import { Accordion2Content } from '../Accordion2/Accordion2Content'
import { List } from '../List'
import {
  ListItem,
  ListItemColorProp,
  ListItemContent,
  listItemContentCSS,
  ListItemIcon,
  ListItemStatefulProps,
} from '../ListItem'
import { listItemBackgroundColor } from '../ListItem/utils'
import { IconSize } from '../Icon'
import { AccordionIndicator } from '../Accordion2/AccordionIndicator'
import { TreeAccordion } from './TreeAccordion'
import { TreeItem } from './TreeItem'
import { TreeBranch } from './TreeBranch'
import {
  generateIndent,
  GenerateIndentProps,
  generateTreeBorder,
} from './utils'

type TreeStyleProps = DensityProp &
  ListItemStatefulProps &
  ListItemColorProp & {
    assumeIconAlignment?: boolean
    border?: boolean
    branchFontWeight?: boolean
    className?: string
    depth: number
    dividers?: boolean
    icon: boolean
    iconGap: SpacingSizes
    indicatorSize: IconSize
    labelBackgroundOnly?: boolean
  }

export const TreeItemInner = styled(TreeItem)`
  ${listItemContentCSS(css`
    background-color: transparent;
    padding-left: 0;
  `)}

  > ${ListItemContent}:focus {
    box-shadow: none;
  }
`

export const TreeItemInnerDetail = styled.div``

const dividersCSS = css`
  ${TreeItem} {
    margin-top: 1px;
  }

  ${Accordion2Disclosure} {
    margin-top: 1px;

    ${TreeItemInner} {
      margin-top: 0;
    }
  }
`

interface TreeItemIndentProps extends GenerateIndentProps {
  labelBackgroundOnly: boolean
}

const treeItemIndent = ({
  assumeIconAlignment,
  depth = 0,
  density,
  icon,
  labelBackgroundOnly,
}: TreeItemIndentProps) => {
  const labelPaddingRemoval = css`
    padding: 0;
  `

  const wrapperIndent = css`
    ${generateIndent({
      assumeIconAlignment,
      density,
      depth: depth + 2,
      icon,
    })}
    ${listItemContentCSS(labelPaddingRemoval)}
  `

  const labelIndent = listItemContentCSS(
    generateIndent({
      assumeIconAlignment,
      density,
      depth: depth + 2,
      icon,
    })
  )

  return labelBackgroundOnly ? wrapperIndent : labelIndent
}

const TreeStyleLayout: FC<TreeStyleProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
)

export const TreeStyle = styled(TreeStyleLayout)`
  color: ${({ theme }) => theme.colors.text5};
  flex-shrink: 2;
  min-width: 0;

  ${ListItem} {
    ${({ iconGap, theme }) =>
      listItemContentCSS(css`
        ${ListItemIcon} {
          margin-right: ${theme.space[iconGap]};
        }
      `)}
  }

  > ${TreeAccordion} {
    /**
        Gets the box-shadow to sit above the ListItem background
       */
    > ${Accordion2Disclosure}.focusVisible::after {
      bottom: 0;
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.keyFocus};
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }

    > ${Accordion2Content} {
      ${({ border, depth, indicatorSize, theme }) =>
        border && generateTreeBorder(depth, indicatorSize, theme)}
    }

    > ${Accordion2Disclosure} {
      ${AccordionIndicator} {
        margin-right: ${({ assumeIconAlignment, icon, iconGap, theme }) =>
          assumeIconAlignment && !icon && theme.space[iconGap]};
      }

      ${ListItem} {
        ${({ labelBackgroundOnly, ...restProps }) =>
          labelBackgroundOnly && listItemBackgroundColor(restProps)}
        font-weight: ${({ branchFontWeight, theme: { fontWeights } }) =>
          branchFontWeight ? fontWeights.normal : fontWeights.semiBold};
      }

      ${({ labelBackgroundOnly, ...restProps }) =>
        !labelBackgroundOnly && listItemBackgroundColor(restProps)}

      background-clip: padding-box;
      /**
          Disables AccordionDisclosure's innate box-shadow
         */
      box-shadow: none;
      /**
        Tree's padding-right is handled by the internal item
       */
      padding-right: 0;
      /**
        Note we do NOT pass assumeIconAlignment here since only child items should have
        alignment shifted by assumeIconAlignment prop
       */
      ${({ depth, density }) =>
        generateIndent({
          density,
          depth,
        })}
    }
  }

  ${({ dividers }) => dividers && dividersCSS}

  > ${TreeAccordion} > ${Accordion2Content} > ${List} {
    > ${ListItem} {
      ${({ assumeIconAlignment, density, depth, icon, labelBackgroundOnly }) =>
        treeItemIndent({
          assumeIconAlignment,
          density,
          depth,
          icon,
          labelBackgroundOnly: !!labelBackgroundOnly,
        })}
    }

    > ${TreeBranch} {
      ${({ assumeIconAlignment, density, depth, icon }) =>
        generateIndent({
          assumeIconAlignment,
          density,
          depth: depth + 2,
          icon,
        })}
    }
  }
`
