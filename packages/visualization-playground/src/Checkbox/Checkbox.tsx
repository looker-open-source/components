/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState, useEffect } from 'react'
import { FieldCheckbox } from '@looker/components'

interface CheckboxProps {
  label?: string
  onChange?: (isChecked: boolean) => void
  checked?: boolean
}

/**
 * A simple checkbox designed to be symmetrical with other components used in
 * Config editor. Stores checked state, and accepts a "checked" prop (rather
 * than "checked" per standard checkbox)
 */

export const Checkbox = ({ onChange, label, checked }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(Boolean(checked))
  useEffect(() => {
    if (checked !== isChecked) {
      onChange?.(isChecked)
    }
  }, [isChecked, onChange, checked])
  return (
    <FieldCheckbox
      label={label}
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked)
      }}
    />
  )
}
