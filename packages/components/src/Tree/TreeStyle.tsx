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
import { TreeItem, TreeItemLabel } from './TreeItem'
import { TreeGroupLabel } from './TreeGroup'
import { generateIndent, generateTreeBorder } from './utils'

interface TreeStyleProps {
  border?: boolean
  depth: number
  disabled?: boolean
  hovered?: boolean
  selected?: boolean
  branchFontWeight?: boolean
  dividers?: boolean
}

const dividersCSS = css`
  ${TreeItem} {
    margin-top: 1px;
  }
`

export const TreeItemInner = styled(TreeItem)``

export const TreeStyle = styled.div<TreeStyleProps>`
  color: ${({ theme }) => theme.colors.text5};
  flex-shrink: 2;
  min-width: 0;

  & > ${Accordion} {
    & > ${AccordionContent} {
      ${({ border, depth, theme }) =>
        border && generateTreeBorder(depth, theme)}
    }

    & > ${AccordionDisclosureStyle} {
      background-clip: padding-box;
      background-color: ${({
        disabled,
        hovered,
        selected,
        theme: { colors },
      }) =>
        disabled ? 'none' : selected ? colors.ui2 : hovered && colors.ui1};
      color: ${({ disabled, theme: { colors } }) =>
        disabled ? colors.text1 : colors.text5};
      font-weight: ${({ branchFontWeight, theme: { fontWeights } }) =>
        branchFontWeight ? fontWeights.normal : fontWeights.semiBold};
      padding-right: ${({ theme }) => theme.space.xxsmall};
      ${({ depth, theme }) => generateIndent(depth, theme)}
    }
  }

  ${({ dividers }) => dividers && dividersCSS}

  ${TreeItemInner} {
    border-width: 0;
    height: 100%;

    & > ${TreeItemLabel} {
      background-color: transparent;
      padding-left: ${({ theme }) => theme.space.none};
    }
  }

  ${TreeGroupLabel},
  ${TreeItemLabel},
  & > ${Accordion} > ${AccordionContent} > ${TreeItem} > ${TreeItemLabel} {
    ${({ depth, theme }) => generateIndent(depth + 2, theme)}
  }
`
