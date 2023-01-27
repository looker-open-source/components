/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FilterModel } from '../..';
import type { FilterExpressionType } from '../../types';
/**
 * Maps a FilterItem to a function for converting it to a filter summary
 */
export declare const describeTier: (item: FilterModel, filterType?: FilterExpressionType | undefined, field?: ILookmlModelExploreField | null | undefined) => string;
