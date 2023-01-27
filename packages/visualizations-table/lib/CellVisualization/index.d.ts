/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
declare type CellVisualizationProps = {
    min: number;
    max: number;
    value: number;
    color?: string;
};
export declare const CellVisualization: (props: CellVisualizationProps) => JSX.Element | null;
export {};
