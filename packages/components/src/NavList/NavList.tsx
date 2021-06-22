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
import { AccordionDisclosureStyle } from '../Accordion/AccordionDisclosure'
import { TextBase } from '../Text/TextBase'
import { ListItemDetail } from '../List/ListItemDetail'
import { List, ListItem, ListItemLabel } from '../List'
import { ListItemIcon } from '../List/ListItemIcon'

/**
 * `NavList` is a variation of `List`
 *   - `ListItem`  border-radius circular on the right side
 *   - `ListItem` selected or "active"
 *     - text color is `theme.colors.key`
 *     - background color is `keySubtle`
 *   - `ListItem` at the root are indented to align properly with `Tree`(s) at the root as well
 *
 *
 * @status: EXPERIMENTAL
 * This component is in active development and may see significant change in
 * it's behavior, interface & presentation. It may also be deprecated without
 * SemVer major version change. _It is not recommended to use this component
 * at this time.
 */
export const NavList = styled(List).attrs(({ color = 'key' }) => ({ color }))`
  ${AccordionDisclosureStyle}, ${ListItemLabel} {
    border-bottom-right-radius: 5rem;
    border-top-right-radius: 5rem;

    &[aria-selected='true'] {
      ${ListItemDetail},
      ${TextBase},
      ${ListItemIcon} svg {
        color: ${({ theme }) => theme.colors.key};
      }
    }
  }
  & > ${ListItem} {
    ${ListItemLabel} {
      padding-left: ${({ theme }) => `${theme.sizes.medium}`};
    }
  }
`
