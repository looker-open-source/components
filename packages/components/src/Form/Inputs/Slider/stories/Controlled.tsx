/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import { Slider } from '..';
import { Paragraph, Space } from '../../../../';
import type { SliderProps } from '../';

export default function Controlled(props: SliderProps) {
  const { value: valueProp = 5, onChange: _onChange, ...restProps } = props;

  const [sliderValue, setSliderValue] = useState(valueProp);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(event.target.value);
  };

  return (
    <Space>
      <Slider onChange={onChange} value={sliderValue} {...restProps} />
      <Paragraph>
        <strong>Value:</strong> {sliderValue}
      </Paragraph>
    </Space>
  );
}
