/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { CCartesian } from '@looker/visualizations-adapters';
export declare type GridProps = {
    config: CCartesian;
};
export declare const Grid: ({ config }: GridProps) => JSX.Element;
