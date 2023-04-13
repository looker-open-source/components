/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Property } from 'csstype';
export interface CursorProps {
    cursor?: Property.Cursor;
}
export declare const cursor: (props: CursorProps) => import("styled-components").FlattenSimpleInterpolation;
