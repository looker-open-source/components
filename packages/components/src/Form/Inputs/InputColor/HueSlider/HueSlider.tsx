/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { MouseEvent } from 'react'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMouseDragPosition, usePreviousValue } from '../../../../utils'
import { simpleHsvToHex } from '../utils'
import type { ColorPickerProps } from '../types'
import { Handle } from '../Handle'

export const HueSliderLayout = ({
  className,
  hsv,
  setHsv,
  width,
}: ColorPickerProps) => {
  const handlePosition = (hsv.h / 360) * width

  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderLeft = sliderRef.current?.getBoundingClientRect().left || 0

  const handleSliderClick = (event: MouseEvent<HTMLDivElement>) => {
    const clickEventX = event.clientX
    const newHue = ((clickEventX - sliderLeft) / width) * 360
    setHsv({ ...hsv, h: newHue })
  }

  const { isMouseDown, mousePos } = useMouseDragPosition(sliderRef.current)
  const previousIsMouseDown = usePreviousValue(isMouseDown)

  const handleHandleDrag = () => {
    let newHue = ((mousePos.x - sliderLeft) / width) * 360

    // Keep user from sliding off the track
    if (newHue > 360) {
      newHue = 360
    } else if (newHue < 0) {
      newHue = 0
    }
    setHsv({ ...hsv, h: newHue })
  }

  /*
   * Only fire mouse drag event when mouse moves AFTER initial click
   */
  useEffect(
    () => {
      if (isMouseDown && previousIsMouseDown) {
        handleHandleDrag()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mousePos]
  )

  // Should have full saturation and value to match slider tracl colors
  const sliderHandleColor = simpleHsvToHex({ ...hsv, s: 1, v: 1 })

  return (
    <HueSliderTrack
      className={className}
      isMouseDown={isMouseDown}
      onMouseDown={handleSliderClick}
      ref={sliderRef}
      width={width}
    >
      <Handle
        color={sliderHandleColor}
        isMouseDown={isMouseDown}
        x={handlePosition}
      />
    </HueSliderTrack>
  )
}

interface HueSliderTrackProps {
  isMouseDown: boolean
  width: number
}

const HueSliderTrack = styled.div<HueSliderTrackProps>`
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
  cursor: ${({ isMouseDown }) => (isMouseDown ? 'grabbing' : 'default')};
  height: ${({ theme }) => theme.space.u3};
  width: ${({ width }) => width}px;
`

export const HueSlider = styled(HueSliderLayout)``
