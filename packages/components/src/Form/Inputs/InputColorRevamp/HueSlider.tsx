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

import React, { FC, MouseEvent, useRef } from 'react'
import styled from 'styled-components'
import { HsvSimple } from './InputColorRevamp'

interface HueSliderProps {
  className?: string
  hsv: HsvSimple
  setHsv: (hsv: HsvSimple) => void
}

const sliderHeight = 12
const sliderWidth = 200

export const HueSliderLayout: FC<HueSliderProps> = ({
  className,
  hsv,
  setHsv,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const sliderLeft = sliderRef.current?.getBoundingClientRect().left || 0
    const clickEventX = event.clientX

    const newHue = ((clickEventX - sliderLeft) / sliderWidth) * 360

    setHsv({ ...hsv, h: newHue })
  }

  return <div className={className} onClick={handleClick} ref={sliderRef} />
}

export const HueSlider = styled(HueSliderLayout)`
  background: linear-gradient(
    90deg,
    #f00 0,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00
  );

  border-radius: ${({ theme }) => theme.radii.large};
  height: ${sliderHeight}px;
  width: ${sliderWidth}px;
`
