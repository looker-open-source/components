/// <reference types="react" />
import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
interface BeforeAfterProps {
    item: FilterModel;
    onChange: (id: string, item: Partial<FilterModel>) => void;
    showTime?: boolean;
    field: ILookmlModelExploreField;
    filterType: string;
}
export declare const BeforeAfter: ({ item, onChange, showTime, field, }: BeforeAfterProps) => JSX.Element;
export default BeforeAfter;
