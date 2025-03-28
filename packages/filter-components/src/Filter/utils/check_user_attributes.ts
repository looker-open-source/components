/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { hasUserAttributeNode } from '@looker/filter-expressions';
import type { FilterASTNode } from '@looker/filter-expressions';
import type { FilterProps } from '../types/filter_props';

export const checkUserAttributes = (
  userAttributes: FilterProps['userAttributes'],
  ast: FilterASTNode
) => {
  // userAttributes is empty and ast has a node set to userAttribute type
  if (!userAttributes?.length && hasUserAttributeNode(ast)) {
    // user attributes need to be loaded
    return false;
  } else {
    // user attributes are already loaded
    return true;
  }
};
