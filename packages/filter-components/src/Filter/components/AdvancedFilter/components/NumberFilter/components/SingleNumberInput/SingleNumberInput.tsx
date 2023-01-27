/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ValidationMessageProps } from '@looker/components'
import { getNumberFromString } from '@looker/filter-expressions'
import type { FilterModel } from '@looker/filter-expressions'
import type { ChangeEvent } from 'react'
import React from 'react'
import type { GroupInputProps } from '../../../GroupInput'
import { GroupInput } from '../../../GroupInput'

interface SingleNumberInputProps extends Omit<GroupInputProps, 'onChange'> {
  item: FilterModel
  onChange?: (id: string, value: any) => void
  validationMessage?: ValidationMessageProps
}

const getInputValue = (value?: unknown | unknown[]) => {
  const singleValue = (Array.isArray(value) ? value[0] : value) ?? ''
  if (['number', 'bigint'].includes(typeof singleValue)) {
    return singleValue.toString()
  }
  return singleValue || ''
}

export const SingleNumberInput = ({
  item,
  onChange,
  placement,
  validationMessage,
}: SingleNumberInputProps) => {
  const inputChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const numberValue = getNumberFromString(value)
    const newValueArr = value === '' ? [] : [numberValue]
    if (!Number.isNaN(numberValue)) {
      onChange?.(item.id, { value: newValueArr })
    }
  }

  const inputValue = getInputValue(item.value)

  return (
    <GroupInput
      type="number"
      value={inputValue}
      onChange={inputChange}
      placement={placement}
      minWidth="4.5em"
      data-testid="single-number"
      validationType={validationMessage?.type}
      noErrorIcon
    />
  )
}
