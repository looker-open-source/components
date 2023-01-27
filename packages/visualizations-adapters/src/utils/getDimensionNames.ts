/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { DEFAULT_EMPTY_FIELDS } from '.'
import type { Fields } from '../types'

/**
 * This function extracts dimension names from the fields object.
 *
 * @param fields is the Fields response as returned by the SDK
 * @returns an array of strings names
 */

export const getDimensionNames = (
  fields: Fields = DEFAULT_EMPTY_FIELDS
): string[] => {
  const { dimensions = [] } = fields
  return dimensions.map((field) => field.name)
}
