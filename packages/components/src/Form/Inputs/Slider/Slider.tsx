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

import type { Ref, SyntheticEvent } from 'react'
import React, { forwardRef, useState } from 'react'
import isFunction from 'lodash/isFunction'
import styled, { css } from 'styled-components'
import type {
  SpaceProps,
  TypographyProps,
  WidthProps,
} from '@looker/design-tokens'
import { reset, space, typography, width } from '@looker/design-tokens'

import type { InputProps } from '../InputProps'

export interface SliderProps
  extends SpaceProps,
    WidthProps,
    Omit<InputProps, 'type'>,
    TypographyProps {
  'aria-labelledby'?: string
  'aria-describedby'?: string
  max?: number
  min?: number
  step?: number
  value?: number | string
}

const getValueAsNumber = (
  value: string | number,
  defaultValue: number
): number => {
  if (typeof value === 'number') {
    return value
  }

  const numericValue = parseFloat(value)
  if (isNaN(numericValue)) {
    // This is for developers which is why the string has not been i18n
    // eslint-disable-next-line no-console
    console.error('value prop in Slider is not numeric')
    return defaultValue
  }
  return numericValue
}

const SliderInternal = forwardRef(
  (
    {
      min = 0,
      max = 10,
      value = 0,
      step,
      onChange,

      name,
      id,
      className,
      disabled,
      ...restProps
    }: SliderProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const numericValue = getValueAsNumber(value, min)
    const [isFocused, setIsFocused] = useState(false)
    const [internalValue, setInternalValue] = useState(numericValue)

    if (min > max) {
      // Props don't make sense. ABORT!!
      // eslint-disable-next-line no-console
      console.warn(
        `Unable to render <Slider /> because the 'min' prop was set greater than 'max' value. MIN: ${min}, MAX: ${max}`
      )
      return null
    }

    const boundSliderValue = (v: number) => Math.min(Math.max(v, min), max) // enforce that value stays between min and max

    const displayValue = isFunction(onChange)
      ? boundSliderValue(numericValue)
      : boundSliderValue(internalValue)

    const fillPercent = Math.round(((displayValue - min) / (max - min)) * 100)

    const handleFocus = () => {
      setIsFocused(true)
    }

    const handleUnfocus = () => {
      setIsFocused(false)
    }

    const internalChangeHandler = (event: SyntheticEvent<HTMLInputElement>) => {
      const evtValue = (event.target as HTMLInputElement).value
      setInternalValue(parseFloat(evtValue))
    }

    const handleChange = isFunction(onChange) ? onChange : internalChangeHandler
    return (
      <div className={className} data-testid="container">
        <SliderValueWrapper>
          <SliderValue
            disabled={disabled}
            isFocused={isFocused}
            offsetPercent={fillPercent}
          >
            {displayValue}
          </SliderValue>
        </SliderValueWrapper>
        <SliderTrack>
          <SliderFill offsetPercent={fillPercent} disabled={disabled} />
          <SliderThumb
            isFocused={isFocused}
            offsetPercent={fillPercent}
            disabled={disabled}
          />
        </SliderTrack>
        <SliderInput
          disabled={disabled}
          id={id}
          isFocused={isFocused}
          max={max}
          min={min}
          name={name}
          onChange={handleChange}
          step={step}
          offsetPercent={fillPercent}
          value={displayValue}
          aria-labelledby={restProps['aria-labelledby']}
          aria-describedby={restProps['aria-describedby']}
          data-testid="slider-input"
          ref={ref}
          onBlur={handleUnfocus}
          onFocus={handleFocus}
        />
      </div>
    )
  }
)

interface SliderInputProps {
  isFocused?: boolean
  disabled?: boolean
  offsetPercent: number
}

const sliderThumbCss = css`
  height: 16px;
  visibility: hidden;
  width: 16px;
`

const SliderThumb = styled.div<SliderInputProps>`
  border-radius: 100%;
  left: ${({ offsetPercent = 0 }) => `${offsetPercent}%`};
  position: absolute;
  top: -6px;
  transform: translateX(-50%);
  transition: transform 250ms, box-shadow 250ms;

  ${({ theme: { colors }, isFocused, disabled }) => css`
    background: ${colors.field};
    border: 3px solid ${colors.key};
    height: 16px;
    width: 16px;
    ${isFocused && 'border-width: 5px;'}
    ${disabled && `border-color: ${colors.neutral};`}
  `}
`

const SliderInput = styled.input.attrs(() => ({
  type: 'range',
}))<SliderInputProps>`
  background: transparent;
  display: block;
  height: 22px;
  left: 8px;
  margin: 0;
  position: relative;
  -webkit-appearance: none; /* stylelint-disable-line */
  width: calc(100% - 16px);

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* stylelint-disable-line */
    ${sliderThumbCss}
  }

  &::-moz-range-thumb {
    ${sliderThumbCss}
  }

  &::-ms-thumb {
    ${sliderThumbCss}
  }

  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
    cursor: pointer;
    width: 100%;
  }

  &::-moz-focus-outer {
    border: none;
  }

  &:focus {
    outline: none;
  }
`

const SliderTrack = styled.div`
  background: ${({ theme }) => theme.colors.ui2};
  border-radius: ${({ theme }) => theme.radii.small};
  height: 4px;
  left: 16px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: calc(100% - 32px);
`

interface ControlProps {
  offsetPercent: number
  disabled?: boolean
}

const SliderFill = styled.div<ControlProps>`
  background: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.neutral : colors.key};
  border-radius: ${({ theme }) => theme.radii.small};
  height: 100%;
  width: ${({ offsetPercent }) => offsetPercent}%;
`

interface SliderValueProps extends SliderInputProps {
  disabled?: boolean
  isFocused: boolean
  offsetPercent: number
}

const SliderValue = styled.div<SliderValueProps>`
  background: ${({ theme, isFocused }) => isFocused && theme.colors.keyAccent};
  border-radius: 1rem;
  color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.neutral : colors.key};
  left: ${({ offsetPercent }) => offsetPercent}%;
  padding: 0 0.5rem;
  position: absolute;
  text-align: center;
  transform: translateX(-50%) translateY(-0.9rem);
  user-select: none;
`

const SliderValueWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  width: calc(100% - 30px);
`

export const Slider = styled(SliderInternal).attrs(
  ({
    fontSize = 'small',
    lineHeight = 'xsmall',
    mt = 'medium',
    width = '100%',
  }) => ({
    fontSize,
    lineHeight,
    mt,
    width,
  })
)<SliderProps>`
  ${reset}
  ${space}
  ${width}
  ${typography}
  position: relative;
`

SliderInternal.displayName = 'Slider'
