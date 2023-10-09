/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { ReactNode } from 'react';
import type { UseDelayedStateReturn } from '../utils';
export declare type CloseParentMenuProps = {
    closeParentMenu?: () => void;
};
export declare type NestedMenuContextProps = UseDelayedStateReturn<string> & CloseParentMenuProps;
export declare const NestedMenuContext: React.Context<NestedMenuContextProps>;
export declare const NestedMenuProvider: ({ children, closeParentMenu, }: CloseParentMenuProps & {
    children?: ReactNode;
}) => JSX.Element;
