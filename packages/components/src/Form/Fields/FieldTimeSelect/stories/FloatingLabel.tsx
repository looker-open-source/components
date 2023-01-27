/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import React from 'react'
import type { FieldTimeSelectProps } from '../'
import { FieldTimeSelect } from '../'

export default function FloatingLabel(props: FieldTimeSelectProps) {
  const {
    defaultValue = '14:30',
    interval = 10,
    label = 'Select Time',
    ...restProps
  } = props
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTimeSelect
        interval={interval}
        defaultValue={defaultValue}
        label={label}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  )
}
