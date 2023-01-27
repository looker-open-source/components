/// <reference types="react" />
import type { TreeModel } from '@looker/filter-components';
import type { ILookmlModelExploreField } from '@looker/sdk';
export declare type FieldSelectorProps = {
    current?: ILookmlModelExploreField;
    tree: TreeModel[];
    onChange: (field: ILookmlModelExploreField) => void;
};
export declare const FieldSelector: ({ tree, current, onChange, }: FieldSelectorProps) => JSX.Element;
