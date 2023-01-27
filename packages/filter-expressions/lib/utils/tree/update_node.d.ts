/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterASTNode } from '../../types';
/**
 * Traverses the Filter AST looking for a node with id = nodeId and applies updateProps to it
 */
export declare const updateNode: (root: FilterASTNode, nodeId: number, updateProps: any) => FilterASTNode;
