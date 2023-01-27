/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React from 'react'
import type { DialogRenderProp } from '../Dialog/DialogRender'
import { DialogRender } from '../Dialog/DialogRender'
import type { UseDrawerProps } from './useDrawer'
import { useDrawer } from './useDrawer'

export interface DrawerProps extends UseDrawerProps {
  children?: DialogRenderProp | ReactNode
}

export const Drawer = ({ children, ...props }: DrawerProps) => (
  <DialogRender {...useDrawer(props)}>{children}</DialogRender>
)
