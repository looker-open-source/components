import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FC } from 'react';
interface BeforeAfterProps {
    item: FilterModel;
    onChange: (id: string, item: Partial<FilterModel>) => void;
    showTime?: boolean;
    field: ILookmlModelExploreField;
    filterType: string;
}
export declare const BeforeAfter: FC<BeforeAfterProps>;
export default BeforeAfter;
