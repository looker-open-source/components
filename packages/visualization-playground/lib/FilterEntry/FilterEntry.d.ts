import type { FC } from 'react';
import type { ILookmlModelExploreField } from '@looker/sdk';
declare type FilterEntryProps = {
    onUpdateFilter: (name: string, expression: string) => void;
    filterField?: ILookmlModelExploreField;
    filterExpression?: string;
    queryId: number;
};
export declare const FilterEntry: FC<FilterEntryProps>;
export {};
