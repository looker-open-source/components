/// <reference types="react" />
import type { TreeModel } from './types';
export declare type TreeProps = {
    tree?: TreeModel[];
    onSectionClick: (updateNode: {
        id: string;
        isOpen: boolean;
    }) => void;
    onFieldClick: (label: string, payload?: any) => void;
};
export declare const TreeFactory: ({ tree, onSectionClick, onFieldClick, ...props }: TreeProps) => JSX.Element;
export declare const Tree: import("styled-components").StyledComponent<({ tree, onSectionClick, onFieldClick, ...props }: TreeProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
