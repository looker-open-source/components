import type { ConfigHelper, SupportedChartTypes } from '../types';
export declare const commonCartesianDefaults: (ConfigHelper<import("../types").CommonCartesianProperties> | ConfigHelper<import("../types").CCartesian>)[];
export declare const commonLineDefaults: ConfigHelper<import("..").CArea | import("..").CLine>[];
export declare const chartConfigByType: Record<keyof SupportedChartTypes | 'default', ConfigHelper<any>[]>;
