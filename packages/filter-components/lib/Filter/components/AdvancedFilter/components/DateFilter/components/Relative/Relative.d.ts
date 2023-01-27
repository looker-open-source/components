/// <reference types="react" />
import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
interface RelativeParamProps {
    item: FilterModel;
    field: ILookmlModelExploreField;
    onChange: (id: string, item: Partial<FilterModel>) => void;
}
export declare const Relative: ({ item: { id, intervalType, startInterval, endInterval }, onChange, field, }: RelativeParamProps) => JSX.Element;
export {};
