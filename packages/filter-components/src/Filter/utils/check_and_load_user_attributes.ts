/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { hasUserAttributeNode } from '@looker/filter-expressions';
import type { FilterASTNode } from '@looker/filter-expressions';
import type { FilterProps } from '../types/filter_props';

export const checkAndLoadUserAttributes = (
  loadUserAttributes: FilterProps['loadUserAttributes'],
  userAttributes: FilterProps['userAttributes'],
  ast: FilterASTNode
) => {
  // userAttributes is empty and ast has a node set to userAttribute type
  if (
    loadUserAttributes &&
    !userAttributes?.length &&
    hasUserAttributeNode(ast)
  ) {
    loadUserAttributes();
    // user attributes are not ready
    return false;
  } else {
    // user attributes are ready
    return true;
  }
};
