/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ResponsiveValue } from 'styled-system';
export declare type Normal = 'normal';
export declare type Medium = 'medium';
export declare type SemiBold = 'semiBold';
export declare type Bold = 'bold';
export declare type FontWeights = Normal | Medium | SemiBold | Bold;
export declare type FontWeightRamp = Record<FontWeights, number>;
export interface FontWeightProps {
    /**
     * Use a @looker/components FontWeights to set weight
     *   normal, medium, semiBold, bold
     */
    fontWeight?: ResponsiveValue<FontWeights>;
}
