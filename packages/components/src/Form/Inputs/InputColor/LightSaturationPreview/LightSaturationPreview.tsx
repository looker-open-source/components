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
import { simpleHSVtoFormattedColorString } from '../utils/color_format_utils'
import { SimpleHSV } from '../types'

const PREVIEW_HEIGHT = 150
const PREVIEW_WIDTH = COLOR_PICKER_WIDTH

const HANDLE_HEIGHT = theme.sizes.small
const HANDLE_WIDTH = theme.sizes.small

interface Handle2dProps {
  color: string
  isMouseDown: boolean
  x: number
  y: number
}

const Handle2d = styled.div.attrs<Handle2dProps>(({ color, x, y }) => ({
  style: {
    backgroundColor: color,
    transform: `translate(calc(${x}px - ${HANDLE_WIDTH} / 2), calc(${y}px - ${HANDLE_HEIGHT} / 2))`,
  },
}))<Handle2dProps>`
  border: 2px solid ${({ theme: { colors } }) => colors.background};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  cursor: ${({ isMouseDown }) => (isMouseDown ? 'grabbing' : 'pointer')};
  height: ${HANDLE_HEIGHT};
  left: 0;
  position: relative;
  top: 0;
  width: ${HANDLE_WIDTH};
`

interface LightSaturationPreviewProps {
  className?: string
  hsv: SimpleHSV
  setHsv: (hsv: SimpleHSV) => void
}

const LightSaturationPreviewLayout: FC<LightSaturationPreviewProps> = ({
  className,
  hsv,
  setHsv,
}) => {
  const handleX = hsv.s * PREVIEW_WIDTH
  const handleY = PREVIEW_HEIGHT - hsv.v * PREVIEW_HEIGHT

  const previewRef = useRef<HTMLDivElement>(null)
  const previewLeft = previewRef.current?.getBoundingClientRect().left || 0
  const previewTop = previewRef.current?.getBoundingClientRect().top || 0

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const clickEventX = event.clientX
    const clickEventY = event.clientY

    const newSaturation = (clickEventX - previewLeft) / PREVIEW_WIDTH
    const newValue =
      (PREVIEW_HEIGHT - (clickEventY - previewTop)) / PREVIEW_HEIGHT

    setHsv({ ...hsv, s: newSaturation, v: newValue })
  }

  const { isMouseDown, mousePos } = useMouseDragPosition(previewRef.current)
  const previousIsMouseDown = usePreviousValue(isMouseDown)

  const handleHandleDrag = () => {
    let newSaturation = (mousePos.x - previewLeft) / PREVIEW_WIDTH

    if (newSaturation > 1) {
      newSaturation = 1
    } else if (newSaturation < 0) {
      newSaturation = 0
    }

    let newValue = (PREVIEW_HEIGHT - (mousePos.y - previewTop)) / PREVIEW_HEIGHT

    if (newValue > 1) {
      newValue = 1
    } else if (newValue < 0) {
      newValue = 0
    }

    setHsv({ ...hsv, s: newSaturation, v: newValue })
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

  // Used to generate the preview's backgroudn gradient
  const backgroundColor = simpleHSVtoFormattedColorString({
    h: hsv.h,
    s: 1,
    v: 1,
  })

  const color = simpleHSVtoFormattedColorString({
    ...hsv,
  })

  return (
    <LightSaturationPreviewContainer
      backgroundColor={backgroundColor}
      className={className}
      isMouseDown={isMouseDown}
      onMouseDown={handleClick}
      ref={previewRef}
    >
      <Handle2d
        color={color}
        isMouseDown={isMouseDown}
        x={handleX}
        y={handleY}
      />
    </LightSaturationPreviewContainer>
  )
}

const LightSaturationPreviewContainer = styled.div.attrs<{
  backgroundColor: string
  isMouseDown: boolean
}>(({ backgroundColor }) => ({ style: { backgroundColor: backgroundColor } }))<{
  backgroundColor: string
  isMouseDown: boolean
}>`
  background-image: linear-gradient(0deg, #000, transparent),
    linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
  border-radius: ${({ theme }) => theme.radii.medium};
  cursor: ${({ isMouseDown }) => (isMouseDown ? 'grabbing' : 'default')};
  height: ${PREVIEW_HEIGHT}px;
  width: ${PREVIEW_WIDTH}px;
`

export const LightSaturationPreview = styled(LightSaturationPreviewLayout)``
