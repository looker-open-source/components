/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tooltip } from '../Tooltip'
import { Button } from '../../Button'

export default function RenderProp() {
  return (
    <Tooltip content="Start editing" placement="right">
      {tooltipProps => (
        <Button m="xxxlarge" {...tooltipProps}>
          Open Tooltip
        </Button>
      )}
    </Tooltip>
  )
}
