/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ILookmlModelExploreField, ILookmlModelExplore } from '@looker/sdk'

/**
 * Finds and returns field data given a name and an explore
 * @param name the name of the field
 * @param explore the explore containing the field
 * @returns the ILookmlModelExploreField if found or undefined
 */
export const findField = (name: string, explore?: ILookmlModelExplore) => {
  if (name === '' || !explore || !explore.fields) return undefined
  const { fields } = explore
  let result
  const matchName = (field: ILookmlModelExploreField) => field.name === name
  if (fields.dimensions) {
    result = fields.dimensions.find(matchName)
  }
  if (!result && fields.measures) {
    result = fields.measures.find(matchName)
  }
  return result
}
