/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { CLineSeries } from '@looker/visualizations-adapters';
export declare type MarkerProps = {
    series: CLineSeries;
    id: string;
};
export declare const Marker: ({ series, id }: MarkerProps) => JSX.Element;
