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

import type { Keyframes } from 'styled-components'
import styled, { css, keyframes } from 'styled-components'
import type { ResponsiveValue } from '@looker/design-tokens'
import { height, theme } from '@looker/design-tokens'
import { SurfaceBase, surfaceTransition } from '../Dialog/SurfaceBase'
import type { DialogDrawerWidth } from '../Drawer/DrawerSurface'
import { dialogWidth } from './dialogWidth'

export type DialogPlacementCenter = 'center'
export type DialogPlacementCover = 'cover'
export type DialogPlacementTop = 'top'

export type DialogPlacements =
  | DialogPlacementCenter
  | DialogPlacementCover
  | DialogPlacementTop

export const dialogPlacements = ['center', 'cover', 'top']

export interface DialogSurfaceProps {
  /**
   * Determines how Surface is positioned in the the viewport.
   * `center` - surface is centered horizontally and vertically above mobile breakpoint.
   *    mobile: positioned at top of window and covers entire width.
   *    width: defaults to 100% in mobile breakpoint and 37.5rem above that unless otherwise specified
   *    height: fits content unless it's explicitly specified with `height` prop
   * `cover` - positioned to cover nearly the entire window.
   *    mobile & tablet: cover the entire window.
   * `top` - vertically positioned near the top of edge of the window, horizontally centered.
   *    mobile: identical to `default` placement
   *    height: grows to fit content. Total height will keep surface a small amount from top and bottom
   *      of viewport
   *    width: default `medium` above mobile breakpoint
   * @default center
   */
  placement?: DialogPlacements

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of
   * the specified width or the viewport width.
   */
  width?: DialogDrawerWidth

  /**
   * Explicitly specifying a height will set the Surface to be the
   * the specified height but no greater than the viewport height.
   * Default will cause the Surface to auto-size to its content, again
   * no larger than the viewport height.
   */
  height?: ResponsiveValue<string>
}

const { space, breakpoints } = theme
const gapSpace = 'xxlarge'
const coverDimension = `calc(100% - ${space[gapSpace]} * 2)`

const placements = {
  center: css<DialogSurfaceProps>`
    align-self: flex-start;
    max-height: 100%;

    @media screen and (min-width: ${breakpoints[0]}) {
      align-self: center;
      max-height: ${coverDimension};
    }
  `,
  cover: css<DialogSurfaceProps>`
    height: 100%;

    @media screen and (min-width: ${breakpoints[0]}) {
      height: ${coverDimension};
      width: ${coverDimension};
    }

    @media screen and (min-width: ${breakpoints[1]}) {
      height: ${coverDimension};
      width: ${coverDimension};
    }
  `,
  top: css<DialogSurfaceProps>`
    align-self: flex-start;
    margin-top: 0;
    max-height: 100%;

    @media screen and (min-width: ${breakpoints[0]}) {
      margin-top: ${({ theme }) => theme.space[gapSpace]};
      max-height: ${coverDimension};
    }
  `,
}

const defaultDialogSurfacePlacement = 'center'

const dialogIn: Keyframes = keyframes`
from {
  opacity: 0.01;
  transform: translateY(100%);
}
to {
  opacity: 1;
  transform: translate(0);
}
`
const dialogOut: Keyframes = keyframes`
from {
  opacity: 1;
  transform: translate(0);
}
to {
  opacity: 0.01;
  transform: translateY(100%);
}
`

export const DialogSurface = styled(SurfaceBase).attrs<DialogSurfaceProps>(
  ({ placement = defaultDialogSurfacePlacement, width = 'medium' }) => ({
    placement,
    width,
  })
)<DialogSurfaceProps>`
  box-shadow: ${({ theme }) => theme.elevations.plus3};
  position: relative;

  ${dialogWidth}
  ${({ placement }) => placements[placement || defaultDialogSurfacePlacement]}
  ${height}

  @media screen and (min-width: ${breakpoints[0]}) {
    border-radius: ${({ theme }) => theme.radii.medium};
  }

  &.entering {
    animation: ${dialogIn} ${surfaceTransition};
  }
  &.exiting {
    animation: ${dialogOut} ${surfaceTransition};
  }
`
