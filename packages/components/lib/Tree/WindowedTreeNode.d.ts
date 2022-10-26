import type { DensityProp } from '@looker/design-tokens';
import React from 'react';
import type { WindowedTreeNodeIDProps } from './types';
export declare type WindowedTreeContextProps = DensityProp & {
    isOpen?: boolean;
    partialRender: boolean;
    toggleNode?: (isOpen: boolean) => void;
};
export declare const WindowedTreeContext: React.Context<WindowedTreeContextProps>;
export declare const WindowedTreeNode: ({ content, firstIDinWindow, id, items, }: Omit<import("./types").WindowedTreeNodeProps, "items"> & {
    content: JSX.Element;
    id: number;
    items?: WindowedTreeNodeIDProps[] | undefined;
} & {
    firstIDinWindow?: number | undefined;
}) => JSX.Element;
