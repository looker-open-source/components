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

import { useMouseDragPosition, usePreviousValue } from '@looker/components/src'
import React, { FC, MouseEvent, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { HsvSimple } from '../InputColorRevamp'

const previewHeight = 150
const previewWidth = 200

const handleHeight = 20
const handleWidth = 20

interface Handle2dProps {
  color: string
  isMouseDown: boolean
  x: number
  y: number
}

const Handle2d = styled.div.attrs<Handle2dProps>(({ color, x, y }) => ({
  style: {
    backgroundColor: color,
    transform: `translate(${x}px,${y}px)`,
  },
}))<Handle2dProps>`
  border: 2px solid ${({ theme: { colors } }) => colors.background};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  cursor: ${({ isMouseDown }) => (isMouseDown ? 'grabbing' : 'pointer')};
  height: ${handleHeight}px;
  left: 0;
  position: relative;
  top: 0;
  width: ${handleWidth}px;
`

interface SaturationAndLightnessPreviewProps {
  backgroundColor: string
  className?: string
  color: string
  hsv: HsvSimple
  setHsv: (hsv: HsvSimple) => void
}

export const SaturationAndLightnessPreviewLayout: FC<SaturationAndLightnessPreviewProps> = ({
  backgroundColor,
  className,
  color,
  hsv,
  setHsv,
}) => {
  const handleX = hsv.s * previewWidth - handleWidth / 2
  const handleY = previewHeight - hsv.v * previewHeight - handleHeight / 2

  const previewRef = useRef<HTMLDivElement>(null)
  const previewLeft = previewRef.current?.getBoundingClientRect().left || 0
  const previewTop = previewRef.current?.getBoundingClientRect().top || 0

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
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

  return (
    <SaturationAndLightnessPreviewContainer
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
    </SaturationAndLightnessPreviewContainer>
  )
}

const SaturationAndLightnessPreviewContainer = styled.div.attrs<{
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
  height: ${previewHeight}px;
  width: ${previewWidth}px;
`

export const SaturationAndLightnessPreview = styled(
  SaturationAndLightnessPreviewLayout
)``
