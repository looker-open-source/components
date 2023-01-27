/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Fieldset } from '../'
import { FieldText } from '../../Form'

export default function Inline() {
  return (
    <>
      <Fieldset fieldsHideLabel legend="Group 1">
        <FieldText label="First Label" />
        <FieldText label="Second Label" />
        Override the `fieldsHideLabel` prop in the parent:
        <FieldText label="Third Label" hideLabel={false} />
      </Fieldset>
      <Fieldset legend="Group 2">
        <FieldText label="First Label" hideLabel />
        <FieldText label="Second Label" />
        <FieldText label="Third Label" />
      </Fieldset>
    </>
  )
}
