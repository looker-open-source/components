/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TreeSelect } from '../TreeSelect'
import type { TreeSelectProps } from '../TreeSelect'
import { createExploreViewsTree } from '../utils'
import { exploreData } from './examples'

const exploreTree = createExploreViewsTree(exploreData)

export default function WithoutDropdown({
  tree = exploreTree,
  withDropdown = false,
  ...props
}: TreeSelectProps) {
  return <TreeSelect tree={tree} withDropdown={withDropdown} {...props} />
}
