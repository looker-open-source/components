/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Fields, SupportedChartTypes, RawApiConfigResponse, SDKRecord } from './';
export declare type KnownChartTypes = keyof SupportedChartTypes | RawApiConfigResponse['type'];
export interface ConfigHelperArgs<ChartConfig> {
    config: Omit<ChartConfig, 'type'> & Partial<Omit<RawApiConfigResponse, 'type'>> & {
        type?: KnownChartTypes;
    };
    fields: Fields;
    data: SDKRecord[];
}
export declare type ConfigHelper<ChartConfig> = (args: ConfigHelperArgs<ChartConfig>) => ConfigHelperArgs<ChartConfig>;
