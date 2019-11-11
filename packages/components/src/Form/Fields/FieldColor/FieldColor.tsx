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

import React, { useState, ChangeEvent, FormEvent, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import { Popover, PopoverContent } from '../../../Popover'
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
}

const createEventWithHSVValue = (
  color: SimpleHSV
): ChangeEvent<HTMLInputElement> => {
  return {
    currentTarget: {
      value: simpleHSVtoFormattedColorString(color),
    },
    target: {
      value: simpleHSVtoFormattedColorString(color),
    },
  } as ChangeEvent<HTMLInputElement>
}

export const FieldColorComponent = forwardRef(
  (
    {
      alignValidationMessage,
      hideInput,
      id = uuid(),
      ...props
    }: FieldColorProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const validationMessage = useFormContext(props)
    const initialValue =
      props.value && isValidColor(props.value)
        ? str2simpleHsv(props.value)
        : polarbrightness2hsv(white())

    const [color, setColor] = useState<SimpleHSV>(initialValue)
    const [inputTextValue, setInputTextValue] = useState(props.value || '')

    const callOnChange = (newColor: SimpleHSV) => {
      if (!props.onChange || !newColor) return
      props.onChange(createEventWithHSVValue(newColor))
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
      const value = event.currentTarget.value
      setInputTextValue(value)

      if (!value || !isValidColor(value)) return
      const newColor = str2simpleHsv(value)
      setColor(newColor)
      callOnChange(newColor)
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

    return (
      <Field
        id={id}
        validationMessage={validationMessage}
        alignValidationMessage={alignValidationMessage || 'bottom'}
        {...pickFieldProps(props)}
      >
        <FormControl alignLabel="left">
          <Popover content={content}>
            {(onClick, ref) => (
              <Swatch
                mt="auto"
                ref={ref}
                color={hsv2hex(color)}
                borderRadius={hideInput ? 'medium' : 'none'}
                borderTopLeftRadius="medium"
                borderBottomLeftRadius="medium"
                borderRight={!hideInput ? 'none' : undefined}
                width="33px"
                height="28px"
                onClick={onClick}
              />
            )}
          </Popover>
          {!hideInput && (
            <InputText
              {...omitFieldProps(props)}
              id={id}
              ref={ref}
              borderRadius="none"
              borderTopRightRadius="medium"
              borderBottomRightRadius="medium"
              validationType={validationMessage && validationMessage.type}
              onChange={handleInputTextChange}
              value={inputTextValue}
            />
          )}
        </FormControl>
      </Field>
    )
  }
)

FieldColorComponent.displayName = 'FieldColorComponent'

export const FieldColor = styled(FieldColorComponent)``
