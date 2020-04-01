import React, { FormEvent, forwardRef, KeyboardEvent, Ref } from 'react'
import styled from 'styled-components'
import { MaxHeightProps } from 'styled-system'

import { Chip } from '../../../Chip'
import { Flex } from '../../../Layout'
import { InputText } from '../InputText'
import {
  InputSearch,
  InputSearchProps,
  InputSearchControls,
} from '../InputSearch'

export interface InputChipsInputControlProps {
  /**
   * for controlling the input text
   */
  inputValue: string
  /**
   * callback when the input text changes (use with inputValue to control the input text)
   */
  onInputChange: (value: string) => void
}

export interface InputChipsControlProps {
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
}

export interface InputChipsCommonProps
  extends Omit<
      InputSearchProps,
      'value' | 'defaultValue' | 'onChange' | 'summary'
    >,
    MaxHeightProps {}

export interface InputChipsBaseProps
  extends InputChipsCommonProps,
    InputChipsControlProps,
    InputChipsInputControlProps {}

export const InputChipsBaseInternal = forwardRef(
  (
    {
      values,
      onChange,
      onKeyDown,
      inputValue,
      onInputChange,
      ...props
    }: InputChipsBaseProps & InputChipsInputControlProps,
    ref: Ref<HTMLInputElement>
  ) => {
    function handleDeleteChip(value: string) {
      const newValues = values.filter((v) => value !== v)
      onChange(newValues)
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      onKeyDown && onKeyDown(e)
      if (e.key === 'Backspace' && !e.defaultPrevented) {
        // If we hit backspace and there is no text left to delete, remove the last entry instead
        inputValue === '' && handleDeleteChip(values[values.length - 1])
      }
    }

    function handleClear() {
      onChange([])
      onInputChange('')
    }

    const chips = values.map((value) => {
      function onChipDelete() {
        handleDeleteChip(value)
      }
      return (
        <Chip onDelete={onChipDelete} key={value} mb={1} mt={1} ml="xxsmall">
          {value}
        </Chip>
      )
    })

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      onInputChange(e.currentTarget.value)
    }

    return (
      <InputSearch
        hideSearchIcon
        ref={ref}
        value={inputValue}
        onChange={handleInputChange}
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

InputChipsBaseInternal.displayName = 'InputChipsBaseInternal'

export const InputChipsBase = styled(InputChipsBaseInternal)`
  position: relative;

  ${Flex} {
    flex: 1;
    height: 100%;
    overflow: auto;
    padding-right: ${(props) => props.theme.space.xlarge};
  }

  ${InputText} {
    width: auto;
    min-width: 25%;
    padding-right: 0;
  }

  ${InputSearchControls} {
    position: absolute;
    top: 2px;
    right: 0;
  }
`
