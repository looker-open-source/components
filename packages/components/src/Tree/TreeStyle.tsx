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

import styled, { css } from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { SpacingSizes, Theme } from '@looker/design-tokens'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosureStyle,
} from '../Accordion'
import { listItemBackgroundColor } from '../List/utils'
import { ListItemStatefulWithHoveredProps } from '../List/types'
import { List, ListItem } from '../List'
import { listItemLabelCSS } from '../List/ListItemLabel'
import { IconPlaceholder, IconSize } from '../Icon'
import { TreeItem } from './TreeItem'
import { TreeBranch } from './TreeBranch'
import { generateIndent, generateTreeBorder } from './utils'

interface TreeStyleProps extends ListItemStatefulWithHoveredProps {
  border?: boolean
  branchFontWeight?: boolean
  depth: number
  dividers?: boolean
  iconGap: SpacingSizes
  indicatorSize: IconSize
  labelBackgroundOnly?: boolean
}

export const TreeItemInner = styled(TreeItem)`
  ${listItemLabelCSS(css`
    background-color: transparent;
    padding-left: 0;
  `)}
`

export const TreeItemInnerDetail = styled.div``

const dividersCSS = css`
  ${TreeItem} {
    margin-top: 1px;
  }

  ${AccordionDisclosureStyle} {
    margin-top: 1px;

    ${TreeItemInner} {
      margin-top: 0;
    }
  }
`

const treeItemIndent = (
  depth: number,
  indicatorSize: IconSize,
  labelBackgroundOnly: boolean,
  theme: Theme
) => {
  const labelPaddingRemoval = css`
    padding: 0;
  `
  const wrapperIndent = css`
    ${generateIndent(depth + 2, indicatorSize, theme)}
    ${listItemLabelCSS(labelPaddingRemoval)}
  `

  const labelIndent = listItemLabelCSS(
    generateIndent(depth + 2, indicatorSize, theme)
  )

  return labelBackgroundOnly ? wrapperIndent : labelIndent
}

export const TreeStyle = styled.div<TreeStyleProps>`
  color: ${({ theme }) => theme.colors.text5};
  flex-shrink: 2;
  min-width: 0;

  ${ListItem} {
    ${({ iconGap, theme }) =>
      listItemLabelCSS(css`
        > svg,
        > ${StyledIconBase}, > ${IconPlaceholder} {
          /* The -2px gets the icon gap to match design specs */
          margin-right: calc(${theme.space[iconGap]} - 2px);
        }
      `)}
  }

  > ${Accordion} {
    > ${AccordionContent} {
      ${({ border, depth, indicatorSize, theme }) =>
        border && generateTreeBorder(depth, indicatorSize, theme)}
    }

    > ${AccordionDisclosureStyle} {
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
        Tree's padding-right is handled by the internal item
       */
      padding-right: 0;
      ${({ depth, indicatorSize, theme }) =>
        generateIndent(depth, indicatorSize, theme)}
    }
  }

  ${({ dividers }) => dividers && dividersCSS}

  > ${Accordion} > ${AccordionContent} > ${List} {
    > ${ListItem} {
      ${({ depth, indicatorSize, labelBackgroundOnly, theme }) =>
        treeItemIndent(depth, indicatorSize, !!labelBackgroundOnly, theme)}
    }

    > ${TreeBranch} {
      ${({ depth, indicatorSize, theme }) =>
        generateIndent(depth + 2, indicatorSize, theme)}
    }
  }

  /**
    These selectors are to support TreeArtificial
   */
  > ${List} {
    > ${ListItem} {
      ${({ depth, indicatorSize, labelBackgroundOnly, theme }) =>
        treeItemIndent(depth, indicatorSize, !!labelBackgroundOnly, theme)}
    }

    > ${TreeBranch} {
      ${({ depth, indicatorSize, theme }) =>
        generateIndent(depth + 2, indicatorSize, theme)}
    }
  }
`
