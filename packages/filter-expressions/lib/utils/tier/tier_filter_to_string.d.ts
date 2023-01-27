/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FilterASTNode, FilterExpressionType } from '../..';
/**
 * Converts the AST to an array of FilterItems and then
 * converts each item into its expression representation
 */
export declare const tierFilterToString: (root: FilterASTNode, type: FilterExpressionType, field?: ILookmlModelExploreField | undefined) => string;
