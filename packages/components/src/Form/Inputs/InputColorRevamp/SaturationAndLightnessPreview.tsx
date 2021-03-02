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
import { HsvSimple } from '../InputColorRevamp'

const previewHeight = 150
const previewWidth = 200

const handleHeight = 20
const handleWidth = 20

interface Handle2dProps {
  color: string
  x: number
  y: number
}

const Handle2d = styled.div<Handle2dProps>`
  background: ${({ color }) => color};
  border: 2px solid ${({ theme: { colors } }) => colors.background};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  cursor: pointer;
  height: ${handleHeight}px;
  left: 0;
  position: relative;
  top: 0;
  transform: translate(${({ x = 0 }) => `${x}px`}, ${({ y = 0 }) => `${y}px`});
  width: ${handleWidth}px;
  &:focus {
    border-width: 5px;
    outline: none;
    z-index: 1;
  }
`

interface SaturationAndLightnessPreviewProps {
  backgroundColor: string
  className?: string
  color: string
  hsv: HsvSimple
  setHsv: (hsv: HsvSimple) => void
}

export const SaturationAndLightnessPreviewLayout: FC<SaturationAndLightnessPreviewProps> = ({
  className,
  color,
  hsv,
  setHsv,
}) => {
  const handleX = hsv.s * previewWidth - handleWidth / 2
  const handleY = previewHeight - hsv.v * previewHeight - handleHeight / 2

  const previewRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const previewLeft = previewRef.current?.getBoundingClientRect().left || 0
    const previewTop = previewRef.current?.getBoundingClientRect().top || 0
    const clickEventX = event.clientX
    const clickEventY = event.clientY

    const newSaturation = (clickEventX - previewLeft) / previewWidth
    const newValue =
      (previewHeight - (clickEventY - previewTop)) / previewHeight

    setHsv({ ...hsv, s: newSaturation, v: newValue })
  }

  return (
    <div className={className} onClick={handleClick} ref={previewRef}>
      <Handle2d
        color={color}
        onClick={(event) => {
          // Prevents clicks on handle from triggering color change
          event.stopPropagation()
        }}
        x={handleX}
        y={handleY}
      />
    </div>
  )
}

export const SaturationAndLightnessPreview = styled(
  SaturationAndLightnessPreviewLayout
)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: linear-gradient(0deg, #000, transparent),
    linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
  border-radius: ${({ theme }) => theme.radii.medium};
  height: ${previewHeight}px;
  width: ${previewWidth}px;
`
