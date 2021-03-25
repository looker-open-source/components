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
import { StyledIconBase } from '@styled-icons/styled-icon'
import { AccordionDisclosureStyle } from '../Accordion/AccordionDisclosure'
import { TextBase } from '../Text/TextBase'
import { ListItemDetail } from '../List/ListItemDetail'
import { List, ListItemLabel } from '../List'

/**
 * `NavList Component` is a variating on our list with the changes:
 *  - text is change color to `keyColor`
 *  - border-radius circular on the right side
 *  - background change color when with the prop `selected` to `keySubtle`
 *
 *
 *  @status: EXPERIMENTAL
 *This component is in active development and may see significant change in it's behavior, interface & presentation. It may also be deprecated without SemVer major version change. _It is not recommended to use this component at this time._`
 */

export const NavList = styled(List)`
  ${AccordionDisclosureStyle}, ${ListItemLabel} {
    border-bottom-right-radius: 5rem;
    border-top-right-radius: 5rem;
    color: ${({ theme }) => theme.colors.key};

    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colors.keySubtle};
    }
  }

  ${ListItemDetail}, ${StyledIconBase}, ${TextBase} {
    color: ${({ theme }) => theme.colors.key};
  }
`
