import type { DensityProp } from '@looker/design-tokens';
import type { Ref } from 'react';
import type { WindowedTreeNodeProps } from '../types';
export declare type UseWindowedTreeNodeProps = DensityProp & {
    ref?: Ref<HTMLUListElement>;
    trees: WindowedTreeNodeProps[];
};
export declare const useWindowedTree: ({ density, trees, }: UseWindowedTreeNodeProps) => {
    content: JSX.Element | null;
    contextValue: {
        density: import("@looker/design-tokens").DensityRamp | undefined;
        toggleNode: (id: number, isOpen: boolean) => void;
        toggleStateMap: import("../types").ToggleStateMap;
    };
    ref: (node: HTMLElement | null) => void;
};
