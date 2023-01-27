/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InlineTextArea } from '../'

export default function Underline() {
  return (
    <InlineTextArea
      underlineOnlyOnHover
      value="Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..."
    />
  )
}
