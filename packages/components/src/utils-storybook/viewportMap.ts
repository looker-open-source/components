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

import toPairs from 'lodash/toPairs'
import startCase from 'lodash/startCase'
import {
  convertRemToPx,
  BreakpointRamp,
  breakpoints,
} from '@looker/design-tokens'

/*
 * ViewportMap is used to integrate our custom breakpoints into storybook
 */
export interface Viewport {
  name: string
  styles: { height: string; width: string }
  type: 'desktop' | 'mobile' | 'tablet' | 'other'
}
export interface ViewportMap {
  [key: string]: Viewport
}

export const VIEWPORT_MAP: ViewportMap = toPairs(BreakpointRamp).reduce(
  (map, [name, size]) => {
    const sizePx = convertRemToPx(parseInt(size || '', 10))
    const width = `${sizePx}px`

    // for tablets and smaller, the height should be roughly twice the width
    // larger viewports should have a widescreen ratio
    const height =
      sizePx < convertRemToPx(parseInt(breakpoints[2]))
        ? `${Math.round(sizePx * 2.16)}px`
        : `${Math.round(sizePx * 0.55)}px`

    return {
      ...map,
      [name as string]: {
        name: startCase(name),
        styles: { height, width },
        type: name,
      },
    }
  },
  {}
)
