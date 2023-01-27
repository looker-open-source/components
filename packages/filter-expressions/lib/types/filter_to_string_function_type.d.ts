/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FilterASTNode } from './filter_ast_node';
import type { FilterExpressionType } from './filter_type';
export declare type FilterToStringFunctionType = (root: FilterASTNode, type: FilterExpressionType, field?: ILookmlModelExploreField) => string;
