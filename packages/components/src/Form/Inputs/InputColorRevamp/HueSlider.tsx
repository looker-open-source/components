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

const sliderHeight = 12
const sliderWidth = 200

const handleHeight = 20
const handleWidth = 20

interface HandleProps {
  color: string
  position: number
}

const Handle = styled.div<HandleProps>`
  background: ${({ color }) => color};
  border: 2px solid ${({ theme: { colors } }) => colors.background};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  cursor: pointer;
  height: ${handleHeight}px;
  left: 0;
  position: relative;
  /* Vertically centers slider */
  top: calc(${sliderHeight}px / 2 - ${handleHeight}px / 2);
  transform: translateX(${({ position = 0 }) => `${position}px`});
  width: ${handleWidth}px;
  &:focus {
    border-width: 5px;
    outline: none;
    z-index: 1;
  }
`

interface HueSliderProps {
  className?: string
  color: string
  hsv: HsvSimple
  setHsv: (hsv: HsvSimple) => void
}

export const HueSliderLayout: FC<HueSliderProps> = ({
  className,
  color,
  hsv,
  setHsv,
}) => {
  const handlePosition = (hsv.h / 360) * sliderWidth - handleWidth / 2

  const sliderRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const sliderLeft = sliderRef.current?.getBoundingClientRect().left || 0
    const clickEventX = event.clientX

    const newHue = ((clickEventX - sliderLeft) / sliderWidth) * 360

    setHsv({ ...hsv, h: newHue })
  }

  return (
    <div className={className} onClick={handleClick} ref={sliderRef}>
      <Handle
        color={color}
        onClick={(event) => {
          // Prevents clicks on handle from triggering color change
          event.stopPropagation()
        }}
        position={handlePosition}
      />
    </div>
  )
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
