/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TreeModel } from '../types';
import type { ILookmlModelExplore } from '@looker/sdk/src/4.0u/models';
export declare const createExploreViewsTree: (explore?: ILookmlModelExplore | undefined) => TreeModel[];
