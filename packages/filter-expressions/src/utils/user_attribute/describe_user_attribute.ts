/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '../../types'
import { describeIsItem } from '../summary/describe_is_item'

export const describeUserAttribute = ({
  attributeValue,
}: FilterModel): string =>
  attributeValue ? describeIsItem(true, attributeValue) : ''
