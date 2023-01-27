/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export interface Viewport {
    name: string;
    styles: {
        height: string;
        width: string;
    };
    type: 'desktop' | 'mobile' | 'tablet' | 'other';
}
export interface ViewportMap {
    [key: string]: Viewport;
}
export declare const VIEWPORT_MAP: ViewportMap;
