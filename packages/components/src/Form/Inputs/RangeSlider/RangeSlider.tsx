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

import type { Ref, KeyboardEvent } from 'react'
import React, {
  forwardRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import type {
  SpaceProps,
  TypographyProps,
  WidthProps,
} from '@looker/design-tokens'
import { reset, space, typography } from '@looker/design-tokens'
import styled from 'styled-components'
import sortBy from 'lodash/sortBy'
import indexOf from 'lodash/indexOf'
import startsWith from 'lodash/startsWith'
import partial from 'lodash/partial'
import map from 'lodash/map'
import isEqual from 'lodash/isEqual'

import {
  useMeasuredElement,
  useMouseDragPosition,
  useReadOnlyWarn,
  usePreviousValue,
  useTranslation,
} from '../../../utils'
import type { ValidationType } from '../../ValidationMessage'
import { getPrecision, precisionRound } from './precisionUtils'

export interface RangeSliderProps
  extends SpaceProps,
    WidthProps,
    TypographyProps {
  'aria-labelledby'?: string
  'aria-describedby'?: string
  name?: string
  max?: number
  min?: number
  step?: number
  onChange?: (value: number[]) => void
  value?: number[]
  defaultValue?: number[]
  disabled?: boolean
  id?: string
  readOnly?: boolean
  validationType?: ValidationType
  className?: string
}

type ThumbIndices = 0 | 1 | undefined

const sort = (arr: number[]) => arr.sort((a, b) => a - b)

/*
 *  Takes a new number (newPoint) and decides which min or max value should be replaced
 */
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

/*
 * Immutably updates value array with newPoint
 */
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

/*
 * Takes a number and rounds it to the nearest multiple of step above the `minBound` starting value
 * Cannot exceed max value.
 */
const roundToStep = (
  min: number,
  max: number,
  step: number,
  newPoint: number
) => {
  const stepPrecision = getPrecision(step)

  const roundedPoint = precisionRound(
    ((newPoint - min) / step) * step + min,
    stepPrecision
  )
  return Math.max(Math.min(roundedPoint, max), min)
}

/*
 * Returns a new point value based on mouse position relative to component wrapper.
 * Cannot exceed max value.
 */
const calculatePointValue = (
  mouseX: number,
  containerRect: DOMRect,
  min: number,
  max: number,
  step: number
): number => {
  // calculate point value based on where user clicked within container
  const mousePosition = mouseX - containerRect.left
  const possibleValueRange = max - min
  const newPoint =
    (mousePosition / containerRect.width) * possibleValueRange + min

  return roundToStep(min, max, step, newPoint)
}

/*
 *Prevent value from exceeding min—max range
 */
const boundValueProp = (min: number, max: number, value?: number[]) => {
  return map(value || [min, max], (point: number) => {
    const boundedPoint = Math.max(Math.min(point, max), min)
    if (boundedPoint !== point) {
      // eslint-disable-next-line no-console
      console.warn(
        `<RangeSlider />: The value '${point}' falls outside the possible range (MIN: ${min}, MAX: ${max}). Please adjust min and max props accordingly.`
      )
    }
    return boundedPoint
  })
}

export const InternalRangeSlider = forwardRef(
  (
    {
      className,
      id,
      min = 0,
      max = 10,
      step = 1,
      value: valueFromProps,
      defaultValue: defaultValueProp,
      onChange,
      disabled = false,
      readOnly: readOnlyProp = false,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      name,
    }: RangeSliderProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const { t } = useTranslation('RangeSlider')

    // Create a more stable value prop
    // (an array may be "new" even if the numbers haven't changed)
    const valuePropMin = valueFromProps?.[0]
    const valuePropMax = valueFromProps?.[1]
    const valueProp = useMemo(() => {
      if (valuePropMin === undefined || valuePropMax === undefined) {
        return undefined
      }
      return [valuePropMin, valuePropMax]
    }, [valuePropMin, valuePropMax])

    /*
     * Validate props and render any necessary warnings
     * ------------------------------------------------------
     */
    const unintentionalReadOnly = useReadOnlyWarn(
      'RangeSlider',
      valueProp,
      onChange
    )
    const readOnly = readOnlyProp || unintentionalReadOnly

    /*
     * Internal component state and refs
     * ------------------------------------------------------
     */
    const [valueState, setValue] = useState(() => {
      // make sure value array doesn't extend past min/max bounds
      const boundedValue = boundValueProp(
        min,
        max,
        valueProp || defaultValueProp
      )
      return sort(boundedValue)
    })

    // Create a more stable value state
    // (an array may be "new" even if the numbers haven't changed)
    const valueMin = valueState[0]
    const valueMax = valueState[1]
    const value = useMemo(() => {
      return [valueMin, valueMax]
    }, [valueMin, valueMax])

    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
    const [focusedThumb, setFocusedThumb] = useState<ThumbIndices>()

    const [containerRect, refreshDomRect] = useMeasuredElement(containerRef)

    const { mousePos, isMouseDown } = useMouseDragPosition(containerRef)
    const previousIsMouseDown = usePreviousValue(isMouseDown)

    const minThumbRef = useRef<HTMLDivElement>(null)
    const maxThumbRef = useRef<HTMLDivElement>(null)

    // calculate thumb position based on set value
    const [minValue, maxValue] = value
    const minPos = ((minValue - min) / (max - min)) * containerRect.width
    const maxPos = ((maxValue - min) / (max - min)) * containerRect.width
    const fillWidth = maxPos - minPos

    /*
     * Behavioral callbacks
     * ------------------------------------------------------
     */

    const roundSliderValue = partial(roundToStep, min, max, step)

    const focusChangedPoint = useCallback(
      (newValue: number[], newPoint: number) => {
        // focus/highlight the thumb that moved on click
        const indexToFocus = indexOf(newValue, newPoint) as 0 | 1
        const thumbRefs = [minThumbRef, maxThumbRef]
        const refToFocus = thumbRefs[indexToFocus]
        setFocusedThumb(indexToFocus)
        refToFocus.current && refToFocus.current.focus()
      },
      []
    )

    const incrementPoint = (point: number, stepMultiplier = 1) =>
      point + step * stepMultiplier

    const decrementPoint = (point: number, stepMultiplier = 1) =>
      point - step * stepMultiplier

    const handleKeyboardNav = (e: KeyboardEvent) => {
      if (!disabled && !readOnly) {
        if (startsWith(e.key, 'Arrow') && focusedThumb !== undefined) {
          e.preventDefault() // prevent arrows from browser window
          const unfocusedThumb = focusedThumb === 0 ? 1 : 0
          const mutationFn =
            e.key === 'ArrowUp' || e.key === 'ArrowRight'
              ? incrementPoint
              : decrementPoint
          const newPoint = roundSliderValue(
            mutationFn(value[focusedThumb], e.shiftKey ? 10 : 1)
          )
          const newValue = sort([newPoint, value[unfocusedThumb]])
          focusChangedPoint(newValue, newPoint)
          setValue(newValue)
          onChange?.(newValue)
        }
      }
    }

    const focusMinThumb = () => {
      if (!disabled && !readOnly) {
        setFocusedThumb(0)
      }
    }

    const focusMaxThumb = () => {
      if (!disabled && !readOnly) {
        setFocusedThumb(1)
      }
    }

    const handleBlur = () => {
      setFocusedThumb(undefined)
    }

    const handleMouseEvent = useCallback(
      (maintainFocus: boolean) => {
        if (!disabled && !readOnly && mousePos.x) {
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
          if (!isEqual(value, newValue)) {
            setValue(newValue)
            onChange?.(newValue)
          }
        }
      },
      [
        containerRect,
        disabled,
        focusChangedPoint,
        focusedThumb,
        max,
        min,
        mousePos.x,
        onChange,
        readOnly,
        step,
        value,
      ]
    )

    const handleMouseDown = useMemo(
      () => partial(handleMouseEvent, false),
      [handleMouseEvent]
    )
    const handleMouseDrag = useMemo(
      () => partial(handleMouseEvent, true),
      [handleMouseEvent]
    )

    /*
     * Mouse down event (and re-measure the client rectangle values before calculating value).
     * This ensures accurate calculation when slider has moved to new location on page due
     * to asynchronous dom changes.
     */
    useEffect(() => {
      if (isMouseDown) {
        refreshDomRect() // re-measure rectangle when isMouseDown changes from false to true
      }
    }, [isMouseDown, refreshDomRect])

    useEffect(() => {
      if (isMouseDown) {
        handleMouseDown() // fire mouseDown event after containerRect measurements are refreshed
      }
    }, [isMouseDown, handleMouseDown, containerRect])

    /*
     * Only fire mouse drag event when mouse moves AFTER initial click
     */
    useEffect(() => {
      if (isMouseDown && previousIsMouseDown) {
        handleMouseDrag()
      }
    }, [isMouseDown, previousIsMouseDown, handleMouseDrag, mousePos])

    /*
     * Controlled Component: update value state when external value prop changes
     */
    const previousValueProp = usePreviousValue(valueProp)
    useEffect(() => {
      const boundedValueProp = boundValueProp(min, max, valueProp)
      if (
        valueProp &&
        !isEqual(value, boundedValueProp) &&
        !isEqual(valueProp, previousValueProp)
      ) {
        setValue(sort(boundedValueProp))
      }
    }, [valueProp, previousValueProp, value, min, max])

    /*
     * Call onChange if min/max update and valueProp is not within them
     */
    useEffect(() => {
      const boundedValueProp = boundValueProp(min, max, valueProp)
      if (valueProp && !isEqual(valueProp, boundedValueProp)) {
        onChange?.(sort(boundedValueProp))
      }
    }, [valueProp, onChange, min, max])

    /*
     * Render markup!
     * -------------------------------------------
     */

    return (
      <div
        data-testid="range-slider-wrapper"
        onTouchEnd={handleBlur}
        className={className}
        id={id}
        ref={setContainerRef}
      >
        <SliderTrack
          ref={ref}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedby}
        >
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
            onFocus={focusMinThumb}
            onBlur={handleBlur}
            onKeyDown={handleKeyboardNav}
            ref={minThumbRef}
            disabled={disabled}
            aria-label={name ? t('Minimum Name', { name }) : t('Minimum Value')}
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-disabled={disabled}
            aria-valuenow={value[0]}
          />
          <Thumb
            position={maxPos}
            tabIndex={(disabled ? '-1' : '0') as never} // "as never" ¯\_(ツ)_/¯
            onFocus={focusMaxThumb}
            onBlur={handleBlur}
            onKeyDown={handleKeyboardNav}
            ref={maxThumbRef}
            disabled={disabled}
            aria-label={name ? t('Maximum Name', { name }) : t('Maximum Value')}
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-disabled={disabled}
            aria-valuenow={value[1]}
          />
        </SliderTrack>
      </div>
    )
  }
)

