/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'
import { SpaceVertical, Space, Heading, Grid } from '../../../..'

export default function TimeFormatting(props: InputTimeProps) {
  const { format: _format, value: valueProp = '14:34', ...restProps } = props

  const [value, setValue] = useState<string | undefined>(valueProp)
  return (
    <Grid>
      <SpaceVertical gap="u2">
        <Heading as="h3">12-hour</Heading>
        <Space>
          <InputTime
            format="12h"
            value={value}
            onChange={setValue}
            {...restProps}
          />
        </Space>
      </SpaceVertical>
      <SpaceVertical gap="u2">
        <Heading as="h3">24-hour</Heading>
        <Space>
          <InputTime
            format="24h"
            value={value}
            onChange={setValue}
            {...restProps}
          />
        </Space>
      </SpaceVertical>
    </Grid>
  )
}
