/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Card } from '../../Card'
import { Paragraph } from '../../../Text/Paragraph'

export default () => {
  return (
    <Card raised>
      <Paragraph color="text1" fontSize="xlarge">
        Hello World!
      </Paragraph>
    </Card>
  )
}
