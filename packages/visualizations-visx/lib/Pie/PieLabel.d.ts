/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import type { SDKRecord } from '@looker/visualizations-adapters';
declare type PieLabelProps = {
    arc: PieArcDatum<SDKRecord>;
    outerRadius: number;
    labelContent: string;
    datumColor: string;
};
export declare const PieLabel: ({ arc, outerRadius, labelContent, datumColor, }: PieLabelProps) => JSX.Element;
export {};
