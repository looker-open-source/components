/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'
import { Button, Space, Paragraph } from '../../../..'

export default function Controlled(props: InputTimeProps) {
  const { value: valueProp = '14:34', ...restProps } = props

  const [value, setValue] = useState(valueProp)
  const handle1400Click = () => setValue('14:00')
  const handle1515Click = () => setValue('15:15')
  const handle1632Click = () => setValue('16:32')

  return (
    <Space>
      <Button onClick={handle1400Click}>2:00pm</Button>
      <Button onClick={handle1515Click}>3:15pm</Button>
      <Button onClick={handle1632Click}>4:32pm</Button>
      <InputTime value={value} {...restProps} />
      <Paragraph>Selected: {value}</Paragraph>
    </Space>
  )
}
