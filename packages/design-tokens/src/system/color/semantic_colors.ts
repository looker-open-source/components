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

export interface SemanticColor {
  /** The base color for a named color set. */
  main: string
  /** Usually a tint of the main color, used in cases like visited links or pressed buttons. */
  light: string
  /** Usually an even lighter tint of the main color. */
  lighter: string
  /** Base color for links in a color group. */
  linkColor: string
  /** Usually a dark tint of the main color, used to indicate interactivity such as button hover. */
  dark: string
  /** Usually an even darker tint of the main color, used to indicate an action like button press. */
  darker: string
  /** Primary border color for a semantic color group. */
  borderColor: string
  /** Base text color for a semantic color group. */
  text: string
  /** Alternative text color */
  altText: string
}

/**
 * Defines color values for specific color groups.
 *
 * SemanticColors is one part of a two part color system, which also includes
 * Palette. The values defined here can be thought of as color groups that may
 * be used directly by components.
 *
 * Each SemanticColor should define the full set of possible color values, such
 * as main, linkColor, etc so that a color objects can be interchanged without
 * error across components.
 *
 * Some components accept entire color groups to define their appearance.
 * <Button/> is a good example of this.
 *
 * This idea is borrowed directly from the Office UI Fabric component
 * implementation:
 * https://github.com/officedev/office-ui-fabric-react/wiki/Theming#what-are-theme-slots
 */
export interface SemanticColors {
  /** Colors used for primary actions. */
  primary: SemanticColor
  /** Colors used for secondary actions. */
  secondary: SemanticColor
  /** Colors used for dangerous actions. */
  danger: SemanticColor
  /** Colors used for neutral actions. */
  neutral: SemanticColor
}
