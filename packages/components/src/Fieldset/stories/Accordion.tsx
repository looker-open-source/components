/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Fieldset } from '../'
import { FieldCheckbox } from '../../Form'

export default function Accordion() {
  return (
    <Fieldset legend="This is the Legend" accordion>
      <FieldCheckbox name="box1" label="you can click here" />
      <FieldCheckbox name="box2" label="here too" />
      <FieldCheckbox name="box3" label="also here" />
    </Fieldset>
  )
}
