/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { CardMedia } from '../../CardMedia'

export default () => {
  const args = {
    backgroundColor: 'key',
  }
  return <CardMedia {...args}>Custom Border Color</CardMedia>
}
