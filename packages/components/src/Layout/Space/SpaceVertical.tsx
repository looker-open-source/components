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
import { defaultSpaceSize, spaceCSS, SpaceHelperProps } from './Space'

export const SpaceVertical = styled.div<SpaceHelperProps>`
  ${spaceCSS}

  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  flex-shrink: 1;

  && > * {
    margin-top: ${({ theme, gap }) => theme.space[gap || defaultSpaceSize]};
  }

  ${({ theme, reverse }) =>
    reverse
      ? `&& > :last-child { margin-top: ${theme.space.none}; }`
      : `&& > :first-child { margin-top: ${theme.space.none}; }`}
`

SpaceVertical.defaultProps = { width: '100%' }
