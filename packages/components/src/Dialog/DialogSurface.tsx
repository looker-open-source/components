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
import { ResponsiveValue, variant, height, width } from 'styled-system'
import { theme } from '@looker/design-tokens'
import {
  SizeXSmall,
  SizeXXSmall,
  SizeSmall,
  SizeMedium,
  SizeLarge,
} from '@looker/design-tokens/src/system'
import { SurfaceBase, surfaceTransition } from '../Dialog/SurfaceBase'

// 480, 768, 1024, 1200, 1440
// 37.5rem = 600px

export type DialogPlacements = 'center' | 'cover' | 'top'

export type DialogSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
export type DialogSizeRamp = Record<DialogSizes, string>

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const dialogSizes: DialogSizeRamp = {
  xxsmall: '16rem',
  xsmall: '21rem',
  small: '28rem',
  medium: '30rem',
  large: '40rem',
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export interface DialogSurfaceProps {
  /**
   * Determines how Surface is positioned in the the viewport.
   * `center` - surface is centered horizontally and vertically above mobile breakpoint.
   *    Mobile: positioned at top of window and covers entire width.
   *    Width: defaults to 100% in mobile breakpoint and 37.5rem above that unless otherwise specified
   *    Height: fits content unless it's explicitly specified with `height` prop
   * `cover` - positioned to cover nearly the entire window.
   *    Mobile & tablet: cover the entire window.
   * `top` - vertically positioned near the top of edge of the window, horizontally centered.
   *    Mobile: identical to `default` placement
   *    Height: grows to fit content. Total height will keep surface a small amount from top and bottom
   *      of viewport
   *    Width: default 37.5rem above mobile breakpoint
   * @default 'center'
   */
  placement?: DialogPlacements

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of
   * the specified width or the viewport width. Default / `auto` will cause
   * the Surface to auto-size to its content.
   * @default auto
   */
  width?: ResponsiveValue<DialogSizeRamp | string>

  /**
   * Explicitly specifying a minHeight will set the Surface to be the lesser of
   * the specified height or the viewport height. Default / `auto` will cause
   * the Surface to auto-size to its content.
   * @default auto
   */
  minHeight?: ResponsiveValue<string>
}

const { space } = theme
const gapSpace = 'xxlarge'
const coverDimension = `calc(100% - ${space[gapSpace]} * 2)`

const placement = variant({
  prop: 'placement',
  variants: {
    center: {
      alignSelf: ['flex-start', 'center'],
      maxHeight: ['100%', coverDimension],
      width: ['100%', dialogSizes.large],
    },
    cover: {
      height: ['100%', '100%', coverDimension],
      width: ['100%', '100%', coverDimension],
    },
    top: {
      alignSelf: 'flex-start',
      maxHeight: ['100%', `calc(100% - ${space[gapSpace]})`],
      mt: ['none', gapSpace],
      width: ['100%', dialogSizes.large],
    },
  },
})

export const DialogSurface = styled(SurfaceBase)<DialogSurfaceProps>`
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows[5]};
  position: relative;
  transition: transform ${surfaceTransition}, opacity ${surfaceTransition};

  ${placement}
  ${height}
  /* TODO - implement ResponsiveValue<DialogSizeRamp | string> */
  ${width}

  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateY(100%);
  }
`

DialogSurface.defaultProps = {
  placement: 'center',
}
