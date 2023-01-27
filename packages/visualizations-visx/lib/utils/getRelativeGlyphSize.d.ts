/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * Set a glyph size based on data point and min/max values.
 * Relevant for Scatter charts.
 *
 * @param data the value to render
 * @param dataMax the max possible value
 * @param dataMin the min possible value
 * @returns a number no greater than MAX_GLYPH_SIZE
 */
export declare const getRelativeGlyphSize: (data: number, dataMin: number, dataMax: number) => number;
