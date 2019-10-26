import React, { useState, ChangeEvent, FC, FormEvent } from 'react'
import { Popover, PopoverContent } from '../../../Popover'
import { InputText, InputTextProps } from '../../Inputs/InputText'
import { Field, FieldProps } from '../Field'
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

export const FieldColor: FC<FieldColorProps> = ({
  alignValidationMessage,
  hideInput,
  ...props
}) => {
  const validationMessage = useFormContext(props)
  const initialValue =
    props.value && isValidColor(props.value)
      ? str2simpleHsv(props.value)
      : polarbrightness2hsv(white())

  const [color, setColor] = useState<SimpleHSV>(initialValue)
  const [inputTextValue, setInputTextValue] = useState(props.value || '')

  const callOnChange = () => {
    if (!props.onChange || !color) return
    props.onChange(createEventWithHSVValue(color))
  }

  const setColorState = (newColor: SimpleHSV) => {
    setColor(newColor)
    newColor && setInputTextValue(simpleHSVtoFormattedColorString(newColor))
    callOnChange()
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

    setColor(str2simpleHsv(value))
    callOnChange()
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
      {...props}
      alignValidationMessage={alignValidationMessage || 'bottom'}
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
