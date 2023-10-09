/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box, TreeItem, useTooltip } from '@looker/components';
import React from 'react';
import type { TreeModel } from './types';
import { useTreeSelectComboboxOption } from './utils/use_tree_select_combobox_option';

export type FieldProps = {
  tree: TreeModel;
};

export const Field = ({ tree }: FieldProps) => {
  // useTooltip instead of Tooltip to more easily omit the tooltip ref,
  // which is unnecessary in this usage (it's only used when the tooltip is open on mount)
  // and would interfere with the Combobox option ref
  const {
    domProps: { ref: _, ...restDomProps },
    tooltip,
  } = useTooltip({
    content: tree.disabled,
    disabled: !tree.disabled,
    placement: 'right',
  });

  const {
    isActive,
    isSelected,
    domProps: optionDomProps,
  } = useTreeSelectComboboxOption(tree);

  return (
    <>
      {tooltip}
      <TreeItem
        {...restDomProps}
        {...optionDomProps}
        disabled={!!tree.disabled}
        detail={<Box pr="u1">{tree.detail}</Box>}
        border={!tree.isNotHighlightable}
        color={tree.isSecondary ? 'measure' : 'dimension'}
        colorOnHover
        ripple
        selected={isActive || isSelected}
      >
        {tree.label || tree.value}
      </TreeItem>
    </>
  );
};
