import type { WindowedTreeNodeIDProps } from '../types';
export declare const getWindowedTreeNodeFilterer: (filteredList: WindowedTreeNodeIDProps[], firstIDinWindow: number, lastIDinWindow: number) => (node: WindowedTreeNodeIDProps, index: number, list: WindowedTreeNodeIDProps[]) => boolean;
