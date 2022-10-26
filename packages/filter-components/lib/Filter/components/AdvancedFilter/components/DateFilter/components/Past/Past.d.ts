import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FC } from 'react';
interface PastProps {
    item: FilterModel;
    onChange: (id: string, item: Partial<FilterModel>) => void;
    field: ILookmlModelExploreField;
}
export declare const Past: FC<PastProps>;
export {};
