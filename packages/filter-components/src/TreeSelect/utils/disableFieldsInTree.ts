/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TreeModel } from '../types';

/**
 * @param trees explore trees generated via createExploresTree
 * @param fields the fields that should be disabled
 * @param disabledReason assigned to the disabled property, will show as a tooltip
 * @return updated explore trees with the appropriate nodes disabled
 */
export const disableFieldsInTree = (
  trees: TreeModel[],
  fields: string[],
  disabledReason: string
): TreeModel[] => {
  if (fields.length === 0) return trees;
  return trees.map(tree =>
    tree.children
      ? {
          ...tree,
          children: disableFieldsInTree(tree.children, fields, disabledReason),
        }
      : {
          ...tree,
          disabled: fields.includes(tree.payload.field)
            ? disabledReason
            : undefined,
        }
  );
};
