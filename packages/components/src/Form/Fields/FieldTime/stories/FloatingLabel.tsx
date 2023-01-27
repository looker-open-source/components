/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import React from 'react'
import type { FieldTimeProps } from '../'
import { FieldTime } from '../'

export default function FloatingLabel(props: FieldTimeProps) {
  const {
    description = 'this is the description',
    detail = 'detail',
    label = 'Label',
    ...restProps
  } = props
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTime
        detail={detail}
        description={description}
        label={label}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  )
}
