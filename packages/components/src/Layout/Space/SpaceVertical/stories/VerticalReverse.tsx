/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceVerticalProps } from '../SpaceVertical'
import { SpaceVertical, Button } from '../../../..'

export default function VerticalReverse(props: SpaceVerticalProps) {
  const { reverse = true, ...rest } = props
  return (
    <SpaceVertical {...rest} reverse={reverse}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </SpaceVertical>
  )
}
