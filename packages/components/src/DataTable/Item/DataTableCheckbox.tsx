/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { MixedBoolean } from '../../Form'
import { Checkbox } from '../../Form'
import { ItemTarget } from './ItemTarget'

export interface DataTableCheckboxProps {
  id?: string
  checked?: MixedBoolean
  disabled?: boolean
  onChange?: () => void
}

export const checkListProps = ['checked', 'disabled', 'onChange', 'id']

export const DataTableCheckbox = ({
  id,
  onChange,
  checked,
  disabled,
}: DataTableCheckboxProps) => {
  const handleCellOnClick = () => !disabled && onChange && onChange()
  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>
    event.key === 'Enter' && event.currentTarget.click()

  let ariaLabel: string | undefined = 'Select all rows'
  if (id !== 'headerId') {
    ariaLabel = undefined
  } else if (checked) {
    ariaLabel = 'Select none'
  }

  return (
    <ItemTarget aria-labelledby={`rowheader-${id}`} onClick={handleCellOnClick}>
      <Checkbox
        aria-label={ariaLabel}
        checked={checked}
        disabled={disabled}
        onKeyDown={handleOnKeyDown}
        tabIndex={-1}
      />
    </ItemTarget>
  )
}
