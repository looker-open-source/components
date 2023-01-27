/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { useToggle } from '../../../../utils/useToggle'
import { ToggleSwitch } from '../..'
import type { ToggleSwitchProps } from '../ToggleSwitch'
export default function Basic(props: ToggleSwitchProps) {
  const { value, toggle } = useToggle(false)
  return <ToggleSwitch onChange={toggle} on={value} {...props} />
}
