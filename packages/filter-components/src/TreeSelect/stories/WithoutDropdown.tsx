/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Box, FieldToggleSwitch } from '@looker/components';
import { TreeSelect } from '../TreeSelect';
import type { TreeSelectProps } from '../TreeSelect';
import { createExploreViewsTree } from '../utils';
import { exploreData } from './examples';

const exploreTree = createExploreViewsTree(exploreData);

export default function WithoutDropdown({
  label = 'Filter by',
  tree = exploreTree,
  withDropdown = false,
  onSelectedFieldChange,
  ...props
}: TreeSelectProps) {
  const handleChange = (fieldData: any) => {
    onSelectedFieldChange?.(fieldData);
  };
  return (
    <TreeSelect
      label={label}
      treeHeight={200}
      onSelectedFieldChange={handleChange}
      tree={tree}
      withDropdown={withDropdown}
      {...props}
    >
      <Box mb="xsmall">
        <FieldToggleSwitch label="Advanced" />
      </Box>
    </TreeSelect>
  );
}
