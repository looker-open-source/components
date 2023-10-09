/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ComboboxOptionObject } from '@looker/components';
import type { TreeModel } from '../types';

/**
 * @returns Combobox option info based on a TreeModel, for use in TreeSelect
 */
export const getOption = (tree: TreeModel): ComboboxOptionObject => {
  return {
    label: tree.value,
    // For sections so use the whole tree instead of tree.payload, since we need
    // children to be in the option payload in order to replace option selection with tree toggle
    // in keyboard behavior
    payload: tree.children ? tree : tree.payload,
    value: tree.id || tree.value,
  };
};
