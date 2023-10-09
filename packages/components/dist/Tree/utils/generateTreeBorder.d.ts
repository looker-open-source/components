/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { DensityRamp, Theme } from '@looker/design-tokens';
export declare type TreeBorderProps = {
    border?: boolean;
    color?: string;
    density?: DensityRamp;
    depth?: number;
    theme: Theme;
};
/**
 * Creates a vertical "border" for Tree's content container if border is true
 * Testing note: style rules validated by storyshots
 */
export declare const generateTreeBorder: ({ border, color, density, theme, depth, }: TreeBorderProps) => false | import("styled-components").FlattenSimpleInterpolation;
