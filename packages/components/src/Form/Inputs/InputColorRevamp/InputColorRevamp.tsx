/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { SpaceVertical } from '../../../Layout'
import {
  simpleHSVtoFormattedColorString,
  str2simpleHsv,
} from '../InputColor/utils/color_format_utils'
import { HueSlider } from './HueSlider'
import { SaturationAndLightnessPreview } from './SaturationAndLightnessPreview'

export interface HsvSimple {
  h: number
  s: number
  v: number
}

export interface InputColorRevampProps {
  color: string
  setColor: (color: string) => void
}

const InputColorRevampLayout: FC<InputColorRevampProps> = ({
  color,
  setColor,
}) => {
  const [hsv, setHsv] = useState<HsvSimple>(str2simpleHsv(color))

  // Passed back to the user via a state setter
  const selectedColor = simpleHSVtoFormattedColorString(hsv)
  setColor(selectedColor)

  // Used as the background color for the SaturationAndLightnessPreview and
  // the handle on the HueSlider
  const fullColor = simpleHSVtoFormattedColorString({
    ...hsv,
    s: 1,
    v: 1,
  })

  return (
    <SpaceVertical gap="medium">
      <SaturationAndLightnessPreview
        backgroundColor={fullColor}
        color={selectedColor}
        hsv={hsv}
        setHsv={setHsv}
      />
      <HueSlider color={fullColor} hsv={hsv} setHsv={setHsv} />
    </SpaceVertical>
  )
}

export const InputColorRevamp = styled(InputColorRevampLayout)``
