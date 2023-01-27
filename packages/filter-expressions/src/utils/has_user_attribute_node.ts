/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import any from 'lodash/fp/any'
import flow from 'lodash/fp/flow'
import { TYPE_USER_ATTRIBUTE } from '../types'
import { treeToList } from './tree'

/**
 * checks if any node in ast is of type user_attribute
 */
export const hasUserAttributeNode = flow([
  treeToList,
  any({ type: TYPE_USER_ATTRIBUTE }),
])
