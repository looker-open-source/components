/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ListItemProps, TreeProps } from '..';
export declare type LkFieldTreeProps = Omit<TreeProps, 'border' | 'density' | 'description' | 'itemRole' | 'truncate'>;
export declare type LkFieldItemProps = Omit<ListItemProps, 'density' | 'description' | 'itemRole' | 'truncate'>;
