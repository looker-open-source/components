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

import { SpaceRamp } from '@looker/design-tokens'
import { css } from 'styled-components'
import { ListItemDimensions } from '../types'

export const listItemPadding = ({
  px: propsPx,
  py: propsPy,
  theme: { space },
}: {
  accessory?: boolean
  theme: { space: SpaceRamp }
} & Pick<ListItemDimensions, 'px' | 'py'>) => {
  /**
   * The check for 0.375rem gets density = -1 ListItems to the desired 48px min height.
   * Without it, density = -1 ListItems would be at 44px.
   */
  const pt = propsPy === '0.375rem' ? propsPy : space[propsPy]
  const pb = pt
  const pr = space[propsPx]
  const pl = space[propsPx]

  return css`
    padding: ${pt} ${pr} ${pb} ${pl};
  `
}
