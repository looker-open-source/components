import type { DensityProp } from '@looker/design-tokens';
import type { Ref } from 'react';
import type { WindowResult } from '../../utils';
import type { WindowedTreeNodeProps, WindowedTreeNodeIDProps } from '../types';
import type { WindowedTreeState } from './windowedTreeReducer';
export declare type UseWindowedTreeNodeProps = DensityProp & {
    ref?: Ref<HTMLUListElement>;
    trees: WindowedTreeNodeProps[];
};
export declare const useWindowedTreeState: ({ trees, }: Pick<UseWindowedTreeNodeProps, 'trees'>) => {
    map: import("../types").ToggleStateMap;
    shownIDs: number[];
    toggleNode: (id: number, isOpen: boolean) => void;
    treesWithIDs: WindowedTreeNodeIDProps[];
};
export declare const useWindowedTree: ({ density, trees, }: UseWindowedTreeNodeProps) => {
    content: JSX.Element | null;
    contextValue: {
        density: import("@looker/design-tokens").DensityRamp;
        toggleNode: (id: number, isOpen: boolean) => void;
        toggleStateMap: import("../types").ToggleStateMap;
    };
    ref: (node: HTMLElement | null) => void;
};
export declare const getWindowedTreeContent: ({ shownIDs, treesWithIDs, start, end, before, after, }: Omit<WindowedTreeState, 'map'> & WindowResult) => JSX.Element | null;
