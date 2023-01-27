/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '../../types'

export const userAttributeToString = ({ attributeName }: FilterModel) =>
  attributeName ? `{{ _user_attributes['${attributeName}'] }}` : ''
