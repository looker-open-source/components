/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { DividerVertical } from '../../..'
import type { DividerVerticalProps } from '../../..'

export default function Custom() {
  const args: DividerVerticalProps = {
    customColor: 'turquoise',
    size: '20px',
  }
  return <DividerVertical {...args} />
}
