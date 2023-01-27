/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Accordion, Fieldset, FieldText } from '../..'

export default function DefaultOpen() {
  return (
    <Accordion
      defaultOpen
      content={
        <Fieldset>
          <Fieldset inline>
            <FieldText label="First name" />
            <FieldText label="Middle" />
            <FieldText label="Last name" />
          </Fieldset>
          <FieldText label="Email" />
          <FieldText label="Phone" />
        </Fieldset>
      }
    >
      Advanced Options
    </Accordion>
  )
}
