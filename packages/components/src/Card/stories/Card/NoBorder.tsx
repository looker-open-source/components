/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Card } from '../../Card'

export default () => {
  const args = {
    border: 'none',
  }
  return <Card {...args}>A borderless card</Card>
}
