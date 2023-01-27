/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Fieldset } from '../'
import { FieldCheckbox } from '../../'

export default function AccordionControlled() {
  return (
    <Fieldset
      legend="This is the Legend"
      accordion
      defaultOpen
      onOpen={() => alert('Opening the pod bay doors')}
      onClose={() => alert('Closing the pod bay doors')}
    >
      <FieldCheckbox name="box1" label="you can click here" />
      <FieldCheckbox name="box2" label="here too" />
      <FieldCheckbox name="box3" label="also here" />
    </Fieldset>
  )
}
