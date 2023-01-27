/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterASTNode } from '../../types';
/**
 * Adds a new node to the current ast and returns the root node
 */
export declare const addNode: (root: FilterASTNode, newNode: FilterASTNode) => FilterASTNode;
