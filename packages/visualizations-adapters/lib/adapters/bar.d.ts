/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { VisWrapperProps } from '../VisWrapper';
import type { ChartLayoutProps, SDKRecord, CommonCartesianProperties, BarPositions, SupportedChartTypes, Fields } from '../types';
export declare type BarProps = VisWrapperProps & ChartLayoutProps & {
    data: SDKRecord[];
    config: CBar;
    fields: Fields;
};
export declare type BarBaseOptions = {
    positioning?: BarPositions;
};
export declare type CBar = {
    type?: SupportedChartTypes['bar'];
} & BarBaseOptions & CommonCartesianProperties;
