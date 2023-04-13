/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Property } from 'csstype';
export interface TextTransformProps {
    textTransform?: Property.TextTransform;
}
export declare const textTransform: (props: TextTransformProps) => import("styled-components").FlattenSimpleInterpolation;
