import type { Reducer } from 'react';
import type { ToggleStateMap, WindowedTreeNodeProps, WindowedTreeNodeIDProps } from '../types';
declare type WindowedTreeState = {
    map: ToggleStateMap;
    shownIDs: number[];
    treesWithIDs: WindowedTreeNodeIDProps[];
};
declare type WindowedTreeAction = {
    type: 'OPEN' | 'CLOSE' | 'RESET';
    payload: number | WindowedTreeNodeProps[];
};
export declare const windowedTreeReducer: Reducer<WindowedTreeState, WindowedTreeAction>;
export {};
