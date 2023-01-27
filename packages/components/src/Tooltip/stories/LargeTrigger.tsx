/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tooltip } from '../Tooltip'
import { Card } from '../../Card'

export default function LargeTrigger() {
  return (
    <Tooltip content="See what happens when you scroll" placement="right">
      <Card width={500} height={800} raised p="u5">
        Very large trigger
      </Card>
    </Tooltip>
  )
}
