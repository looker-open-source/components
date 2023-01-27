/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tooltip } from '../Tooltip'
import { Button } from '../../Button'

export default function PlacementTop() {
  return (
    <Tooltip content={'Simple Content'} placement={'top'}>
      <Button m="xxxlarge">Open Tooltip</Button>
    </Tooltip>
  )
}
