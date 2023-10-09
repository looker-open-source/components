/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { ProgressCircularSizes } from './size';
interface DeterminateProgressProps {
    size: ProgressCircularSizes;
    progress?: number;
}
export declare const DeterminateProgress: ({ size, progress, }: DeterminateProgressProps) => JSX.Element;
export {};
