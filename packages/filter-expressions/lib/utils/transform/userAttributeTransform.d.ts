/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterASTNode, UserAttributeWithValue } from '../../types';
/**
 * Traverses ast and updates userAttribute value
 */
export declare const userAttributeTransform: (userAttributes?: UserAttributeWithValue[] | undefined) => (root: FilterASTNode) => FilterASTNode;
