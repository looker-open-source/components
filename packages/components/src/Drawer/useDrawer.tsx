/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { UseDialogBaseProps } from '../Dialog/useDialog'
import { useDialog } from '../Dialog/useDialog'
import type { DrawerSurfaceProps } from './DrawerSurface'
import { DrawerSurface } from './DrawerSurface'

export interface UseDrawerProps
  extends UseDialogBaseProps,
    DrawerSurfaceProps {}

export const useDrawer = ({ ...props }: UseDrawerProps) =>
  useDialog({ Surface: DrawerSurface, ...props })
