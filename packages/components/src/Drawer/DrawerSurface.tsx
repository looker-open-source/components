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

import styled from 'styled-components'
import { variant, ResponsiveValue, system } from '@looker/design-tokens'
import { SurfaceBase, surfaceTransition } from '../Dialog/SurfaceBase'
import { DialogSizeRamp, dialogSizes } from '../Dialog/dialogWidth'
import { AsideSizeRamp, asideSizes } from '../Layout/Semantics/Aside/asideWidth'

export type DrawerPlacements = 'left' | 'right'
export type DialogDrawerWidth = ResponsiveValue<
  DialogSizeRamp | AsideSizeRamp | string
>

export interface DrawerSurfaceProps {
  /**
   * Specify the edge to attach the Drawer surface to - `left` or `right`
   * @default right
   */
  placement?: DrawerPlacements

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of
   * the specified width or the viewport width.
   * @default medium
   */
  width?: DialogDrawerWidth
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

const drawerWidth = () => {
  const drawerSizes = {
    ...asideSizes,
    ...dialogSizes,
  }
  return system({
    width: {
      defaultScale: drawerSizes,
      property: 'width',
      scale: 'drawerSizes',
    },
  })
}

export const DrawerSurface = styled(SurfaceBase).attrs<DrawerSurfaceProps>(
  ({ placement = 'right', width = 'small' }) => ({
    placement,
    width,
  })
)<DrawerSurfaceProps>`
  /* Shadow designed to match theme.elevations.plus3 but with a single left-side shadow */
  height: 100%;
  position: absolute;
  transition: transform ${surfaceTransition}, opacity ${surfaceTransition};

  ${placement}
  ${drawerWidth}

  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateX(
      ${({ placement }) => (placement === 'left' ? '-100%' : '100%')}
    );
  }
`
