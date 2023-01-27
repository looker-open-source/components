/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldRangeSlider } from '../'
import { Button } from '../../../../'
import { Space } from '../../../../Layout'

export default function Controlled() {
  const [controlledValue, setControlledValue] = useState([30, 40])
  const handleChange: (value: number[]) => void = (value: number[]) =>
    setControlledValue(value)
  return (
    <>
      <FieldRangeSlider
        label="Controlled Example"
        description={`${controlledValue[0]} – ${controlledValue[1]}`}
        min={20}
        max={50}
        value={controlledValue}
        onChange={handleChange}
      />
      <Space>
        <Button onClick={() => handleChange([25, 45])}>25 — 45</Button>
        <Button onClick={() => handleChange([30, 37])}>30 — 37</Button>
        <Button onClick={() => handleChange([39, 40])}>39 — 40</Button>
      </Space>
    </>
  )
}
