import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'

import { useControlWarn } from '../../../utils'
import { Flex } from '../../../Layout'
import { InputText } from '../InputText'

interface ChipProps {
  value: string
  onDelete?: () => void
}

function ChipInternal({ onDelete, value, ...props }: ChipProps) {
  return (
    <div {...props}>
      {value} <span onClick={onDelete}>(x)</span>
    </div>
  )
}

export const Chip = styled(ChipInternal)`
  border: 1px solid;
  display: inline-block;
`

/**
 * ChipInput is a component that appears to be a regular text input,
 * but also allows (validated) user inputs to be stored as 'chips' (see the Chip element)
 */

interface ChipInputProps {
  name: string
  placeholder?: string
  values: string[]
  onChange: (emails: string[]) => void
  inputValue?: string
  onInputChange?: (value: string) => void
  validate?: (value: string) => boolean
}

function getValuesFromInput(
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

export function InputChip({
  values,
  onChange,
  inputValue: controlledInputValue,
  onInputChange,
  validate,
  ...props
}: ChipInputProps) {
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
    const { newValues, newInputValue } = getValuesFromInput(
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
        // Update values when the user hits return
        updateValues()
    }
  }

  function handleInputChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget
    let newValue = value
    // If the last character is a comma, update the values
    if (value[value.length - 1] === ',') {
      const { newValues, newInputValue } = getValuesFromInput(
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

  const chips = values.map(value => {
    function onChipDelete() {
      handleDeleteChip(value)
    }
    return <Chip onDelete={onChipDelete} value={value} key={value} />
  })

  return (
    <Flex
      name={props.name}
      minHeight="28px"
      width="100%"
      flexWrap="wrap"
      border="1px solid"
      borderColor="palette.charcoal300"
      borderRadius="5px"
    >
      {chips}
      <InputText
        id="input"
        height="24px"
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        placeholder={props.placeholder}
        border="0"
        // Input should be full width if there are no values; otherwise, narrow the input to stay on one line
        width={values.length < 1 ? '100%' : '35%'}
        style={{ margin: '1px' }} // Special case to align within ChipInput
        focusStyle={{
          border: '0',
          outline: 'none',
        }}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </Flex>
  )
}
