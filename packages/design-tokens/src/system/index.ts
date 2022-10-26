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

import type { HTMLProps } from 'react'
import type { SemanticBorderProps } from '../utils'

export {
  borderRadius,
  boxShadow,
  backgroundPosition,
  color,
  display,
  flexbox,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontStyle,
  height,
  layout,
  maxWidth,
  minWidth,
  overflow,
  padding,
  position,
  space,
  size,
  system,
  textAlign,
  typography,
  variant,
  verticalAlign,
  width,
} from 'styled-system'

export { borderHelper as border } from '../utils'

export type BorderProps = SemanticBorderProps & {
  /**
   * @deprecated - not used by borderHelper which is exported as `border` and can be deleted. Once all usage has been deleted then this prop can be removed from here.
   */
  borderColor?: string
}

export type {
  BackgroundColorProps,
  BackgroundPositionProps,
  BorderRadiusProps,
  BoxShadowProps,
  DisplayProps,
  FlexboxProps,
  HeightProps,
  LayoutProps,
  MaxHeightProps,
  MaxWidthProps,
  MinWidthProps,
  OpacityProps,
  OverflowProps,
  PaddingProps,
  PositionProps,
  ResponsiveValue,
  SizeProps,
  VerticalAlignProps,
  WidthProps,
} from 'styled-system'

export type CompatibleHTMLProps<T> = Omit<
  HTMLProps<T>,
  'as' | 'color' | 'height' | 'label' | 'ref' | 'size' | 'width'
>

export { userSelect } from './userSelect'
export type { UserSelectProps } from './userSelect'

export type { DensityProp, DensityRamp } from './density'

export { cursor } from './cursor'
export type { CursorProps } from './cursor'
export { Easings } from './easings'
export { RadiusSizes, Radii } from './radii'
export { Shadows } from './shadows'
export * from './transitions'
export * from './size'
export * from './typography'

// Custom Extensions
export * from './reset'
