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

import React, {
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
  forwardRef,
  Ref,
} from 'react'
import styled from 'styled-components'
import { useID, useControlWarn } from '../../../utils'
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

function getColorFromText(text?: string) {
  return text && isValidColor(text) ? str2simpleHsv(text) : undefined
}

export const FieldColorComponent = forwardRef(
  (
    {
      alignValidationMessage,
      hideInput,
      id,
      onChange,
      value: controlledValue,
      defaultValue,
      ...props
    }: FieldColorProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'FieldColor',
    })

    const whiteHSV = polarbrightness2hsv(white())
    const colorFromProps =
      getColorFromText(controlledValue || defaultValue) || whiteHSV

    const [color, setColor] = useState<SimpleHSV>(colorFromProps)
    const [value, setValue] = useState(defaultValue || '')

    // If there's been an external change in the color, update the input value
    // except when the user is manually typing a color string (isInputting.current === true)
    // since onChange will have been called with #ffffff until the typed value is a valid color
    // and updating the input text with that would interfere with typing
    const isInputting = useRef(false)
    if (controlledValue && value !== controlledValue && !isInputting.current) {
      setValue(controlledValue)
    }

    const colorToUse = isControlled ? colorFromProps || whiteHSV : color

    const updateColor = (newColor: SimpleHSV) => {
      if (onChange) {
        onChange(createEventWithHSVValue(newColor))
      } else {
        setColor(newColor)
      }
    }

    const setColorState = (newColor: SimpleHSV) => {
      newColor && setValue(simpleHSVtoFormattedColorString(newColor))
      updateColor(newColor)
    }

    const handleColorChange = (hs: HueSaturation) =>
      setColorState({ ...hs, v: color.v })

    const handleSliderChange = (event: FormEvent<HTMLInputElement>) =>
      setColorState({
        ...colorToUse,
        v: Number(event.currentTarget.value) / 100,
      })

    const handleInputTextChange = (event: FormEvent<HTMLInputElement>) => {
      isInputting.current = true
      const newValue = event.currentTarget.value
      setValue(newValue)

      const newColor =
        !newValue || !isValidColor(newValue)
          ? whiteHSV
          : str2simpleHsv(newValue)
      updateColor(newColor)

      window.requestAnimationFrame(() => {
        isInputting.current = false
      })
    }
    const inputID = useID(id)
    const validationMessage = useFormContext(props)

    const content = (
      <PopoverContent display="flex" flexDirection="column">
        <ColorWheel
          size={colorWheelSize}
          hue={colorToUse.h}
          saturation={colorToUse.s}
          value={colorToUse.v}
          onColorChange={handleColorChange}
        />
        <LuminositySlider
          min={0}
          max={100}
          step={1}
          value={colorToUse.v * 100}
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
            color={hsv2hex(colorToUse)}
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
              value={value}
            />
          )}
        </FormControl>
      </Field>
    )
  }
)

FieldColorComponent.displayName = 'FieldColorComponent'

export const FieldColor = styled(FieldColorComponent)``
