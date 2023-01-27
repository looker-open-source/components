/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceVerticalProps } from '../SpaceVertical'
import { SpaceVertical, Button } from '../../../..'

export default function VerticalBasic(props: SpaceVerticalProps) {
  return (
    <SpaceVertical {...props}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </SpaceVertical>
  )
}
