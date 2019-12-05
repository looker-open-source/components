/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
import { WidthProps, width, fontSize, FontSizeProps } from 'styled-system'
import { lighten } from 'polished'
import { InputProps } from '../InputProps'
import { SliderSizeProps, sliderSize } from './slider_sizes'

export interface SliderProps
  extends SpaceProps,
    WidthProps,
    Omit<InputProps, 'type'>,
    SliderSizeProps {
  'aria-labelledby'?: string
  branded?: boolean
  max?: number
  min?: number
  step?: number
  value?: number
}

const SliderInternal = forwardRef(
  (
    {
      branded,
      min = 0,
      max = 10,
      value = 0,
      step,
      onChange,
      size = 'medium',
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

    const fillPercent = ((displayValue - min) / (max - min)) * 100

    const { knobSize, trackHeight, fontSize, valueSpacing } = sliderSize({
      size,
    })

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
      <div
        className={className}
        onBlur={handleUnfocus}
        onKeyUp={handleFocus}
        onMouseDown={handleUnfocus}
        data-testid="container"
      >
        <SliderInput
          branded={branded}
          disabled={disabled}
          id={id}
          isFocused={isFocused}
          knobSize={knobSize}
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
        />
        <SliderTrack knobSize={knobSize} trackHeight={trackHeight}>
          <SliderFill
            offsetPercent={fillPercent}
            branded={branded}
            disabled={disabled}
          />
          <SliderValueWrapper
            offsetPercent={fillPercent}
            valueSpacing={valueSpacing}
          >
            <SliderValue
              fontSize={fontSize}
              knobSize={knobSize}
              branded={branded}
              disabled={disabled}
            >
              <SliderValueContent>{displayValue}</SliderValueContent>
            </SliderValue>
          </SliderValueWrapper>
        </SliderTrack>
      </div>
    )
  }
)

interface SliderInputProps {
  knobSize: number
  isFocused?: boolean
  branded?: boolean
}

const sliderThumbCss = css<SliderInputProps>`
  border-radius: 100%;
  cursor: pointer;
  ${({ theme: { colors }, branded, knobSize, isFocused }) => css`
    border: 3px solid
      ${branded ? colors.semanticColors.primary.main : colors.palette.blue500};
    height: ${knobSize}px;
    width: ${knobSize}px;
    background: ${colors.palette.white};
    ${isFocused &&
      `box-shadow: 0 0 6px ${
        branded ? colors.semanticColors.primary.dark : colors.palette.blue700
      };`}
  `}
`

const SliderInput = styled.input.attrs({ type: 'range' })<SliderInputProps>`
  width: 100%;
  -webkit-appearance: none; /* stylelint-disable-line */
  background: transparent;
  display: block;
  position: relative;
  z-index: 1;

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
  }

  &:disabled {
    &::-webkit-slider-thumb {
      border-color: ${({ theme }) => theme.colors.palette.charcoal600};
      cursor: default;
    }
    &::-moz-range-thumb {
      border-color: ${({ theme }) => theme.colors.palette.charcoal600};
      cursor: default;
    }
    &::-ms-thumb {
      border-color: ${({ theme }) => theme.colors.palette.charcoal600};
      cursor: default;
    }
  }
`

interface SliderTrackProps extends SliderInputProps {
  trackHeight: number
}

const SliderTrack = styled.div<SliderTrackProps>`
  width: ${({ knobSize }) => `calc(100% - ${knobSize}px)`};
  height: ${({ trackHeight }) => `${trackHeight}px`};
  background: ${({ theme }) => theme.colors.palette.charcoal200};
  border-radius: ${({ theme }) => theme.radii.small};
  position: absolute;
  top: 50%;
  left: ${({ knobSize }) => `${knobSize / 2}px`};
  margin-top: ${({ trackHeight }) => `-${trackHeight / 2}px`};
  z-index: 0;
`

interface ControlProps {
  offsetPercent: number
  disabled?: boolean
  branded?: boolean
}

const SliderFill = styled.div<ControlProps>`
  height: 100%;
  background: ${({ theme: { colors }, branded, disabled }) =>
    disabled
      ? colors.palette.charcoal400
      : branded
      ? lighten(0.1, colors.semanticColors.primary.main)
      : colors.palette.blue400};
  width: ${({ offsetPercent }) => offsetPercent}%;
  border-radius: ${({ theme }) => theme.radii.small};
`

interface SliderValueProps extends SliderInputProps, FontSizeProps {
  disabled?: boolean
}

const SliderValue = styled.div<SliderValueProps>`
  ${fontSize}
  background: ${({ theme }) => theme.colors.palette.white};
  border: 2px solid
    ${({ theme: { colors }, branded, disabled }) =>
      disabled
        ? 'currentColor'
        : branded
        ? colors.semanticColors.primary.main
        : colors.palette.blue500};
  border-radius: ${({ theme }) => theme.radii.medium};
  color: ${({ theme: { colors }, branded, disabled }) =>
    disabled
      ? colors.palette.charcoal700
      : branded
      ? colors.semanticColors.primary.main
      : colors.palette.blue500};
  left: -50%;
  font-weight: 600;
  line-height: 1;
  padding: ${({ theme: { space } }) => `${space.xxsmall} ${space.xsmall}`};
  position: relative;
  user-select: none;
  &::before {
    /* "word bubble" stem */
    background: ${({ theme }) => theme.colors.palette.white};
    border: 2px solid
      ${({ theme: { colors }, branded, disabled }) =>
        disabled
          ? 'currentColor'
          : branded
          ? colors.semanticColors.primary.main
          : colors.palette.blue500};
    border-bottom: none;
    border-right: none;
    content: ' ';
    display: block;
    height: 8px;
    left: calc(50% - 4px);
    transform: rotate(45deg);
    position: absolute;
    top: -5px;
    width: 8px;
    z-index: 0;
  }
  &::after {
    /* mask out border overshoot on "word bubble" stem */
    background: ${({ theme }) => theme.colors.palette.white};
    content: ' ';
    height: 3px;
    left: 10%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    width: 80%;
    z-index: 0;
  }
`

const SliderValueContent = styled.span`
  position: relative;
  z-index: 1;
`

interface SliderValueWrapperProps {
  valueSpacing: string
  offsetPercent: number
}

const SliderValueWrapper = styled.div<SliderValueWrapperProps>`
  display: grid;
  justify-items: center;
  left: calc(${({ offsetPercent }) => offsetPercent}%);
  overflow: visible;
  position: absolute;
  top: ${({ valueSpacing }) => valueSpacing};
`

export const Slider = styled(SliderInternal).attrs(props => ({
  mb: props.theme.space.xxlarge,
}))<SliderProps>`
  ${reset}
  ${space}
  ${width}
  position: relative;
`

SliderInternal.displayName = 'Slider'
Slider.defaultProps = { width: '100%' }
