/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Checkbox } from '../Checkbox'
import type { CheckboxProps } from '../Checkbox'

export default function Basic(props: CheckboxProps) {
  return <Checkbox name="someName" id="someId" {...props} />
}
