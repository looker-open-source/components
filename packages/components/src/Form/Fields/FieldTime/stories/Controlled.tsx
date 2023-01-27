/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { SpaceVertical, Paragraph, Space, Button } from '../../../../'
import { FieldTime } from '..'

export default function Controlled() {
  const [controlledTime, setControlledTime] = useState<string | undefined>(
    '12:00'
  )
  return (
    <SpaceVertical>
      <Paragraph>Selected: {controlledTime}</Paragraph>

      <Space>
        <Button
          onClick={() => {
            setControlledTime('14:00')
          }}
        >
          2:00pm
        </Button>
        <Button
          onClick={() => {
            setControlledTime('15:15')
          }}
        >
          3:15pm
        </Button>
        <Button
          onClick={() => {
            setControlledTime('16:32')
          }}
        >
          4:32pm
        </Button>
      </Space>

      <FieldTime
        label="Controlled"
        value={controlledTime}
        onChange={setControlledTime}
      />
    </SpaceVertical>
  )
}
