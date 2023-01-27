/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Fieldset } from '../'
import { FieldText } from '../../Form'

export default function Inline() {
  return (
    <Fieldset inline legend="This is the Legend">
      <FieldText label="First Label" />
      <FieldText label="Second Label" />
      <FieldText
        label="Third Label"
        validationMessage={{ message: 'This is an error', type: 'error' }}
      />
    </Fieldset>
  )
}
