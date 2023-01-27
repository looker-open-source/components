/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { UseDialogBaseProps } from '../Dialog/useDialog';
import type { DrawerSurfaceProps } from './DrawerSurface';
export interface UseDrawerProps extends UseDialogBaseProps, DrawerSurfaceProps {
}
export declare const useDrawer: ({ ...props }: UseDrawerProps) => import("../Dialog/useDialog").UseDialogResponse;
