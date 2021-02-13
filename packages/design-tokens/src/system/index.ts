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

import { HTMLProps } from 'react'
export {
  border,
  boxShadow,
  color,
  display,
  flexbox,
  fontSize,
  height,
  layout,
  overflow,
  padding,
  position,
  space,
  size,
  typography,
  verticalAlign,
  width,
} from 'styled-system'
export type {
  BackgroundColorProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  DisplayProps,
  FlexboxProps,
  LayoutProps,
  OverflowProps,
  PaddingProps,
  PositionProps,
  SizeProps,
  VerticalAlignProps,
  WidthProps,
} from 'styled-system'

export type CompatibleHTMLProps<T> = Omit<
  HTMLProps<T>,
  'as' | 'color' | 'height' | 'ref' | 'size' | 'width'
>

export { userSelect } from './userSelect'
export type { UserSelectProps } from './userSelect'
export { cursor } from './cursor'
export type { CursorProps } from './cursor'
export { Easings } from './easings'
export { RadiusSizes, Radii } from './radii'
export { Shadows } from './shadows'
export * from './transitions'
export * from './color'
export * from './size'
export * from './space'
export * from './typography'

// Custom Extensions
export * from './reset'
