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

export interface TruncateProps {
  /** Truncate text */
  truncate?: boolean
  /** Truncate at a specified number of lines (whole number) */
  truncateLines?: number
}

const textTruncate = (props: TruncateProps) => {
  const { truncateLines } = props

  if (truncateLines && truncateLines > 1) {
    // Despite the vendor prefixes below, this works in all mondern browsers (not IE11)
    return css`
      overflow: hidden;
      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${truncateLines};
      /* stylelint-enable */
    `
  }
  return css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

export const truncate = (props: TruncateProps) =>
  css`
    ${props.truncate || props.truncateLines ? textTruncate : null}
  `
