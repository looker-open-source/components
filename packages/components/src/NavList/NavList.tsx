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

import styled from 'styled-components'
import { TextBase } from '../Text/TextBase'
import { Truncate } from '../Truncate'
import { List } from '../List'
import {
  ListItem,
  ListItemContent,
  ListItemDetail,
  ListItemIcon,
} from '../ListItem'
import { NavTreeDisclosure } from '../NavTree'

/**
 * `NavList` is a variation of `List` that expects to wrap around a composition of `ListItem`s, `NavTree`s and `NavTreeItem`s
 *   - `ListItem`, `NavTree` and `NavTreeItem`  border-radius circular on the right side
 *   - `ListItem`, `NavTree` and `NavTreeItem` selected or "active"
 *     - text color is `theme.colors.key`
 *     - background color is `keySubtle`
 *   - `ListItem` at the root are indented to align properly with `Tree`(s) at the root as well
 */
export const NavList = styled(List).attrs(({ color = 'key' }) => ({ color }))`
  ${NavTreeDisclosure}, ${ListItemContent} {
    border-bottom-right-radius: 5rem;
    border-top-right-radius: 5rem;

    &[aria-selected='true'] {
      ${ListItemDetail},
      ${TextBase},
      ${Truncate},
      ${ListItemIcon} svg {
        color: ${({ theme }) => theme.colors.key};
      }
    }
  }

  ${ListItemIcon} {
    svg {
      transition: color
        ${({ theme }) => `${theme.transitions.quick}ms ${theme.easings.ease}`};
    }
  }

  & > ${ListItem} {
    ${ListItemContent} {
      padding-left: ${({ theme }) => `${theme.sizes.medium}`};
    }
  }
`
