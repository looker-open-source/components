/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import { findUserAttribute } from '@looker/filter-expressions'
import type { FC } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { GroupSelect } from '../GroupSelect'

const createOptions = (userAttributes: any[] = []) =>
  userAttributes.map(({ name, label, value }: any) => ({
    value: name,
    label: `${label} (${value})`,
  }))

export const UserAttribute: FC<FilterParamProps> = ({
  item,
  item: { attributeName },
  userAttributes,
  onChange,
  validationMessage,
}) => {
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
      validationMessage={validationMessage}
      placement="right"
    />
  )
}
