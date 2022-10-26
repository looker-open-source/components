import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FC } from 'react';
export interface IntervalItemProps {
    value: number;
    unit: string;
}
interface IntervalParamProps {
    placement?: 'middle' | 'right';
    item: FilterModel;
    suffix?: string;
    onChange: (item: IntervalItemProps) => void;
    field: ILookmlModelExploreField;
}
export declare const Interval: FC<IntervalParamProps>;
export {};
