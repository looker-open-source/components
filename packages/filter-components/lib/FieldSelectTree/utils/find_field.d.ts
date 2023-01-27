/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField, ILookmlModelExplore } from '@looker/sdk';
/**
 * Finds and returns field data given a name and an explore
 * @param name the name of the field
 * @param explore the explore containing the field
 * @returns the ILookmlModelExploreField if found or undefined
 */
export declare const findField: (name: string, explore?: ILookmlModelExplore | undefined) => ILookmlModelExploreField | undefined;
