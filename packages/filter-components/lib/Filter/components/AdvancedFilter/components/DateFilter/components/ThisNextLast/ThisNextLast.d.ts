import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FC } from 'react';
interface ThisNextLastProps {
    item: FilterModel;
    field: ILookmlModelExploreField;
    onChange: (id: string, item: Partial<FilterModel>) => void;
}
export declare const ThisNextLast: FC<ThisNextLastProps>;
export {};
