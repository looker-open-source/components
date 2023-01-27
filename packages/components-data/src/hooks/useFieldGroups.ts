/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ILookmlModelExplore, ILookmlModelExploreField } from '@looker/sdk'
import { useExplore } from './useExplore'

type FieldGroups = {
  [group: string]: ILookmlModelExploreField[]
}

// Group the fields by view name, for easier browsing
const groupFields = (fields: ILookmlModelExploreField[] | undefined) => {
  if (!fields) return {}
  return fields.reduce((acc: FieldGroups, dimension) => {
    const { view } = dimension
    if (!view) return acc
    if (!acc[view]) {
      acc[view] = []
    }
    acc[view].push(dimension)
    return acc
  }, {})
}

/**
 * A shared hook for fetching the Field Groups associated with query ID.
 * Used for rendering filter options.
 *
 * @param id a numeric query id
 * @returns field groups and api state
 */

export const useFieldGroups = (id: number) => {
  const { explore, ...rest } = useExplore(id)
  const { fields } = explore || ({} as ILookmlModelExplore)

  const fieldGroups = fields?.dimensions ? groupFields(fields?.dimensions) : {}

  return {
    fieldGroups,
    ...rest,
  }
}
