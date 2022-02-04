/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import { css } from 'styled-components'
import { Divider } from '../../Divider'

/**
 * Produces a CSS interpolation for a styled collection component (e.g. Menu, Select)
 * that applies spacing to the top of the first item, the bottom of the last,
 * and the top and bottom of each divider.
 * @param ItemComponent the styled item component in the collection, (e.g. MenuItem, ComboboxOption)
 */
export const listPadding = css`
  > :first-child {
    margin-top: ${({ theme }) => theme.space.u2};

    ${Divider} {
      display: none;
    }
  }

  > :last-child {
    margin-bottom: ${({ theme }) => theme.space.u2};

    ${Divider} {
      display: none;
    }
  }
`
