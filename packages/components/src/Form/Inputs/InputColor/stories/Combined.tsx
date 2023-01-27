/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { SpaceVertical } from '../../../../Layout'
import { InputColor } from '../InputColor'

export default function Combined() {
  return (
    <SpaceVertical>
      <InputColor />
      <InputColor value="green" />
      <InputColor defaultValue="purple" />
      <InputColor disabled />
      <InputColor defaultValue="green" disabled />
      <InputColor defaultValue="green" readOnly />
    </SpaceVertical>
  )
}
