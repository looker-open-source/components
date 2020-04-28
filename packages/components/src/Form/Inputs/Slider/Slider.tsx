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

import React, { forwardRef, Ref, SyntheticEvent, useState } from 'react'
import isFunction from 'lodash/isFunction'
import styled, { css } from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'
import { WidthProps, width, FontSizeProps } from 'styled-system'

import { InputProps } from '../InputProps'

export interface SliderProps
  extends SpaceProps,
    WidthProps,
    Omit<InputProps, 'type'> {
  'aria-labelledby'?: string
  max?: number
  min?: number
  step?: number
  value?: number
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
    const [isFocused, setIsFocused] = useState(false)
    const [internalValue, setInternalValue] = useState(value)

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
      ? boundSliderValue(value)
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
      setInternalValue(parseInt(evtValue))
    }

    const handleChange = isFunction(onChange) ? onChange : internalChangeHandler
    return (
      <div className={className} data-testid="container">
        <SliderValueWrapper offsetPercent={fillPercent}>
          <SliderValue disabled={disabled} isFocused={isFocused}>
            {displayValue}
          </SliderValue>
        </SliderValueWrapper>
        <SliderTrack>
          <SliderFill offsetPercent={fillPercent} disabled={disabled} />
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
          type="range"
          value={displayValue}
          aria-labelledby={restProps['aria-labelledby']}
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
}

const sliderThumbFocusCss = css<SliderInputProps>`
  border-width: 5px;
`

const sliderThumbCss = css<SliderInputProps>`
  border-radius: 100%;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;
  ${({ theme: { colors }, isFocused }) => css`
    border: 3px solid ${colors.semanticColors.primary.main};
    height: 16px;
    width: 16px;
    background: ${colors.palette.white};
    ${isFocused && sliderThumbFocusCss}
  `}
`

const SliderInput = styled.input.attrs({ type: 'range' })<SliderInputProps>`
  background: transparent;
  display: block;
  height: 22px;
  position: relative;
  width: 100%;
  -webkit-appearance: none; /* stylelint-disable-line */

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
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-moz-focus-outer {
    border: none;
  }

  &:focus {
    outline: none;
    &::-webkit-slider-thumb {
      ${sliderThumbFocusCss}
    }

    &::-moz-range-thumb {
      ${sliderThumbFocusCss}
    }

    &::-ms-thumb {
      ${sliderThumbFocusCss}
    }
  }

  &:disabled {
    &::-webkit-slider-thumb {
      border-color: ${({ theme }) => theme.colors.palette.charcoal500};
      cursor: default;
    }
    &::-moz-range-thumb {
      border-color: ${({ theme }) => theme.colors.palette.charcoal500};
      cursor: default;
    }
    &::-ms-thumb {
      border-color: ${({ theme }) => theme.colors.palette.charcoal500};
      cursor: default;
    }
  }
`

const SliderTrack = styled.div<SliderInputProps>`
  width: calc(100% - 16px);
  height: 4px;
  background: ${({ theme }) => theme.colors.palette.charcoal200};
  border-radius: ${({ theme }) => theme.radii.small};
  position: absolute;
  top: 50%;
  left: 8px;
  margin-top: -2px;
`

interface ControlProps {
  offsetPercent: number
  disabled?: boolean
}

const SliderFill = styled.div<ControlProps>`
  height: 100%;
  background: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.palette.charcoal400 : colors.semanticColors.primary.main};
  width: ${({ offsetPercent }) => offsetPercent}%;
  border-radius: ${({ theme }) => theme.radii.small};
`

interface SliderValueProps extends SliderInputProps, FontSizeProps {
  disabled?: boolean
  isFocused: boolean
}

const SliderValue = styled.div<SliderValueProps>`
  color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.palette.charcoal700 : colors.semanticColors.primary.main};
  line-height: 1;
  user-select: none;
  transform: translateX(-50%) translateY(-1.3rem);
  text-align: center;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  background: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.palette.purple100 : theme.colors.palette.white};
`

interface SliderValueWrapperProps {
  offsetPercent: number
}

const SliderValueWrapper = styled.div<SliderValueWrapperProps>`
  text-align: center;
  left: calc(
    ${({ offsetPercent }) => {
      const adjustment =
        offsetPercent > 50
          ? (offsetPercent / 100) * -6
          : ((100 - offsetPercent) / 100) * 10

      return `${offsetPercent}% + ${adjustment}px`
    }}
  );
  position: absolute;
`

export const Slider = styled(SliderInternal)<SliderProps>`
  ${reset}
  ${space}
  ${width}
  position: relative;
`

SliderInternal.displayName = 'Slider'
Slider.defaultProps = { mt: 'large', width: '100%' }
