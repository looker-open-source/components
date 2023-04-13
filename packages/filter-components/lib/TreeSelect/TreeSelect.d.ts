import React from 'react';
import type { TreeResultsProps } from './TreeResults';
export declare type TreeSelectProps = TreeResultsProps & {
    disabled?: boolean;
    disabledText?: React.ReactNode;
    placeholder?: string;
    label?: string;
    withDropdown?: boolean;
    treeHeight?: string | number;
    selectedSection?: string;
    showSelectedSection?: boolean;
};
export declare const TreeSelect: ({ disabled, disabledText, placeholder, label, tree, shortcutTree, withDropdown, treeHeight, searchInputValue: valueFromProps, selectedSection, showSelectedSection, onSelectedFieldChange, ...flexProps }: TreeSelectProps) => JSX.Element;
