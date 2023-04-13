/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * Tints or shades a color based on the luminosity of the color
 *
 * Used for generating our UI colors based on the background color
 *
 * If the color has a higher luminosity, a light background for example,
 * the color is shaded, returning a color mixed with black
 *
 * For colors with lower luminosity, dark background colors for example,
 * the colors is tinted,returning a color mixed with white
 *
 * @param mixAmount 0 - 100
 * @param color
 */
export declare const tintOrShadeUiColor: (mixAmount: number, color: string) => string;
