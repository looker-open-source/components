/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import { FieldDate } from '..'
import { Button } from '../../../../Button'

export default function ControlledFloatingLabelNoValue(externalLabel = true) {
  const [today, setToday] = useState<Date | undefined>()
  const onClickSelectToday = () => setToday(new Date())
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <Button onClick={onClickSelectToday}>Today</Button>
      <FieldDate
        externalLabel={false}
        label="Controlled"
        value={today}
        onChange={setToday}
      />
    </ExtendComponentsThemeProvider>
  )
}