InternalRangeSlider.displayName = 'InternalRangeSlider'

export const RangeSlider = styled(InternalRangeSlider).attrs<RangeSliderProps>(
  ({ fontSize = 'small', lineHeight = 'xsmall' }) => ({
    fontSize,
    lineHeight,
  })
)<RangeSliderProps>`
  ${reset}
  ${space}
  ${typography}
  padding: 1.5rem 0 0.5rem;
  touch-action: none;
  user-select: none;
`

const SliderTrack = styled.div`
  background: ${({ theme }) => theme.colors.ui2};
  border-radius: 2px;
  height: 4px;
  position: relative;
`

interface ThumbLabelProps extends TypographyProps {
  position: number
  focus: boolean
  disabled: boolean
}

const ThumbLabel = styled.div<ThumbLabelProps>`
  background: ${({ theme, focus }) => focus && theme.colors.keyAccent};
  border-radius: 1rem;
  color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.neutral : colors.key};
  padding: 0 0.5rem;
  position: absolute;
  text-align: center;
  top: -24px;
  transform: translateX(${({ position = 0 }) => `${position}px`})
    translateX(-50%);
  user-select: none;
  z-index: ${({ focus }) => (focus ? 1 : 0)};
`

interface ThumbProps {
  position: number
  tabIndex: string
  disabled: boolean
}

const Thumb = styled.div<ThumbProps>`
  background: ${({ theme }) => theme.colors.field};
  border: 3px solid
    ${({ theme: { colors }, disabled }) =>
      disabled ? colors.neutral : colors.key};
  border-radius: 100%;
  cursor: pointer;
  height: 16px;
  margin-left: -8px;
  position: absolute;
  top: -6px;
  transform: translateX(${({ position = 0 }) => `${position}px`});
  width: 16px;
  &:focus {
    border-width: ${({ disabled }) => (disabled ? '3px' : '5px')};
    outline: none;
    z-index: 1;
  }
`

interface SliderFillProps {
  fillStart: number
  fillWidth: number
  disabled: boolean
}

const SliderFill = styled.div<SliderFillProps>`
  background: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.neutral : colors.key};
  height: 100%;
  left: ${({ fillStart }) => fillStart}px;
  position: absolute;
  width: ${({ fillWidth }) => fillWidth}px;
`
