/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import {
  Accordion,
  AccordionContent,
  AccordionDisclosureStyle,
} from '../Accordion'
import { listItemBackgroundColor } from '../List/utils'
import { ListItemStatefulWithHoveredProps } from '../List/types'
import { List, ListItem } from '../List'
import { IconSize } from '../Icon'
import { TreeItem } from './TreeItem'
import { TreeBranch } from './TreeBranch'
import { generateIndent, generateTreeBorder } from './utils'

interface TreeStyleProps extends ListItemStatefulWithHoveredProps {
  border?: boolean
  branchFontWeight?: boolean
  depth: number
  dividers?: boolean
  indicatorSize: IconSize
}

export const TreeItemInner = styled(TreeItem)`
  & > button,
  & > a {
    background-color: transparent;
    padding-left: 0;
  }
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

export const TreeStyle = styled.div<TreeStyleProps>`
  color: ${({ theme }) => theme.colors.text5};
  flex-shrink: 2;
  min-width: 0;

  & > ${Accordion} {
    & > ${AccordionContent} {
      ${({ border, depth, indicatorSize, theme }) =>
        border && generateTreeBorder(depth, indicatorSize, theme)}
    }

    & > ${AccordionDisclosureStyle} {
      ${ListItem} {
        font-weight: ${({ branchFontWeight, theme: { fontWeights } }) =>
          branchFontWeight ? fontWeights.normal : fontWeights.semiBold};
      }

      ${listItemBackgroundColor}
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

  & > ${Accordion} > ${AccordionContent} > ${List} > ${TreeBranch},
  & > ${Accordion} > ${AccordionContent} > ${List} > ${ListItem} > button,
  & > ${Accordion} > ${AccordionContent} > ${List} > ${ListItem} > a {
    ${({ depth, indicatorSize, theme }) =>
      generateIndent(depth + 2, indicatorSize, theme)}
  }

  /**
    These selectors are to support TreeArtifical
   */
  & > ${List} > ${TreeBranch}, & > ${List} > ${ListItem} > button,
  & > ${List} > ${ListItem} > a {
    ${({ depth, indicatorSize, theme }) =>
      generateIndent(depth + 2, indicatorSize, theme)}
  }
`
