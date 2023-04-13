/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FontFamilyChoices } from '../../system';
import type { FontFamilyFallbacks } from '../../system/typography/font_families';
export declare const generateFontFamilies: (defaultFonts: FontFamilyChoices, fallbacks: FontFamilyFallbacks, customFonts?: Partial<FontFamilyChoices> | undefined) => FontFamilyChoices;
