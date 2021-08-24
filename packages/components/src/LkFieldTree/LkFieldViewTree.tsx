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
import { LkFieldTreeAccordionContent } from './LkFieldTreeAccordionContent'
import { LkFieldTree } from '.'

/**
 * LkFieldViewTree is used to represent a Looker View and is expected to be
 * at the 0th-depth (i.e. the top-level) of an LkField composition.
 *
 * It comes with padding overrides for additional spacing and a 1px border bottom.
 */
export const LkFieldViewTree = styled(LkFieldTree)`
  > ${LkFieldTreeAccordionContent} {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  padding: 0.25rem;
`
