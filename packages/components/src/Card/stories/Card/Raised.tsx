/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Card } from '../../Card'

export default () => {
  const args = {
    raised: true,
  }
  return <Card {...args}>A raised card</Card>
}
