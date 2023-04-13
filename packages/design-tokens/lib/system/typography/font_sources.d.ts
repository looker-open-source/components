/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * Specify location to load the specific fonts from
 *
 * Supports loading via @font-face or @import
 */
export interface FontSource {
    /**
     * Specify font face that can be loaded via the related URL via a @font-face rule
     * Example: 'verdana'
     */
    face?: string;
    /**
     * Specify URL to load font from. If `face` is not specified `@import` style behavior
     * will be used (e.g.: Google Fonts URL includes @font-face rules within response)
     */
    url: string;
}
/**
 * Collection of `FontSource` specifications
 */
export declare type FontSources = FontSource[];
