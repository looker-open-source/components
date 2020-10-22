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
import { variant, ResponsiveValue } from 'styled-system'
import { SurfaceBase, surfaceTransition } from '../Dialog/SurfaceBase'
import { DialogSizeRamp, dialogWidth } from '../Dialog/dialogWidth'

export type DrawerPlacements = 'left' | 'right'

export interface DrawerSurfaceProps {
  /**
   * Specify the edge to attach the Drawer surface to.
   * COMING SOON: 'left' | 'top' | 'bottom'
   * @default 'right'
   */
  placement?: DrawerPlacements

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of
   * the specified width or the viewport width. Default / `auto` will cause
   * the Surface to auto-size to its content.
   * @default 'medium'
   */
  width?: ResponsiveValue<DialogSizeRamp | string>
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const placement = variant({
  prop: 'placement',
  variants: {
    left: {
      boxShadow: '-18px 0 18px -18px rgba(0, 0, 0, 0.12)',
      left: 0,
    },
    right: {
      boxShadow: '-18px 0 18px -18px rgba(0, 0, 0, 0.12)',
      right: 0,
    },
  },
})
/* eslint-enable sort-keys-fix/sort-keys-fix */

export const DrawerSurface = styled(SurfaceBase)<DrawerSurfaceProps>`
  /* Shadow designed to match theme.shadows[3] but with a single left-side shadow */
  height: 100%;
  position: absolute;
  transition: transform ${surfaceTransition}, opacity ${surfaceTransition};

  ${placement}
  ${dialogWidth}

  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateX(
      ${({ placement }) => (placement === 'left' ? '-100%' : '100%')}
    );
  }
`

DrawerSurface.defaultProps = {
  placement: 'right',
  width: 'small',
}
