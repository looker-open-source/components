/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Divider } from '../../Divider'
import type { DividerProps } from '../../Divider'

export default function Custom() {
  const args: DividerProps = {
    customColor: 'turquoise',
    size: '20px',
  }
  return <Divider {...args} />
}
