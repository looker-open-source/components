import React, { FormEvent, forwardRef, Ref, useState } from 'react'
import styled from 'styled-components'
import { MaxHeightProps } from 'styled-system'

import { useControlWarn } from '../../../utils'
import { Chip } from '../../../Chip'
import { InputText } from '../InputText'
import { InputSearch, InputSearchProps } from '../InputSearch'

/**
 * InputChips is a component that appears to be a regular text input,
 * but also allows (validated) user inputs to be stored as 'chips' (see the Chip element)
 */

interface InputChipsProps
  extends MaxHeightProps,
    Omit<
      InputSearchProps,
      'value' | 'defaultValue' | 'onChange' | 'onInvalid'
    > {
  /**
   * InputChips is a controlled component since unlike native inputs,
   * you can't easily access the current value via dom API
   */
  values: string[]
  /**
   * InputChips is a controlled component since unlike native inputs,
   * you can't easily access the current value via dom API
   */
  onChange: (values: string[]) => void
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
  /**
   * callback when values fail validation
   */
  onInvalid?: (values: string[]) => void
  /**
   * callback when values are duplicates
   */
  onDuplicate?: (values: string[]) => void
}

function getUpdatedValues(
  inputValue: string,
  currentValues: string[],
  validate?: (value: string) => boolean
) {
  const duplicateValues: string[] = []
  const invalidValues: string[] = []
  const unusedValues: string[] = []
  const validValues: string[] = []

  // Values may be separated by ',' '\t' and ' '
  const inputValues: string[] = inputValue.split(/[,\t]+/)
  inputValues.forEach((val: string) => {
    if (val.trim() === '') return
    // Make sure each value is valid and doesn't already exist
    if (validate && !validate(val)) {
      unusedValues.push(val)
      return invalidValues.push(val)
    } else if (currentValues && currentValues.includes(val)) {
      unusedValues.push(val)
      return duplicateValues.push(val)
    } else {
      return validValues.push(val)
    }
  })

  return { duplicateValues, invalidValues, unusedValues, validValues }
}

export const InputChipsInternal = forwardRef(
  (
    {
      values,
      onChange,
      inputValue: controlledInputValue,
      onInputChange,
      validate,
      onInvalid,
      onDuplicate,
      ...props
    }: InputChipsProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['inputValue', 'onInputChange'],
      isControlledCheck: () =>
        controlledInputValue !== undefined && onInputChange !== undefined,
      name: 'InputChips',
    })

    const [uncontrolledValue, setUncontrolledValue] = useState('')
    const inputValue = isControlled ? controlledInputValue : uncontrolledValue

    const setInputValue = (val: string) => {
      if (!isControlled) {
        setUncontrolledValue(val)
      }
      onInputChange && onInputChange(val)
    }

    function updateValues(newInputValue?: string) {
      const {
        duplicateValues,
        invalidValues,
        unusedValues,
        validValues,
      } = getUpdatedValues(
        // TypeScript can't tell that inputValue won't be undefined
        newInputValue || (inputValue as string),
        values,
        validate
      )

      // Save valid values and keep invalid ones in the input
      const updatedInputValue = unusedValues.join(', ')
      const updatedValues = validValues.length && [...values, ...validValues]
      if (updatedValues) {
        onChange(updatedValues)
      }

      if (invalidValues.length > 0) {
        onInvalid && onInvalid(invalidValues)
      }
      if (duplicateValues.length > 0) {
        onDuplicate && onDuplicate(duplicateValues)
      }

      setInputValue(updatedInputValue)
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
      // If the last character is a comma, update the values
      if (value[value.length - 1] === ',') {
        updateValues(value)
      } else {
        setInputValue(value)
      }
    }

    function handleClear() {
      onChange([])
      setInputValue('')
    }

    const chips = values.map(value => {
      function onChipDelete() {
        handleDeleteChip(value)
      }
      return (
        <Chip onDelete={onChipDelete} key={value} mb={1} mt={1} ml="xxsmall">
          {value}
        </Chip>
      )
    })

    return (
      <InputSearch
        ref={ref}
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

InputChipsInternal.displayName = 'InputChipsInternal'

export const InputChips = styled(InputChipsInternal)`
  align-items: flex-start;
  flex-wrap: wrap;

  ${InputText} {
    min-width: 25%;
    padding-left: ${props => props.theme.space.xsmall};
  }
`
InputChips.defaultProps = {
  px: 'xxsmall',
}
