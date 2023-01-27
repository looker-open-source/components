/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { CardContent } from '../../CardContent'

export default () => {
  const args = {
    p: 'u10',
  }
  return <CardContent {...args}>Extra Padding</CardContent>
}
