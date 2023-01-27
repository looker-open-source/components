/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { UserAttributeWithValue } from '../../types'

export const findUserAttribute = (
  attribute: string,
  userAttributes?: UserAttributeWithValue[]
) =>
  userAttributes &&
  userAttributes.find(({ name }: UserAttributeWithValue) => name === attribute)
