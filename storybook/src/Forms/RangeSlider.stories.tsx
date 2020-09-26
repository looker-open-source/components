/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { useState } from 'react'
import { FieldRangeSlider, Space, Button } from '@looker/components'

export default {
  title: 'Forms/RangeSlider',
}

export const Basic = () => <FieldRangeSlider />
export const Disabled = () => <FieldRangeSlider disabled />
export const Steps = () => <FieldRangeSlider min={100} max={1000} step={50} />
export const Floating = () => (
  <FieldRangeSlider min={0.1} max={1.1} step={0.1} />
)
export const ReadOnly = () => (
  <FieldRangeSlider defaultValue={[3, 7]} readOnly />
)

export const Controlled = () => {
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
