/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import type { NodeToToggle } from './types';

export type TreeSelectContextProps = {
  nodeToToggle?: NodeToToggle;
  setNodeToToggle?: (node: NodeToToggle) => void;
  withDropdown?: boolean;
};

const treeSelectContext: TreeSelectContextProps = {};

export const TreeSelectContext = createContext(treeSelectContext);
