/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import { FieldDate } from '..'

export default function Error(externalLabel = true) {
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel } }}
    >
      <FieldDate
        defaultValue={new Date('July 25, 2020')}
        label="Example"
        validationMessage={{ message: 'Error Message', type: 'error' }}
      />
    </ExtendComponentsThemeProvider>
  )
}
