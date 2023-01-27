/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { MessageBar } from '../..'

export default function CustomAction() {
  return (
    <MessageBar
      primaryAction="Primary Action"
      onPrimaryClick={() => alert('Primary Action')}
      secondaryAction="Secondary Action"
      onSecondaryClick={() => alert('Secondary Action')}
    >
      Render some custom action labels and actions!
    </MessageBar>
  )
}
