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

import type { ChangeEvent, FormEvent, Ref } from 'react'
import React, { useState, forwardRef, useEffect } from 'react'
import styled from 'styled-components'
import { useWrapEvent } from '../../../utils'
import { PopoverLayout } from '../../../Popover'
import type { InputTextProps } from '../InputText'
import type { ComboboxOptionObject, ComboboxProps } from '../Combobox'
import { Combobox, ComboboxInput, ComboboxList } from '../Combobox'
import {
  omitAriaAndValidationProps,
  pickAriaAndValidationProps,
} from '../ariaProps'
import { Swatch } from './Swatch'
import {
  isValidColor,
  hsvToHex,
  simpleHsvToHex,
  stringToSimpleHsv,
} from './utils'
import type { SimpleHSV } from './types'
import { ColorPicker } from './ColorPicker'
import { DEFAULT_INPUT_COLOR_WIDTH } from './dimensions'

export type InputColorProps = Omit<
  ComboboxProps,
  'value' | 'defaultValue' | 'onChange'
> &
  Pick<InputTextProps, 'readOnly' | 'validationType' | 'onChange'> & {
    /**
     * No longer supported and will be removed in an upcoming 3.x release
     * @deprecated
     */
    hideInput?: boolean
    value?: string
    defaultValue?: string
  }

const createEventWithHSVValue = (
  color: SimpleHSV | string,
  name?: string
): ChangeEvent<HTMLInputElement> => {
  return {
    currentTarget: {
      name,
      value: typeof color === 'string' ? color : simpleHsvToHex(color),
    },
    target: {
      name,
      value: typeof color === 'string' ? color : simpleHsvToHex(color),
    },
  } as ChangeEvent<HTMLInputElement>
}

function getColorFromText(text?: string) {
  return text && isValidColor(text) ? stringToSimpleHsv(text) : undefined
}

const InputColorInternal = forwardRef(
  (
    {
      hideInput,
      id,
      name,
      onChange,
      onFocus,
      onBlur,
      placeholder,
      value,
      defaultValue = '',
      disabled,
      readOnly,
      validationType,
      ...props
    }: InputColorProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const initialColor = getColorFromText(value || defaultValue)

    const [color, setColor] = useState<SimpleHSV | undefined>(initialColor)
    const [inputTextValue, setInputTextValue] = useState(value || defaultValue)
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)
    const wrappedOnFocus = useWrapEvent(handleFocus, onFocus)
    const wrappedOnBlur = useWrapEvent(handleBlur, onBlur)

    useEffect(() => {
      if (value && value !== inputTextValue) {
        setColor(stringToSimpleHsv(value))
        !isFocused && setInputTextValue(value)
      }
    }, [isFocused, value, inputTextValue])

    const callOnChange = (newColor: SimpleHSV | string) => {
      onChange?.(createEventWithHSVValue(newColor, name))
    }

    const setColorState = (newColor?: SimpleHSV) => {
      setColor(newColor)
      const newTextValue = newColor ? simpleHsvToHex(newColor) : ''
      setInputTextValue(newTextValue)
      // When clicking the clear button, newColor is undefined,
      // so we pass an empty string to callOnChange to clear the input
      callOnChange(newColor || '')
    }

    const handleInputTextChange = (e: FormEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value
      setInputTextValue(newValue)

      const isValid = isValidColor(newValue) || newValue === ''
      if (isValid) {
        callOnChange(newValue)
      }
      setColor(getColorFromText(newValue))
    }

    const handleClear = (value?: ComboboxOptionObject) => {
      if (!value) {
        setColorState()
      }
    }

    const ariaProps = pickAriaAndValidationProps(props)

    return (
      <Combobox {...omitAriaAndValidationProps(props)} onChange={handleClear}>
        <ComboboxInput
          before={
            <Swatch
              color={color ? hsvToHex(color) : undefined}
              disabled={disabled}
              readOnly={readOnly}
              ml="u2"
            />
          }
          aria-describedby={`describedby-${id}`}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          validationType={validationType}
          onChange={handleInputTextChange}
          value={inputTextValue}
          onFocus={wrappedOnFocus}
          onBlur={wrappedOnBlur}
          placeholder={placeholder}
          isClearable
          {...ariaProps}
        />
        {!disabled && !readOnly && (
          <ComboboxList width="fit-content" {...ariaProps}>
            <PopoverLayout>
              <ColorPicker
                hsv={color || { h: 0, s: 1, v: 1 }}
                setHsv={setColorState}
                width={DEFAULT_INPUT_COLOR_WIDTH}
              />
            </PopoverLayout>
          </ComboboxList>
        )}
      </Combobox>
    )
  }
)

export const InputColor = styled(InputColorInternal)``
