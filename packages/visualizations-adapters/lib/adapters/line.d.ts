/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { VisWrapperProps } from '../VisWrapper';
import type { CommonCartesianProperties, Fields, SDKRecord, CSeriesBasic, CSeriesPoints, CSeriesLine, LinearPositions, SupportedChartTypes, ChartLayoutProps } from '../types';
export declare type CLineSeries = Partial<CSeriesBasic & CSeriesPoints & CSeriesLine>;
export declare type CLineBase = {
    positioning?: LinearPositions;
    series?: CLineSeries[] | {
        [key: string]: CLineSeries;
    };
    render_null_values?: boolean;
} & Omit<CommonCartesianProperties, 'series'>;
export declare type CLine = {
    type?: SupportedChartTypes['line'];
} & CLineBase;
export declare type LineProps = VisWrapperProps & ChartLayoutProps & {
    data: SDKRecord[];
    fields: Fields;
    config: CLine;
};
