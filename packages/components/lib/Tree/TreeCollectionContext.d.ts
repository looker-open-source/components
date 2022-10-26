/// <reference types="react" />
import type { DensityProp } from '@looker/design-tokens';
import type { ToggleStateMap } from './types';
export declare type TreeCollectionContextProps = DensityProp & {
    /** @private */
    toggleNode?: (id: number, isOpen: boolean) => void;
    /** @private */
    toggleStateMap?: ToggleStateMap;
};
/**
 * Manage the opened / closed state of sub-trees for windowing purposes
 */
export declare const TreeCollectionContext: import("react").Context<TreeCollectionContextProps>;
