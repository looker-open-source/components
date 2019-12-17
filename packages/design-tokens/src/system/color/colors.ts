/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

/**
 * Defines color values for specific named colors. This is analogous to HTML's
 * predefined set of named colors.
 *
 * ThemePalette is one part of a two part color system, which also includes
 * SemanticColors. The values defined here can be thought of as "color slots"
 * that may be used directly by components, or as part of a SemanticColor group.
 * (The reverse should never be true, that is we should never be defining
 * Palette values by referencing SemanticColor groups.)
 *
 * This idea is borrowed directly from the Office UI Fabric component
 * implementation:
 * https://github.com/officedev/office-ui-fabric-react/wiki/Theming#what-are-theme-slots
 */
export interface Colors {
  /**
   * Default page background
   * Used for: application background
   * @default white
   */
  background: string
  /**
   * TODO
   * Used for: TBD
   * @default charcoal800
   */
  foreground: string
  /**
   * Elements that are positioned over the background
   * Used for: modals, menus, cards, tiles
   * @default white
   */
  surface: string

  /**
   * Primary color applied strategically across the UI
   * Used for: primary action buttons, toggle switches, interactive component accents
   * @default purple400
   */
  accent: string
  /**
   * Primary action color. Inherits accent by default
   * Used for: primary buttons
   * @default purple400
   */
  primary: string

  /**
   * Secondary background / contrast
   * Used for: sidebar background, current menu item background
   * @default charcoal100
   */
  u1: string
  /**
   * Tertiary background / contrast
   * Used for: filter chip background, subtle borders
   * @default charcoal200
   */
  u2: string
  /**
   * Lower contrast / subtle elements
   * Used for: dividers, input border, subtle icons
   * @default charcoal300
   */
  u3: string
  /**
   * Medium Contrast element
   * Used for: high contrast border, icons
   * @default charcoal400
   */
  u4: string
  /**
   * High contrast element
   * Used for: Main navigation background, Sidebar navigation current marker
   * @default charcoal800
   */
  u5: string

  /**
   * Primary Text
   * Used for: Headers, Labels, Dashboard tile titles
   * @default charcoal800
   */
  text1: string
  /**
   * Secondary Text
   * Used for: Headers, Labels, Dashboard tile titles
   * @default charcoal600
   */
  text2: string
  /**
   * Tertiary Text
   * Used for: Sub headers,  Tile text, placeholder text
   * @default charcoal500
   */
  text3: string
  /**
   * Reduced emphasis text
   * Used for: Help text, meta information
   * @default charcoal500
   */
  text4: string

  /**
   * Default input background
   * Text input, select input
   * @default white
   */
  field1: string
  /**
   * Alt input field background
   * Used for: Filter inputs
   * @default charcoal000
   */
  field2: string

  /**
   * Inverse color on high contrast elements
   * Used for: Icons in main nav, Text on primary buttons
   * @default white
   */
  inverse1: string
  /**
   * High contrast surface
   * Used for: Tooltip background
   * @default charcoal800
   */
  inverse2: string

  /**
   * Link text color
   * Used for: Breadcrumb, external link
   * @default blue600
   */
  link: string
  /**
   * Critical intent color
   * Used for: Delete button, error and validation messages
   * @default red500
   */
  critical: string
  /**
   * Warn intent color
   * Used for: Warning banner
   * @default yellow500
   */
  warn: string
  /**
   * Neutral intent color
   * Used for: Breadcrumb, external link
   * @default charcoal400
   */
  neutral: string
  /**
   * Positive intent color
   * Used for: Success banner
   * @default green500
   */
  positive: string
  /**
   * Inform intent color
   * Used for: Info banner
   * @default blue500
   */
  inform: string
}
