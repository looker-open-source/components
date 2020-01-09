import React, { FormEvent, forwardRef, Ref, useState } from 'react'
import styled from 'styled-components'
import { height, MaxHeightProps } from 'styled-system'

import { useControlWarn } from '../../../utils'
import { IconButton } from '../../../Button'
import { InputText } from '../InputText'
import { InputSearch, InputSearchProps } from '../InputSearch'

interface ChipProps {
  value: string
  onDelete?: () => void
}

function ChipInternal({ onDelete, value, ...props }: ChipProps) {
  return (
    <div {...props}>
      {value} <IconButton icon="Close" label="Remove" onClick={onDelete} />
    </div>
  )
}

export const Chip = styled(ChipInternal)`
  border: 1px solid;
  display: inline-block;
`

/**
 * InputChip is a component that appears to be a regular text input,
 * but also allows (validated) user inputs to be stored as 'chips' (see the Chip element)
 */

interface InputChipProps
  extends MaxHeightProps,
    Omit<InputSearchProps, 'value' | 'onChange' | 'height'> {
  values: string[]
  onChange: (emails: string[]) => void
  /**
   * for controlling the input text
   */
  inputValue?: string
  /**
   * callback when the input text changes (use with inputValue to control the input text)
   */
  onInputChange?: (value: string) => void
  /**
   * for checking each value before converting to a chip
   */
  validate?: (value: string) => boolean
}

function getUpdatedValues(
  inputValue: string,
  currentValues: string[],
  validate?: (value: string) => boolean
) {
  const invalidValues: string[] = []
  const validValues: string[] = []

  // Values may be separated by ',' '\t' and ' '
  const inputValues: string[] = inputValue.split(/[,\t]+/)
  inputValues.forEach((val: string) => {
    if (val.trim() === '') return
    // Make sure each value is valid and doesn't already exist
    if (
      (validate && !validate(val)) ||
      (currentValues && currentValues.includes(val))
    ) {
      return invalidValues.push(val)
    } else {
      return validValues.push(val)
    }
  })

  // Save valid values and keep invalid ones in the input
  return {
    newInputValue: invalidValues.join(', '),
    newValues: [...currentValues, ...validValues],
  }
}

export const InputChipInternal = forwardRef(
  (
    {
      values,
      onChange,
      inputValue: controlledInputValue,
      onInputChange,
      validate,
      ...props
    }: InputChipProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['onInputChange', 'inputValue'],
      isControlledCheck: () => controlledInputValue !== undefined,
      name: 'InputChip',
    })

    const [uncontrolledInputValue, setInputValue] = useState('')
    const inputValue =
      isControlled && controlledInputValue !== undefined
        ? controlledInputValue
        : uncontrolledInputValue

    function updateValues() {
      const { newValues, newInputValue } = getUpdatedValues(
        inputValue,
        values,
        validate
      )
      onChange(newValues)
      if (!isControlled) {
        setInputValue(newInputValue)
      }
      onInputChange && onInputChange(newInputValue)
    }

    function handleDeleteChip(value: string) {
      const newValues = values.filter(v => value !== v)
      onChange(newValues)
    }

    function handleBlur() {
      updateValues()
    }

    function handleKeyDown(e: React.KeyboardEvent) {
      switch (e.key) {
        // Remove items via backspace
        case 'Backspace':
          // If we hit backspace and there is no text left to delete, remove the last entry instead
          inputValue === '' && handleDeleteChip(values[values.length - 1])
          break
        case 'Enter':
          // Don't submit a form if there is one
          e.preventDefault()
          // Update values when the user hits return
          updateValues()
      }
    }

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      const { value } = e.currentTarget
      let newValue = value
      // If the last character is a comma, update the values
      if (value[value.length - 1] === ',') {
        const { newValues, newInputValue } = getUpdatedValues(
          value,
          values,
          validate
        )
        onChange(newValues)
        newValue = newInputValue
      }

      if (!isControlled) {
        setInputValue(newValue)
      }
      onInputChange && onInputChange(newValue)
    }

    function handleClear() {
      onChange([])
      if (!isControlled) {
        setInputValue('')
      }
      onInputChange && onInputChange('')
    }

    const chips = values.map(value => {
      function onChipDelete() {
        handleDeleteChip(value)
      }
      return <Chip onDelete={onChipDelete} value={value} key={value} />
    })

    return (
      <InputSearch
        ref={ref}
        height="auto"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        showClear={values.length > 0}
        onClear={handleClear}
        {...props}
      >
        {chips}
      </InputSearch>
    )
  }
)

InputChipInternal.displayName = 'InputChipInternal'

export const InputChip = styled(InputChipInternal)`
  ${height}
  flex-wrap: wrap;

  ${InputText} {
    min-width: 25%;
    margin: 1px;
  }
`
