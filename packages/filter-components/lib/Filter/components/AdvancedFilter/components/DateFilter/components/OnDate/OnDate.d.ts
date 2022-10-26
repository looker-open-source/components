import type { FilterModel } from '@looker/filter-expressions';
import type { FC } from 'react';
interface OnDateParamProps {
    item: FilterModel;
    onChange: (id: string, item: Partial<FilterModel>) => void;
}
export declare const OnDate: FC<OnDateParamProps>;
export {};
