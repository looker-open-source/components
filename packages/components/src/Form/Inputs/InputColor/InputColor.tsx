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
import { InputText, InputTextProps } from '../InputText'
import { useFormContext } from '../../Form'
import { SpaceVertical } from '../../../Layout'
import { HueSlider } from './HueSlider'
import { LightSaturationPreview } from './LightSaturationPreview'
import { Swatch } from './Swatch'
import {
  hsv2hex,
  simpleHSVtoFormattedColorString,
  str2simpleHsv,
} from './utils/color_format_utils'
import { isValidColor, SimpleHSV } from './utils/color_utils'

export interface InputColorProps extends Omit<InputTextProps, 'height'> {
  /**
   * If true, hides input and only show color swatch.
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
      value:
        typeof color === 'string'
          ? color
          : simpleHSVtoFormattedColorString(color),
    },
    target: {
      name,
      value:
        typeof color === 'string'
          ? color
          : simpleHSVtoFormattedColorString(color),
    },
  } as ChangeEvent<HTMLInputElement>
}

function getColorFromText(text?: string) {
  return text && isValidColor(text) ? str2simpleHsv(text) : undefined
}

export const InputColorComponent = forwardRef(
  (
    {
      className,
      hideInput,
      id,
      onChange,
      onFocus,
      onBlur,
      value,
      defaultValue = '',
      disabled,
      readOnly,
      ...props
    }: InputColorProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const inputID = useID(id)
    const validationMessage = useFormContext(props)
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
        setColor(str2simpleHsv(value))
        !isFocused && setInputTextValue(value)
      }
    }, [isFocused, value, inputTextValue])

    const callOnChange = (newColor?: SimpleHSV | string) => {
      if (!onChange || !newColor) return
      onChange(createEventWithHSVValue(newColor, props.name))
    }

    const setColorState = (newColor: SimpleHSV) => {
      setColor(newColor)
      newColor && setInputTextValue(simpleHSVtoFormattedColorString(newColor))
      callOnChange(newColor)
    }

    const handleInputTextChange = (event: FormEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value
      setInputTextValue(newValue)

      const isValid = isValidColor(newValue)
      callOnChange(isValid ? newValue : undefined)
      setColor(getColorFromText(event.currentTarget.value))
    }

    const content = (
      <PopoverContent display="flex" flexDirection="column">
        <SpaceVertical gap="medium">
          <LightSaturationPreview
            hsv={color || { h: 0, s: 1, v: 1 }}
            setHsv={setColorState}
          />
          <HueSlider
            hsv={color || { h: 0, s: 1, v: 1 }}
            setHsv={setColorState}
          />
        </SpaceVertical>
      </PopoverContent>
    )

    const { popover, domProps } = usePopover({ content })

    return (
      <div className={className}>
        <Swatch
          color={color ? hsv2hex(color) : undefined}
          disabled={disabled}
          readOnly={readOnly}
          {...domProps}
        />
        {!disabled && !readOnly && popover}
        {!hideInput && (
          <InputText
            {...props}
            aria-describedby={`describedby-${id}`}
            id={inputID}
            ref={ref}
            disabled={disabled}
            readOnly={readOnly}
            validationType={validationMessage && validationMessage.type}
            onChange={handleInputTextChange}
            value={inputTextValue}
            onFocus={wrappedOnFocus}
            onBlur={wrappedOnBlur}
          />
        )}
      </div>
    )
  }
)

InputColorComponent.displayName = 'InputColorComponent'

export const InputColor = styled(InputColorComponent)`
  display: flex;

  ${Swatch} {
    border-radius: ${({ hideInput, theme: { radii } }) =>
      hideInput ? radii.medium : radii.none};
    border-bottom-left-radius: ${({ theme: { radii } }) => radii.medium};
    border-right: ${({ hideInput }) => (hideInput ? undefined : 'none')};
    border-top-left-radius: ${({ theme: { radii } }) => radii.medium};
  }

  ${InputText} {
    border-radius: ${({ theme: { radii } }) => radii.none};
    border-bottom-right-radius: ${({ theme: { radii } }) => radii.medium};
    border-top-right-radius: ${({ theme: { radii } }) => radii.medium};
  }
`
