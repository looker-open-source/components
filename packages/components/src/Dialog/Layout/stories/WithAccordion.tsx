/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Accordion2 } from '../../../Accordion2'
import { DialogLayout } from '../DialogLayout'

export default function WithAccordion() {
  return (
    <DialogLayout header="Error details" footer="Just text">
      <Accordion2 label="Show me the cheese!">Cheddar</Accordion2>
    </DialogLayout>
  )
}
