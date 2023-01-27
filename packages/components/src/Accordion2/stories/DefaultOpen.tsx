/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Accordion2 } from '../..'

export default function DefaultOpen() {
  return (
    <Accordion2
      defaultOpen={true}
      onClose={() => alert('Closing doors')}
      onOpen={() => alert('Opening doors')}
      label="Show me some other cheese!"
    >
      Swiss
    </Accordion2>
  )
}
