/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Button, Heading, Space } from '../../../../'
import { RangeSlider } from '..'
import type { RangeSliderProps } from '../'

export default function Disabled(props: RangeSliderProps) {
  const { value: valueProp = [3, 7], ...restProps } = props

  const [sliderValue, setSliderValue] = useState(valueProp)
  return (
    <>
      <Heading>
        <strong>Value:</strong> {sliderValue[0]} &mdash; {sliderValue[1]}
      </Heading>
      <RangeSlider
        onChange={setSliderValue}
        value={sliderValue}
        {...restProps}
      />
      <Space mt="small">
        <Button onClick={() => setSliderValue([0, 10])}>0 &mdash; 10</Button>
        <Button onClick={() => setSliderValue([2, 8])}>2 &mdash; 8</Button>
        <Button onClick={() => setSliderValue([4, 6])}>4 &mdash; 6</Button>
      </Space>
    </>
  )
}
