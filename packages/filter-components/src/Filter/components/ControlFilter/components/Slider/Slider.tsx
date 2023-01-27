/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SyntheticEvent } from 'react'
import React from 'react'
import styled from 'styled-components'
import { Slider as SliderComponent } from '@looker/components'
import type { SliderProps } from './types'

export const Slider = ({ onChange, value, options }: SliderProps) => {
  const optionsWithDefaults = { min: 0, max: 100, ...options }

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    onChange(parseInt(value, 10))
  }

  return (
    <SliderWrapper>
      <SliderComponent
        min={optionsWithDefaults.min}
        max={optionsWithDefaults.max}
        value={value}
        onChange={handleChange}
      />
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  width: 100%;
`
