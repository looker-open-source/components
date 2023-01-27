/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { ProgressCircular } from '../ProgressCircular'
import { Space, SpaceVertical } from '../../Layout'
import { ButtonToggle } from '../../Button/ButtonToggle'

export default function Default() {
  const options = [
    { label: '0%', value: '0' },
    { label: '25%', value: '0.25' },
    { label: '50%', value: '0.5' },
    { label: '75%', value: '0.75' },
    { label: '100%', value: '1' },
  ]

  const [progress, setProgress] = useState(options[2].value)

  return (
    <SpaceVertical>
      <ProgressCircular progress={parseFloat(progress)} />
      <Space>
        <ButtonToggle
          value={progress}
          options={options}
          onChange={setProgress}
        />
      </Space>
    </SpaceVertical>
  )
}
