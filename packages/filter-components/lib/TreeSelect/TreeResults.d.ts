/// <reference types="react" />
import type { TreeModel } from './types';
export declare type TreeResultsProps = {
    searchInputValue: string;
    tree?: TreeModel[];
    shortcutTree?: TreeModel[];
    onSelectedFieldChange: (fieldData: TreeModel['payload']) => void;
};
/**
 * TreeSelect without an associated search field.
 * This may be used in composition with a search field.
 * It may also be rendered in a popover.
 */
export declare const TreeResults: ({ searchInputValue, tree, shortcutTree, onSelectedFieldChange, }: TreeResultsProps) => JSX.Element;
