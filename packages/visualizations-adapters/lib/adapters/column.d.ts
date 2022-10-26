import type { VisWrapperProps } from '../VisWrapper';
import type { BarBaseOptions } from './bar';
import type { ChartLayoutProps, CommonCartesianProperties, SupportedChartTypes, SDKRecord, Fields } from '../types';
export declare type ColumnProps = VisWrapperProps & ChartLayoutProps & {
    data: SDKRecord[];
    config: CColumn;
    fields: Fields;
};
export declare type CColumn = {
    type?: SupportedChartTypes['column'];
} & BarBaseOptions & CommonCartesianProperties;
