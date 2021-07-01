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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import styled from 'styled-components'
import { ListColor } from '../List'

export interface ListItemWrapperProps extends CompatibleHTMLProps<HTMLElement> {
  color: ListColor
}

export const ListItemWrapper = styled.li.attrs(
  ({ role = 'none', color = 'text5' }) => ({ color, role })
)`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  list-style-type: none;
  outline: none;
  text-decoration: none;

  /**
    Styling for items that have nested menus
   */
  &[aria-expanded='true'] {
    background: ${({ theme: { colors } }) => colors.ui1};
  }

  &[disabled] {
    & > * {
      cursor: not-allowed;
    }

    &:hover {
      color: ${({ theme: { colors } }) => colors.text1};
    }
  }
`
