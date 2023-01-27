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
import type { ColorPickerProps } from '../types'
import { simpleHsvToHex } from '../utils'
import { Handle2d } from '../Handle'

const LightSaturationPreviewLayout = ({
  className,
  hsv,
  setHsv,
  width: previewWidth,
}: ColorPickerProps) => {
  const previewHeight = previewWidth * 0.75

  const handleX = hsv.s * previewWidth
  const handleY = previewHeight - hsv.v * previewHeight

  const previewRef = useRef<HTMLDivElement>(null)
  const previewLeft = previewRef.current?.getBoundingClientRect().left || 0
  const previewTop = previewRef.current?.getBoundingClientRect().top || 0

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    const clickEventX = event.clientX
    const clickEventY = event.clientY

    const newSaturation = (clickEventX - previewLeft) / previewWidth
    const newValue =
      (previewHeight - (clickEventY - previewTop)) / previewHeight

    setHsv({ ...hsv, s: newSaturation, v: newValue })
  }

  const { isMouseDown, mousePos } = useMouseDragPosition(previewRef.current)
  const previousIsMouseDown = usePreviousValue(isMouseDown)

  const handleHandleDrag = () => {
    let newSaturation = (mousePos.x - previewLeft) / previewWidth

    if (newSaturation > 1) {
      newSaturation = 1
    } else if (newSaturation < 0) {
      newSaturation = 0
    }

    let newValue = (previewHeight - (mousePos.y - previewTop)) / previewHeight

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
  const backgroundColor = simpleHsvToHex({
    h: hsv.h,
    s: 1,
    v: 1,
  })

  const color = simpleHsvToHex({
    ...hsv,
  })

  return (
    <LightSaturationPreviewContainer
      backgroundColor={backgroundColor}
      className={className}
      isMouseDown={isMouseDown}
      onMouseDown={handleMouseDown}
      height={previewHeight}
      ref={previewRef}
      width={previewWidth}
      data-testid="light-saturation-preview"
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

interface LightSaturationPreviewContainerProps
  extends Pick<ColorPickerProps, 'width'> {
  backgroundColor: string
  isMouseDown: boolean
  height: number
}

const LightSaturationPreviewContainer = styled.div.attrs<LightSaturationPreviewContainerProps>(
  ({ backgroundColor }) => ({ style: { backgroundColor } })
)<LightSaturationPreviewContainerProps>`
  background-image: linear-gradient(0deg, #000, transparent),
    linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
  border-radius: ${({ theme }) => theme.radii.medium};
  cursor: ${({ isMouseDown }) => (isMouseDown ? 'grabbing' : 'default')};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`

export const LightSaturationPreview = styled(LightSaturationPreviewLayout)``
