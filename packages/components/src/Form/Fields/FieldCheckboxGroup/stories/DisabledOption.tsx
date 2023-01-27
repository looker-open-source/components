/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { FieldCheckboxGroup } from '../../FieldCheckboxGroup'

export default function DisabledOption() {
  const options = [
    {
      label: 'Cheddar',
      value: 'cheddar',
    },
    {
      label: 'Gouda',
      value: 'gouda',
    },
    {
      disabled: true,
      label: 'Swiss',
      value: 'swiss',
    },
    {
      label: 'Roquefort',
      value: 'roquefort',
    },
  ]

  return (
    <FieldCheckboxGroup
      autoFocus
      defaultValue={['cheddar']}
      description="Pick all your cheeses"
      label="Cheeses"
      options={options}
    />
  )
}
