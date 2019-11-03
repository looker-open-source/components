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
export interface Palette {
  /** Inverted text color. */
  textInverted: string
  /** Transparent color for theme. */
  transparent: string
  /** White color for theme. */
  white: string

  primary500: string
  primary600: string
  primary700: string

  charcoal000: string
  charcoal100: string
  charcoal200: string
  charcoal300: string
  charcoal400: string
  charcoal500: string
  charcoal600: string
  charcoal700: string
  charcoal800: string
  charcoal900: string

  purple000: string
  purple100: string
  purple200: string
  purple300: string
  purple400: string
  purple500: string
  purple600: string
  purple700: string
  purple800: string
  purple900: string

  blue000: string
  blue100: string
  blue200: string
  blue300: string
  blue400: string
  blue500: string
  blue600: string
  blue700: string
  blue800: string
  blue900: string

  green000: string
  green100: string
  green200: string
  green300: string
  green400: string
  green500: string
  green600: string
  green700: string
  green800: string
  green900: string

  yellow000: string
  yellow100: string
  yellow200: string
  yellow300: string
  yellow400: string
  yellow500: string
  yellow600: string
  yellow700: string
  yellow800: string
  yellow900: string

  red000: string
  red100: string
  red200: string
  red300: string
  red400: string
  red500: string
  red600: string
  red700: string
  red800: string
  red900: string
}
