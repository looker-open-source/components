/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { isTreeItemInnerPropKey } from '../types'

export const partitionTreeProps = (
  props: Readonly<Record<string, unknown>>
) => {
  const treeItemInnerProps: Record<string, unknown> = {}
  const accordionInnerProps: Record<string, unknown> = {}

  Object.entries(props).forEach(prop => {
    const [propKey, propValue] = prop
    if (props && isTreeItemInnerPropKey(propKey)) {
      treeItemInnerProps[propKey] = propValue
    } else {
      accordionInnerProps[propKey] = propValue
    }
  })

  return [treeItemInnerProps, accordionInnerProps]
}
