/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { RangeModifier } from '../../../../Calendar'
import { Divider } from '../../../../Divider'
import { SpaceVertical } from '../../../../Layout'
import { Heading, Paragraph } from '../../../../Text'
import { InputDateRange } from '../InputDateRange'

export default function OnValidationFail() {
  const [value, setValue] = useState<RangeModifier>({})
  const [isValid, setIsValid] = useState(true)
  const handleChange = (newValue: RangeModifier) => {
    setValue(newValue)
    setIsValid(true)
  }
  const handleValidationFail = () => setIsValid(false)

  const message = isValid ? 'Valid Input' : 'Invalid Input'
  const color = isValid ? undefined : 'critical'

  return (
    <SpaceVertical>
      <Paragraph color="text2">
        INSTRUCTIONS: Try typing an invalid date string (ex: 'not/a/valid/date')
        and clicking or tabbing away to trigger blur event.
      </Paragraph>
      <Heading>Result:</Heading>
      <Paragraph color={color}>{message}</Paragraph>
      <Divider />
      <InputDateRange
        value={value}
        onChange={handleChange}
        onValidationFail={handleValidationFail}
      />
    </SpaceVertical>
  )
}
