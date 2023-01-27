/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceVerticalProps } from '../SpaceVertical'
import { SpaceVertical, Button } from '../../../..'

export default function VerticalStretch(props: SpaceVerticalProps) {
  const { align = 'stretch', ...rest } = props
  return (
    <SpaceVertical {...rest} align={align}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </SpaceVertical>
  )
}
