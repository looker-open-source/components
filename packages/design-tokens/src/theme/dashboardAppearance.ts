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

import type { SpecifiableTextColors } from '../color/types'

export type TileTitleAlignment = 'left' | 'center' | 'right'

/**
 * DashboardAppearance stores customization settings that control a dashboard's
 * look and feel more specifically than what is provided via the
 * @looker/components theme.
 */
export interface DashboardAppearance {
  /**
   * Toggles the dashboard title
   * @default true
   */
  title: boolean
  /**
   * Toggles the filters section
   * @default true
   */
  filters: boolean
  /**
   * Toggles the last collective runtime
   * @default true
   */
  show_last_collective_runtime: boolean

  /**
   * Default appearance for non-text tiles displayed within this DashboardAppearance
   */
  tiles: TileAppearance
}

export interface TileAppearance extends TileAppearanceColors {
  /**
   * The text alignment of tile titles
   * @default 'center'
   */
  titleAlignment: TileTitleAlignment
}

export interface TileAppearanceColors extends SpecifiableTextColors {
  /**
   * The text color
   * @default theme.colors.background
   */
  text?: string

  /**
   * The background color for tile surface
   * @default theme.colors.background
   */
  background: string
}
