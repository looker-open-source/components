/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FontFamilyChoices, FontFamilyFallbacks } from '../../system'
import { generateFontFamilies } from '../../utils/typography'

const sansSerifFontFallbacks = [
  "'Noto Sans'",
  "'Noto Sans JP'",
  "'Noto Sans CJK KR'",
  "'Noto Sans Arabic UI'",
  "'Noto Sans Devanagari UI'",
  "'Noto Sans Hebrew'",
  "'Noto Sans Thai UI'",
  'Helvetica',
  'Arial',
  'sans-serif',
]

export const defaultFontFallbacks: FontFamilyFallbacks = {
  body: sansSerifFontFallbacks,
  brand: sansSerifFontFallbacks,
  code: [
    'Monaco',
    'Menlo',
    "'Ubuntu Mono'",
    'Consolas',
    "'source-code-pro'",
    'monospace',
  ],
}

export const defaultFonts: FontFamilyChoices = {
  body: 'Roboto',
  brand: 'Roboto',
  code: "'Roboto Mono'",
}

export const fontFamilies = generateFontFamilies(
  defaultFonts,
  defaultFontFallbacks
)
