/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { DEFAULT_EMPTY_FIELDS } from '.'
import type { Fields } from '../types'

/**
 * This function extracts measure names from the fields object.
 *
 * @param fields is the Fields response as returned by the SDK
 * @returns an array of strings names
 */

export const getMeasureNames = (
  fields: Fields = DEFAULT_EMPTY_FIELDS
): string[] => {
  const { measures = [] } = fields
  return measures.map((field) => field.name)
}
