/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel, UserAttributeWithValue } from '../../types'
import { findUserAttribute } from '../user_attribute'

export const sanitizeString = (
  item: FilterModel,
  userAttributes: UserAttributeWithValue[] = []
) => {
  const { id = '0', is = true, type, value = [], attributeName } = item
  const userAttribute = findUserAttribute(attributeName, userAttributes)
  switch (type) {
    case 'match':
      return {
        id,
        is,
        type,
        value: userAttribute ? [userAttribute.value] : value,
        attributeName: '',
        attributeValue: '',
      }
    default:
      return { ...item, attributeName: '', attributeValue: '' }
  }
}
