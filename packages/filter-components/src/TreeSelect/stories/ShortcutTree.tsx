/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';
import { Box } from '@looker/components';
import { TreeSelect } from '../TreeSelect';
import type { TreeSelectProps } from '../TreeSelect';
import { createExploreViewsTree } from '../utils';
import { exploreData, mockShortcutTree } from './examples';

const exploreTree = createExploreViewsTree(exploreData);

export default function ShortcutTree({
  tree = exploreTree,
  shortcutTree = mockShortcutTree,
  onSelectedFieldChange,
  ...props
}: TreeSelectProps) {
  const [field, setField] = useState();
  const [section, setSection] = useState();
  const handleChange = (fieldData: any) => {
    setField(fieldData.field);
    setSection(fieldData.fieldOptions.view_label);
    onSelectedFieldChange?.(fieldData);
  };
  // padding-top 300 is to test fix for b/286167535
  // where expanding a node should not overflow the page
  return (
    <Box width={400} p="u3" pt={300}>
      <TreeSelect
        onSelectedFieldChange={handleChange}
        tree={tree}
        shortcutTree={shortcutTree}
        selectedSection={section}
        selectedField={field}
        {...props}
      />
    </Box>
  );
}
