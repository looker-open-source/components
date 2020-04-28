/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import React, {
  FC,
  useState,
  KeyboardEvent,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import { SpaceProps, reset, space } from '@looker/design-tokens'
import { WidthProps } from 'styled-system'
import styled from 'styled-components'
import sortBy from 'lodash/sortBy'
import indexOf from 'lodash/indexOf'
import startsWith from 'lodash/startsWith'
import partial from 'lodash/partial'
import {
  useMeasuredRef,
  useMouseDragPosition,
  usePreviousValue,
  useReadOnlyWarn,
} from '../../../utils'
import { ValidationType } from '../../ValidationMessage'

export interface RangeSliderProps extends SpaceProps, WidthProps {
  'aria-labelledby'?: string
  max?: number
  min?: number
  step?: number
  onChange?: (value: number[]) => void
  value?: number[]
  defaultValue?: number[]
  disabled?: boolean
  readOnly?: boolean
  validationType?: ValidationType
  className?: string
}

type ThumbIndices = 0 | 1 | undefined

const sort = (arr: number[]) => arr.sort((a, b) => a - b)

const findClosestIndex = (value: number[], newPoint: number): number => {
  const { index: closestIndex } = sortBy(
    value.map((p, i) => ({
      distance: Math.abs(p - newPoint),
      index: i,
    })),
    'distance'
  )[0]

  return closestIndex
}

const createNewValue = (
  value: number[],
  newPoint: number,
  focusedIndex?: ThumbIndices
) => {
  const indexToReplace =
    focusedIndex === undefined
      ? findClosestIndex(value, newPoint)
      : focusedIndex

  const newValue = Object.assign([], value, { [indexToReplace]: newPoint })
  return sort(newValue)
}

const roundToStep = (point: number, step: number) => {
  return Math.round(point / step) * step
}

const calculatePointValue = (
  mouseX: number,
  containerRect: ClientRect,
  min: number,
  max: number,
  step: number
): number => {
  // calculate point value based on where user clicked within container
  const mousePosition = Math.min(
    Math.max(mouseX - containerRect.left, 0),
    containerRect.width
  )
  const possibleValueRange = max - min
  const newPoint =
    (mousePosition / containerRect.width) * possibleValueRange + min

  return roundToStep(newPoint, step)
}

export const InternalRangeSlider: FC<RangeSliderProps> = ({
  className,
  min = 0,
  max = 10,
  step = 1,
  value: valueProp,
  defaultValue: defaultValueProp,
  onChange,
  disabled = false,
  readOnly: readOnlyProp = false,
}) => {
  const unintentionalReadOnly = useReadOnlyWarn(
    'RangeSlider',
    valueProp,
    onChange
  )
  const readOnly = readOnlyProp || unintentionalReadOnly

  const [value, setValue] = useState(
    sort(valueProp || defaultValueProp || [min, max])
  )
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [focusedThumb, setFocusedThumb] = useState<ThumbIndices>()

  const callbackRef = useCallback((node) => {
    if (node !== null) {
      setContainerRef(node)
    }
  }, [])

  const containerRect = useMeasuredRef(containerRef)

  const { mousePos, isMouseDown } = useMouseDragPosition(containerRef)
  const prevMouseDown = usePreviousValue(isMouseDown)

  const minThumbRef = useRef<HTMLDivElement>(null)
  const maxThumbRef = useRef<HTMLDivElement>(null)

  // calculate thumb position based on set value
  const [minValue, maxValue] = value
  const minPos = ((minValue - min) / (max - min)) * containerRect.width
  const maxPos = ((maxValue - min) / (max - min)) * containerRect.width
  const fillWidth = maxPos - minPos

  const thumbRefs = [minThumbRef, maxThumbRef]

  const focusChangedPoint = (newValue: number[], newPoint: number) => {
    // focus/highlight the thumb that moved on click
    const indexToFocus = indexOf(newValue, newPoint)
    const refToFocus = thumbRefs[indexToFocus]
    requestAnimationFrame(() => {
      // delaying focus is necessary for it to work with mouseDown event
      refToFocus.current && refToFocus.current.focus()
    })
  }

  const incrementPoint = (point: number) => {
    return Math.min(point + step, max)
  }

  const decrementPoint = (point: number) => {
    return Math.max(point - step, min)
  }

  const handleKeyboardNav = (e: KeyboardEvent) => {
    if (!disabled && !readOnly) {
      if (startsWith(e.key, 'Arrow') && focusedThumb !== undefined) {
        const unfocusedThumb = focusedThumb === 0 ? 1 : 0
        const mutationFn =
          e.key === 'ArrowUp' || e.key === 'ArrowRight'
            ? incrementPoint
            : decrementPoint
        const newPoint = mutationFn(value[focusedThumb])
        const newValue = sort([newPoint, value[unfocusedThumb]])
        focusChangedPoint(newValue, newPoint)
        setValue(newValue)
        onChange && onChange(newValue)
      }
    }
  }

  const focusMinValue = () => {
    if (!disabled && !readOnly) {
      setFocusedThumb(0)
    }
  }

  const focusMaxValue = () => {
    if (!disabled && !readOnly) {
      setFocusedThumb(1)
    }
  }

  const handleBlur = () => {
    setFocusedThumb(undefined)
  }

  const handleMouseEvent = (maintainFocus: boolean) => {
    if (!disabled && !readOnly) {
      // update slider positions when clicking
      const newPoint = calculatePointValue(
        mousePos.x,
        containerRect,
        min,
        max,
        step
      )
      const newValue = createNewValue(
        value,
        newPoint,
        maintainFocus ? focusedThumb : undefined
      )
      focusChangedPoint(newValue, newPoint)
      setValue(newValue)
      onChange && onChange(newValue)
    }
  }

  const handleMouseDown = partial(handleMouseEvent, false)
  const handleMouseDrag = partial(handleMouseEvent, true)

  useEffect(
    () => {
      if (isMouseDown && prevMouseDown) {
        // only run callback when moving, but not on the initial down click
        handleMouseDrag()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mousePos, isMouseDown]
  )

  // Controlled Component: update value state when external value prop changes
  useEffect(() => {
    valueProp && setValue(sort(valueProp))
  }, [valueProp])

  return (
    <div onMouseDown={handleMouseDown} className={className} ref={callbackRef}>
      <SliderTrack>
        <SliderFill
          fillStart={minPos}
          fillWidth={fillWidth}
          disabled={disabled}
        />
        <ThumbLabel
          position={minPos}
          focus={focusedThumb === 0}
          disabled={disabled}
        >
          {minValue}
        </ThumbLabel>
        <ThumbLabel
          position={maxPos}
          focus={focusedThumb === 1}
          disabled={disabled}
        >
          {maxValue}
        </ThumbLabel>
        <Thumb
          position={minPos}
          tabIndex={(disabled ? '-1' : '0') as never} // "as never" ¯\_(ツ)_/¯
          onFocus={focusMinValue}
          onBlur={handleBlur}
          onKeyDown={handleKeyboardNav}
          ref={minThumbRef}
          disabled={disabled}
        />
        <Thumb
          position={maxPos}
          tabIndex={(disabled ? '-1' : '0') as never} // "as never" ¯\_(ツ)_/¯
          onFocus={focusMaxValue}
          onBlur={handleBlur}
          onKeyDown={handleKeyboardNav}
          ref={maxThumbRef}
          disabled={disabled}
        />
      </SliderTrack>
    </div>
  )
}

export const RangeSlider = styled(InternalRangeSlider)`
  ${reset}
  ${space}
  padding: ${({ theme: { space } }) => `${space.xlarge} 0 ${space.small}`};
  max-width: 500px;
`

const SliderTrack = styled.div`
  height: 4px;
  background: ${({ theme }) => theme.colors.palette.charcoal200};
  border-radius: 2px;
  position: relative;
`

interface ThumbLabelProps {
  position: number
  focus: boolean
  disabled: boolean
}

const ThumbLabel = styled.div<ThumbLabelProps>`
  user-select: none;
  position: absolute;
  top: -30px;
  transform: translateX(calc(${({ position = 0 }) => `${position}px`} - 50%));
  text-align: center;
  color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.palette.charcoal700 : colors.semanticColors.primary.main};
  padding: 0 0.5rem;
  border-radius: 1rem;
  z-index: ${({ focus }) => (focus ? 1 : 0)};
  background: ${({ theme, focus }) =>
    focus ? theme.colors.palette.purple100 : `rgba(255, 255, 255, 0.8)`};
`

interface ThumbProps {
  position: number
  tabIndex: string
  disabled: boolean
}

const Thumb = styled.div<ThumbProps>`
  border-radius: 100%;
  cursor: pointer;
  border: 3px solid
    ${({ theme: { colors }, disabled }) =>
      disabled
        ? colors.palette.charcoal500
        : colors.semanticColors.primary.main};
  height: 16px;
  width: 16px;
  background: ${({ theme }) => theme.colors.palette.white};
  position: absolute;
  top: -6px;
  margin-left: -8px;
  transform: translateX(${({ position = 0 }) => `${position}px`});
  &:focus {
    outline: none;
    border-width: ${({ disabled }) => (disabled ? '3px' : '5px')};
    z-index: 1;
  }
`

interface SliderFillProps {
  fillStart: number
  fillWidth: number
  disabled: boolean
}

const SliderFill = styled.div<SliderFillProps>`
  height: 100%;
  background: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.palette.charcoal400 : colors.semanticColors.primary.main};
  position: absolute;
  left: ${({ fillStart }) => fillStart}px;
  width: ${({ fillWidth }) => fillWidth}px;
`
