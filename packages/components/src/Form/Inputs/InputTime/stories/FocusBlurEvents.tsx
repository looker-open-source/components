/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'
import { Space, Paragraph } from '../../../..'

export default function FocusBlurEvents(props: InputTimeProps) {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <Space>
      <InputTime onFocus={handleFocus} onBlur={handleBlur} {...props} />
      {isFocused && <Paragraph color="green">FOCUSED!!</Paragraph>}
    </Space>
  )
}
