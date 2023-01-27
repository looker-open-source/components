/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Card } from '../../Card'

export default () => {
  const args = {
    border: 'red',
  }
  return <Card {...args}>Custom Border Color</Card>
}
