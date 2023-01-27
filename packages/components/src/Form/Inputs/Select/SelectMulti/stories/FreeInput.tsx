/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { SelectMulti } from '..'
import { SpaceVertical } from '../../../../../Layout'
import { Paragraph } from '../../../../../'

export default function CloseOnSelect() {
  function validate(value: string) {
    return value.charAt(0).toUpperCase() === value.charAt(0)
  }
  const [message, setMessage] = useState('')
  function handleValidationFail(values: string[]) {
    setMessage(`Please capitalize: ${values.join(', ')}`)
  }
  function resetMessage() {
    setMessage('')
  }
  return (
    <SpaceVertical align="stretch">
      <SelectMulti
        options={[
          { value: 'Cheddar' },
          { value: 'Gouda' },
          { value: 'Swiss' },
          { value: 'Feta' },
          { value: 'Mascarpone' },
          { value: 'Brie' },
          { value: 'Mozzarella' },
          { value: 'Cotija' },
          { value: 'Pepperjack' },
        ]}
        isFilterable
        onFilter={resetMessage}
        placeholder="Type values or select from the list"
        freeInput
        validate={validate}
        onValidationFail={handleValidationFail}
      />
      <Paragraph>{message}</Paragraph>
    </SpaceVertical>
  )
}
