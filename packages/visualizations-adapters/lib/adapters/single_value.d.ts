/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { VisWrapperProps } from '../VisWrapper';
import type { CSeriesBasic, SupportedChartTypes, SDKRecord, Fields, ChartLayoutProps } from '../types';
export declare type CSingleValueSeries = Omit<CSeriesBasic, 'visible'>;
export declare type CSingleValue = {
    type?: SupportedChartTypes['single_value'];
    series?: CSingleValueSeries[] | {
        [key: string]: CSingleValueSeries;
    };
};
export declare type SingleValueProps = VisWrapperProps & ChartLayoutProps & {
    data: SDKRecord[];
    config: CSingleValue;
    fields: Fields;
};
