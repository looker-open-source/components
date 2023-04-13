/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Theme } from '../../theme';
interface GoogleFontSpecification {
    family: string;
    /**
     * Include italic faces
     * @default true
     */
    italic?: boolean;
    weights: number[];
}
export declare const googleFontParam: ({ family, italic, ...font }: GoogleFontSpecification) => string;
export declare const googleFontUrl: (theme: Theme) => string;
export {};
