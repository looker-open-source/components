import type { FilterModel } from '@looker/filter-expressions';
import type { FC } from 'react';
import type { PlacementProps } from '../../../../../../utils/filter_styles';
interface DateRangeParamProps extends PlacementProps {
    item: FilterModel;
    onChange: (id: string, item: Partial<FilterModel>) => void;
    showTime?: boolean;
}
export declare const DateRange: FC<DateRangeParamProps>;
export {};
