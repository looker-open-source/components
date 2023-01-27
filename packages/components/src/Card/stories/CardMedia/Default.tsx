/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { CardMedia } from '../../CardMedia'

export default () => {
  const args = {
    image: 'https://www.fillmurray.com/300/150',
  }
  return <CardMedia {...args}>A basic card media</CardMedia>
}
