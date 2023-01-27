/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { findUserAttribute } from '@looker/filter-expressions'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { GroupSelect } from '../GroupSelect'

const createOptions = (userAttributes: any[] = []) =>
  userAttributes.map(({ name, label, value }: any) => ({
    value: name,
    label: `${label} (${value})`,
  }))

export const UserAttributes = ({
  item,
  item: { attributeName },
  userAttributes,
  onChange,
  validationMessage,
}: FilterParamProps) => {
  const userAttributeChange = (value: string) => {
    const userAttribute = findUserAttribute(value, userAttributes)
    onChange(item.id, {
      attributeName: value,
      attributeValue: userAttribute && userAttribute.value,
    })
  }

  return (
    <GroupSelect
      value={attributeName}
      placeholder="Select..."
      options={createOptions(userAttributes)}
      onChange={userAttributeChange}
      validationType={validationMessage?.type}
      placement="right"
    />
  )
}
