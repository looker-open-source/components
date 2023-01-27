/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import any from 'lodash/fp/any'
import allPass from 'lodash/fp/allPass'
import flow from 'lodash/fp/flow'
import type { FilterModel } from '../types'
import { TYPE_USER_ATTRIBUTE } from '../types'
import { treeToList } from './tree'

const isUserAttributeNode = ({ type }: FilterModel) =>
  type === TYPE_USER_ATTRIBUTE

const hasNoAttributeValue = ({ attributeValue }: FilterModel) => !attributeValue

/**
 * checks if the ast has:
 * - any node of type 'userAttribute'
 * - and that node has no value
 */
export const hasUserAttributeNodeWithoutValue = flow([
  treeToList,
  any(allPass([isUserAttributeNode, hasNoAttributeValue])),
])
