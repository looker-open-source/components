import type { RefObject } from 'react';
declare type UseVirtualArgs = {
    data: any[][];
    scrollContainer: RefObject<HTMLDivElement>;
    defaultRowHeight?: number;
    defaultColumnWidth?: number;
};
declare type StyledProps = {
    as?: 'td' | 'th';
};
/**
 * useVirtual handles the logic related to configuring our virtual scrolling
 * behavior used to improve the UX for large data sets.
 */
export declare const useVirtual: ({ data, scrollContainer, defaultRowHeight, defaultColumnWidth, }: UseVirtualArgs) => {
    virtualRows: import("@tanstack/virtual-core").VirtualItem<unknown>[];
    virtualColumns: import("@tanstack/virtual-core").VirtualItem<unknown>[];
    OffsetTop: ({ as }: StyledProps) => JSX.Element | null;
    OffsetBottom: ({ as }: StyledProps) => JSX.Element | null;
    OffsetLeft: ({ as }: StyledProps) => JSX.Element;
    OffsetRight: ({ as }: StyledProps) => JSX.Element;
};
export {};
