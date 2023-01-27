/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import styled from 'styled-components'
import isNumber from 'lodash/isNumber'
import { RangeSlider as RangeSliderComponent } from '@looker/components'
import type { RangeSliderProps } from './types'

export const RangeSlider = ({
  value,
  options,
  onChange,
  name,
}: RangeSliderProps) => {
  const bounds = { min: 0, max: 100, ...(options || {}) }
  const handleOnChange = (v: number[]) => {
    onChange({ min: v[0], max: v[1] })
  }

  return (
    <RangeSliderWrapper>
      <RangeSliderComponent
        max={bounds.max}
        min={bounds.min}
        value={[
          isNumber(value.min) ? value.min : bounds.min,
          isNumber(value.max) ? value.max : bounds.max,
        ]}
        onChange={handleOnChange}
        name={name}
      />
    </RangeSliderWrapper>
  )
}

const RangeSliderWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  min-width: 150px;
  padding: 0 ${({ theme }) => theme.space.small};
  width: 100%;
`
