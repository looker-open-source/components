/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ListItemProps, TreeProps } from '..'

export type LkFieldTreeProps = Omit<
  TreeProps,
  'border' | 'density' | 'description' | 'itemRole' | 'truncate'
>

export type LkFieldItemProps = Omit<
  ListItemProps,
  'density' | 'description' | 'itemRole' | 'truncate'
>
