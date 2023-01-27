/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterASTNode, FilterModel } from '../../types';
/**
 * Given an AST and a nodeToString conversion function for that particular
 * type of filter, it converts the AST to a string expression representation
 */
export declare const treeToString: (root: FilterASTNode, nodeToString: (item: FilterModel) => string, filterNode?: (item: FilterModel) => boolean) => string;
