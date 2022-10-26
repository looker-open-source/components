import type { RefObject } from 'react';
import type { SDKRecord } from '@looker/visualizations-adapters';
declare type UseVirtualArgs = {
    data: SDKRecord[];
    scrollContainer: RefObject<HTMLDivElement>;
    defaultRowHeight?: number;
};
/**
 * useVirtual handles the logic related to configuring our virtual scrolling
 * behavior used to improve the UX for large data sets.
 */
export declare const useVirtual: ({ data, scrollContainer, defaultRowHeight, }: UseVirtualArgs) => {
    virtualRows: import("@tanstack/virtual-core").VirtualItem<unknown>[];
    OffsetTop: () => JSX.Element | null;
    OffsetBottom: () => JSX.Element | null;
};
export {};
