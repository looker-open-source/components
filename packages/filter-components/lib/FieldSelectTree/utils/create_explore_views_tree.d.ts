/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TreeModel } from '../Tree';
import type { ILookmlModelExplore } from '@looker/sdk/src/4.0u/models';
export declare const createExploreViewsTree: (explore?: ILookmlModelExplore | undefined) => TreeModel[];
