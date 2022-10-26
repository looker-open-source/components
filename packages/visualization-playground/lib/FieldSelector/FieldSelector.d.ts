/// <reference types="react" />
import type { ILookmlModelExploreField } from '@looker/sdk';
export declare type FieldGroups = {
    [group: string]: ILookmlModelExploreField[];
};
export declare type FieldSelectorProps = {
    current?: ILookmlModelExploreField;
    groups: FieldGroups;
    onChange: (field: ILookmlModelExploreField) => void;
};
export declare const FieldSelector: ({ groups, current, onChange, }: FieldSelectorProps) => JSX.Element;
