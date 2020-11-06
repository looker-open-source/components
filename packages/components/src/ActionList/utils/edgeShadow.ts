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

import { css } from 'styled-components'

/**
 * This utility function produces a shadow on the outside edge of the DOM element to which it is assigned
 * @param placement which side to place the shadow on
 * @param depth size of the shadow in pixels
 */
export const edgeShadow = (placement: 'left' | 'right' = 'left', depth = 4) => {
  let pseudo = ':after'
  let relativeTo = 'right'
  let shadowReverse = ''

  if (placement === 'right') {
    pseudo = ':before'
    relativeTo = 'left'
    shadowReverse = '-'
  }

  const shadow = `${`${shadowReverse}${depth}px`} 0 ${depth}px -${depth}px rgba( 0, 0, 0, 0.25) inset`

  return css`
    &${pseudo} {
      box-shadow: ${shadow};
      content: ' ';
      height: 100%;
      position: absolute;
      ${`${relativeTo}: -${depth}px;`}
      top: 0;
      width: ${depth}px;
    }
  `
}
