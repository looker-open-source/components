/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { mockTreeData } from '../fixtures';
import { getLeavesFromTrees } from './get_leaves_from_trees';

describe('getLeavesFromTrees tests', () => {
  it('should match the snapshot', () => {
    expect(getLeavesFromTrees(mockTreeData)).toMatchSnapshot();
  });
});
