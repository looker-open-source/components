/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ResponsiveValue } from 'styled-system'

type Body = 'body'
type Brand = 'brand'
type Code = 'code'

export type FontFamilies = Body | Brand | Code

export type FontFamilyChoices = Record<FontFamilies, string>
export type FontFamilyFallbacks = Record<FontFamilies, string[]>

export const fontFamilies: Array<keyof FontFamilyChoices> = [
  'body',
  'brand',
  'code',
]

export interface FontFamilyProps {
  fontFamily?: ResponsiveValue<FontFamilies>
}
