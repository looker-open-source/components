/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/* istanbul ignore file */
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
