/// <reference types="react" />
import type { TreeModel } from '@looker/filter-components';
import type { ILookmlModelExploreField } from '@looker/sdk';
declare type FilterEntryProps = {
    onUpdateFilter: (name: string, expression: string) => void;
    filterField?: ILookmlModelExploreField;
    filterExpression?: string;
    tree: TreeModel[];
};
export declare const FilterEntry: ({ onUpdateFilter, tree, filterField: filterFieldProp, filterExpression: filterExpressionProp, }: FilterEntryProps) => JSX.Element;
export {};
