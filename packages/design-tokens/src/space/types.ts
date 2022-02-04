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

import type {
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
import type {
  Unit0,
  Unit05,
  Unit1,
  Unit10,
  Unit11,
  Unit12,
  Unit13,
  Unit14,
  Unit15,
  Unit16,
  Unit2,
  Unit3,
  Unit4,
  Unit5,
  Unit6,
  Unit7,
  Unit8,
  Unit9,
} from './units'

/**
 * @deprecated - Use `UnitSizes` instead
 */
export type LegacySpacingSizes =
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
  | Unit0
  | Unit05
  | Unit1
  | Unit2
  | Unit3
  | Unit4
  | Unit5
  | Unit6
  | Unit7
  | Unit8
  | Unit9
  | Unit10
  | Unit11
  | Unit12
  | Unit13
  | Unit14
  | Unit15
  | Unit16

export type SpacingSizes = LegacySpacingSizes | UnitSizes

/**
 * @deprecated Use `spacing` instead
 */
export type LegacySpaceRamp = Record<LegacySpacingSizes, string>
export type UnitRamp = Record<UnitSizes, string>
export type SpaceRamp = Record<SpacingSizes, string>
