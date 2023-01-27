/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { FormEvent } from 'react'
import type { FieldToggleSwitchProps } from '..'
import { FieldToggleSwitch } from '..'

export default function Controlled(props: FieldToggleSwitchProps) {
  const {
    on: _on,
    onChange: _onChange,
    label = 'Development Mode',
    ...restProps
  } = props

  const [on, setOn] = useState(false)
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setOn((e.target as HTMLInputElement).checked)
  }
  return (
    <FieldToggleSwitch
      label={label}
      onChange={onChange}
      on={on}
      {...restProps}
    />
  )
}
