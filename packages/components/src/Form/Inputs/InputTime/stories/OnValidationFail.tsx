/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'
import { Code, Space, Paragraph } from '../../../..'

export default function Validation(props: InputTimeProps) {
  const { value: valueProp = 'Stardate 2004.14', ...restProps } = props

  const [value, setValue] = useState<string | undefined>(valueProp)
  const [validationType, setValidationType] = useState<'error' | undefined>()
  const handleValidationFail = () => {
    setValidationType('error')
  }

  return (
    <Space>
      <InputTime
        validationType={validationType}
        value={value}
        onValidationFail={handleValidationFail}
        onChange={setValue}
        {...restProps}
      />
      {validationType === 'error' && (
        <Paragraph color="critical">
          Error: <Code fontSize="small">{value}</Code> is not a valid 24-hour
          time string
        </Paragraph>
      )}
    </Space>
  )
}
