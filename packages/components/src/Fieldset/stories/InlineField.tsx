/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Fieldset } from '../'
import { FieldText } from '../../Form'

export default function Inline() {
  return (
    <Fieldset legend="This is the Legend">
      <FieldText inline label="First Label" />
      <FieldText inline label="Second Label" />
    </Fieldset>
  )
}
