/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Dispatch, SetStateAction } from 'react';
import type { CArea, CBar, CColumn, CLine, CScatter, CSparkline, CAll } from '@looker/visualizations-adapters';
/**
 * A list of relevant charts that access this configuration
 */
declare type SupportedChartConfig = CArea | CBar | CColumn | CLine | CScatter | CSparkline;
export declare type YAxisProps = {
    config: SupportedChartConfig;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};
export declare const YAxis: (props: YAxisProps) => JSX.Element | null;
export {};
