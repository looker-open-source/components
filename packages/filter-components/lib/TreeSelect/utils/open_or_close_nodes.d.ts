/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TreeModel } from '../types';
/**
 * If a section's been toggled open or closed, its ID and isOpen values
 * are passed in and the tree is updated accordingly.
 * @param trees
 * @param updateNode
 */
export declare const openOrCloseNodes: (trees: TreeModel[], updateNode: {
    id: string;
    isOpen: boolean;
}) => TreeModel[];
