/// <reference types="react" />
import type { FilterModel } from '@looker/filter-expressions';
import type { PlacementProps } from '../../../../../../utils/filter_styles';
interface DateRangeParamProps extends PlacementProps {
    item: FilterModel;
    onChange: (id: string, item: Partial<FilterModel>) => void;
    showTime?: boolean;
}
export declare const DateRange: ({ item, onChange, placement, showTime, }: DateRangeParamProps) => JSX.Element;
export {};
