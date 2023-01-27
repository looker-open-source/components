/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { SpaceVertical } from '../../../../'
import { InlineTextArea } from '../'

export default function Basic() {
  return (
    <SpaceVertical>
      <InlineTextArea placeholder="Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..." />
      <InlineTextArea value="Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..." />
    </SpaceVertical>
  )
}
