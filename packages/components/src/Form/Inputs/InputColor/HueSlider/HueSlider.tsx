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

import { theme } from '@looker/design-tokens'
import React, { FC, MouseEvent, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMouseDragPosition, usePreviousValue } from '../../../../utils'
import { COLOR_PICKER_WIDTH } from '../ColorPicker/dimensions'
import { simpleHsvToHex } from '../utils'
import { SimpleHSV } from '../types'

const SLIDER_HEIGHT = 12
const SLIDER_WIDTH = COLOR_PICKER_WIDTH

const HANDLE_HEIGHT = theme.sizes.small
const HANDLE_WIDTH = theme.sizes.small

interface HandleProps {
  color: string
  isMouseDown: boolean
  position: number
}

const HueSliderHandle = styled.div.attrs<HandleProps>(
  ({ color, position }) => ({
    style: {
      background: color,
      // The ${HANDLE_WIDTH} / 2 centers the handle on the click position
      transform: `translateX(calc(${position}px - ${HANDLE_WIDTH} / 2))`,
    },
  })
)<HandleProps>`
  border: 2px solid ${({ theme: { colors } }) => colors.background};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  cursor: ${({ isMouseDown }) => (isMouseDown ? 'grabbing' : 'pointer')};
  height: ${HANDLE_HEIGHT};
  left: 0;
  position: relative;
  /* Vertically centers slider */
  top: calc(${SLIDER_HEIGHT}px / 2 - ${HANDLE_HEIGHT} / 2);
  width: ${HANDLE_WIDTH};
`

interface HueSliderProps {
  className?: string
  hsv: SimpleHSV
  setHsv: (hsv: SimpleHSV) => void
}

export const HueSliderLayout: FC<HueSliderProps> = ({
  className,
  hsv,
  setHsv,
}) => {
  const handlePosition = (hsv.h / 360) * SLIDER_WIDTH

  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderLeft = sliderRef.current?.getBoundingClientRect().left || 0

  const handleSliderClick = (event: MouseEvent<HTMLDivElement>) => {
    const clickEventX = event.clientX
    const newHue = ((clickEventX - sliderLeft) / SLIDER_WIDTH) * 360
    setHsv({ ...hsv, h: newHue })
  }

  const { isMouseDown, mousePos } = useMouseDragPosition(sliderRef.current)
  const previousIsMouseDown = usePreviousValue(isMouseDown)

  const handleHandleDrag = () => {
    let newHue = ((mousePos.x - sliderLeft) / SLIDER_WIDTH) * 360

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
    >
      <HueSliderHandle
        color={sliderHandleColor}
        isMouseDown={isMouseDown}
        position={handlePosition}
      />
    </HueSliderTrack>
  )
}

const HueSliderTrack = styled.div<{ isMouseDown: boolean }>`
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
  height: ${SLIDER_HEIGHT}px;
  width: ${SLIDER_WIDTH}px;
`

export const HueSlider = styled(HueSliderLayout)``
