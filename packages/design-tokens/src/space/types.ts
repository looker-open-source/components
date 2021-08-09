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

import {
  SizeNone,
  SizeXXXSmall,
  SizeXXSmall,
  SizeXSmall,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  SizeXLarge,
  SizeXXLarge,
  SizeXXXLarge,
  SizeXXXXLarge,
} from '../system/size'

export type SpacingSizes =
  | SizeNone
  | SizeXXXSmall
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | SizeXLarge
  | SizeXXLarge
  | SizeXXXLarge
  | SizeXXXXLarge

export type UnitSizes =
  | 'none'
  | 'u0.5'
  | 'u1'
  | 'u2'
  | 'u3'
  | 'u4'
  | 'u5'
  | 'u6'
  | 'u7'
  | 'u8'
  | 'u9'
  | 'u10'
  | 'u11'
  | 'u12'
  | 'u13'
  | 'u14'
  | 'u15'
  | 'u16'

/**
 * @deprecated Use `spacing` instead
 */
export type ClassicSpaceRamp = Record<SpacingSizes, string>
export type UnitRamp = Record<UnitSizes, string>
export type SpaceRamp = ClassicSpaceRamp & UnitRamp

export type { SpaceProps } from 'styled-system'
