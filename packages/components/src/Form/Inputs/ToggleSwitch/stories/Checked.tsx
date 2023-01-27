/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { useToggle } from '../../../../utils/useToggle'
import { ToggleSwitch } from '../..'

export default function Checked() {
  const { value, toggle } = useToggle(true)
  return <ToggleSwitch onChange={toggle} on={value} />
}
