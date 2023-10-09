/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box, ListItemLabel, Tree } from '@looker/components';
import React from 'react';
import styled from 'styled-components';
import type { TreeModel } from './types';
import { useTreeSelectComboboxOption } from './utils/use_tree_select_combobox_option';

export type SectionProps = {
  tree: TreeModel;
  onClick: (updateNode: { id: string; isOpen: boolean }) => void;
};

export const TREE_SELECT_DENSITY = -1;

export const Section = styled(({ tree, onClick, ...props }: SectionProps) => {
  const {
    isActive,
    // Don't use isSelected status since only fields can be selected, not sections
    // isSelected,
    domProps: { onClick: _, ...restDomProps },
  } = useTreeSelectComboboxOption(tree);

  const handleToggleOpen = () =>
    onClick({ id: tree.id || '', isOpen: !tree.isOpen });

  return (
    <Tree
      density={TREE_SELECT_DENSITY}
      label={tree.label || tree.value}
      detail={<Box pr="u1">{tree.detail}</Box>}
      selected={isActive}
      toggleOpen={handleToggleOpen}
      {...restDomProps}
      {...props}
    />
  );
})`
  /* Divider under shortcutTree items */
  li + &,
  /* Divider between sections */
  ${Tree} + & {
    border-top: 1px solid ${({ theme }) => theme.colors.ui2};
    /* No dividers between nested sections */
    [role='region'] & {
      border-top: none;
    }
  }
  ${ListItemLabel} {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  [role='region'] ${ListItemLabel} {
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
`;
