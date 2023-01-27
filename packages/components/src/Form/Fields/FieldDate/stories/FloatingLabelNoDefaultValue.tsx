/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import { FieldDate } from '..'

export default function FloatingLabelNoDefaultValue(externalLabel: boolean) {
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel } }}
    >
      <FieldDate label={'Example'} externalLabel={false} />
    </ExtendComponentsThemeProvider>
  )
}
