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

import styled from 'styled-components'
import { maxTextWidth } from './styles'

export const Blockquote = styled.blockquote`
  font-weight: 300;
  max-width: ${maxTextWidth};
  ${({ theme: { fontSizes, lineHeights, space, colors, radii } }) => `
    font-size: ${fontSizes.large};
    line-height: ${lineHeights.medium};
    margin: 0 0 ${lineHeights.medium} ${lineHeights.medium};
    padding: 0 0 0 ${space.medium};
    border-left: 5px solid ${colors.key};
    color: ${colors.keyInteractive};
    border-radius: ${radii.medium};
  `}
  strong {
    font-weight: 600;
  }
`
