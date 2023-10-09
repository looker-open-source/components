/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React, { useState } from 'react';
import { Box } from '@looker/components';
import { TreeSelect } from '../TreeSelect';
import type { TreeSelectProps } from '../TreeSelect';
import { createExploreViewsTree } from '../utils';
import { exploreData } from './examples';

const exploreTree = createExploreViewsTree(exploreData);

export default function Basic({
  label = 'Filter by',
  tree = exploreTree,
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
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <Box width={400} p="u3">
        <TreeSelect
          label={label}
          onSelectedFieldChange={handleChange}
          tree={tree}
          {...props}
          selectedSection={section}
          selectedField={field}
        />
      </Box>
    </ExtendComponentsThemeProvider>
  );
}
