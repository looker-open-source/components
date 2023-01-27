/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InlineTextArea } from '../'

export default function Disabled() {
  return (
    <InlineTextArea
      disabled
      value="This text can't be edited because the component is disabled..."
    />
  )
}
