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
  useState,
  ChangeEvent,
  FormEvent,
  forwardRef,
  Ref,
  useEffect,
} from 'react'
import styled from 'styled-components'
import { useID, useWrapEvent } from '../../../utils'
import { usePopover, PopoverContent } from '../../../Popover'
import { InputText, InputTextProps } from '../../Inputs/InputText'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'
import { FormControl } from '../../FormControl'
import { useFormContext } from '../../Form'
import {
  HueSaturation,
  polarbrightness2hsv,
  SimpleHSV,
  white,
} from './ColorWheel/color_wheel_utils'
import { ColorWheel } from './ColorWheel'
import { LuminositySlider } from './LuminositySlider'
import { Swatch } from './Swatch'
import {
  hsv2hex,
  simpleHSVtoFormattedColorString,
  str2simpleHsv,
} from './utils/color_format_utils'
import { isValidColor } from './utils/color_utils'

const colorWheelSize = 164

export interface FieldColorProps
  extends FieldProps,
    Omit<InputTextProps, 'height' | 'size'> {
  /**
   * If true, hides input and only show color swatch.
   */
  hideInput?: boolean
  value?: string
  defaultValue?: string
}

const createEventWithHSVValue = (
  color: SimpleHSV | string
): ChangeEvent<HTMLInputElement> => {
  return {
    currentTarget: {
      value:
        typeof color === 'string'
          ? color
          : simpleHSVtoFormattedColorString(color),
    },
    target: {
      value:
        typeof color === 'string'
          ? color
          : simpleHSVtoFormattedColorString(color),
    },
  } as ChangeEvent<HTMLInputElement>
}

function getColorFromText(text?: string) {
  const initialWhite = polarbrightness2hsv(white())
  return text && isValidColor(text) ? str2simpleHsv(text) : initialWhite
}

export const FieldColorComponent = forwardRef(
  (
    {
      alignValidationMessage,
      hideInput,
      id,
      onChange,
      onFocus,
      onBlur,
      value,
      defaultValue,
      ...props
    }: FieldColorProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const inputID = useID(id)
    const validationMessage = useFormContext(props)
    const initialWhite = polarbrightness2hsv(white())
    const initialColor = getColorFromText(value || defaultValue)

    const [color, setColor] = useState<SimpleHSV>(initialColor)
    const [inputTextValue, setInputTextValue] = useState(
      value || defaultValue || ''
    )
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)
    const wrappedOnFocus = useWrapEvent(handleFocus, onFocus)
    const wrappedOnBlur = useWrapEvent(handleBlur, onBlur)

    useEffect(() => {
      if (value && value !== inputTextValue) {
        setColor(str2simpleHsv(value))
        !isFocused && setInputTextValue(value)
      }
    }, [isFocused, value, inputTextValue])

    const callOnChange = (newColor: SimpleHSV | string) => {
      if (!onChange || !newColor) return
      onChange(createEventWithHSVValue(newColor))
    }

    const setColorState = (newColor: SimpleHSV) => {
      setColor(newColor)
      newColor && setInputTextValue(simpleHSVtoFormattedColorString(newColor))
      callOnChange(newColor)
    }

    const handleColorChange = (hs: HueSaturation) =>
      setColorState({ ...hs, v: color.v })

    const handleSliderChange = (event: FormEvent<HTMLInputElement>) =>
      setColorState({
        ...color,
        v: Number(event.currentTarget.value) / 100,
      })

    const handleInputTextChange = (event: FormEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value
      setInputTextValue(newValue)

      const isValid = isValidColor(newValue)
      callOnChange(isValid ? newValue : initialWhite)
      setColor(getColorFromText(event.currentTarget.value))
    }

    const content = (
      <PopoverContent display="flex" flexDirection="column">
        <ColorWheel
          size={colorWheelSize}
          hue={color.h}
          saturation={color.s}
          value={color.v}
          onColorChange={handleColorChange}
        />
        <LuminositySlider
          min={0}
          max={100}
          step={1}
          value={color.v * 100}
          width={colorWheelSize}
          onChange={handleSliderChange}
        />
      </PopoverContent>
    )

    const { open, popover, ref: triggerRef } = usePopover({ content })

    return (
      <Field
        id={inputID}
        validationMessage={validationMessage}
        alignValidationMessage={alignValidationMessage || 'bottom'}
        {...pickFieldProps(props)}
      >
        <FormControl alignLabel="left">
          <Swatch
            ref={triggerRef}
            color={hsv2hex(color)}
            borderRadius={hideInput ? 'medium' : 'none'}
            borderTopLeftRadius="medium"
            borderBottomLeftRadius="medium"
            border="1px solid"
            borderRight={hideInput ? undefined : 'none'}
            disabled={props.disabled}
            onClick={open}
          />
          {!props.disabled && popover}
          {!hideInput && (
            <InputText
              {...omitFieldProps(props)}
              id={inputID}
              ref={ref}
              borderRadius="none"
              borderTopRightRadius="medium"
              borderBottomRightRadius="medium"
              validationType={validationMessage && validationMessage.type}
              onChange={handleInputTextChange}
              value={inputTextValue}
              onFocus={wrappedOnFocus}
              onBlur={wrappedOnBlur}
            />
          )}
        </FormControl>
      </Field>
    )
  }
)

FieldColorComponent.displayName = 'FieldColorComponent'

export const FieldColor = styled(FieldColorComponent)``
