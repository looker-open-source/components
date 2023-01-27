/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { SpaceVertical } from '../../../../Layout'
import { LightSaturationPreview, HueSlider } from '..'
import type { ColorPickerProps } from '../types'

const ColorPickerInternal = ({ hsv, setHsv, width }: ColorPickerProps) => (
  <SpaceVertical gap="u4" data-testid="color-picker">
    <LightSaturationPreview hsv={hsv} setHsv={setHsv} width={width} />
    <HueSlider hsv={hsv} setHsv={setHsv} width={width} />
  </SpaceVertical>
)

export const ColorPicker = styled(ColorPickerInternal)``
