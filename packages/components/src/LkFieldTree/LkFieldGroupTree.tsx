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
import { LkFieldTreeAccordionDisclosure } from './LkFieldTreeAccordionDisclosure'
import { LkFieldTree } from './LkFieldTree'

/**
 * LkFieldGroupTree is typically used to represent a group of Looker fields
 * like a dimension group. If an LkFieldGroupTree's "isOpen" prop is false and its "selected"
 * prop is true, the Tree will have 48px of padding to right align it's selected background
 * with the selected backgrounds of other items.
 */
export const LkFieldGroupTree = styled(LkFieldTree)`
  > ${LkFieldTreeAccordionDisclosure} {
    /* Margin is to set the equivalent of the two icons (info and menu) 48px */
    margin-right: ${({ isOpen, selected }) => {
      const DEFAULT_ICON_BUTTON_SIZE = 24

      return !isOpen && selected
        ? `calc(${DEFAULT_ICON_BUTTON_SIZE}px * 2)`
        : undefined
    }};
  }
`
