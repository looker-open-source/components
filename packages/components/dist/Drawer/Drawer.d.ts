/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { DialogRenderProp } from '../Dialog/DialogRender';
import type { UseDrawerProps } from './useDrawer';
export interface DrawerProps extends UseDrawerProps {
    children?: DialogRenderProp | ReactNode;
}
export declare const Drawer: ({ children, ...props }: DrawerProps) => JSX.Element;
