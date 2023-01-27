/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputTimeSelect } from '../'
import type { InputTimeSelectProps } from '../'
import { Space, Paragraph } from '../../../../'

export default function Controlled(props: InputTimeSelectProps) {
  const { value: valueProp = '14:00', ...restProps } = props

  const [value, setValue] = useState<string | undefined>(valueProp)

  return (
    <Space>
      <InputTimeSelect value={value} onChange={setValue} {...restProps} />
      <Paragraph color="text2">{value}</Paragraph>
    </Space>
  )
}
