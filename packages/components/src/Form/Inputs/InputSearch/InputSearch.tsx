import React, { FunctionComponent, useState } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../../Box'
import {
  CustomizableInputTextAttributes,
  InputText,
  InputTextProps,
} from '../InputText'
import { InputSearchControls } from './InputSearchControls'

export interface InputSearchProps
  extends BoxProps<HTMLInputElement>,
    InputTextProps {
  /**
   * Specifies starter value for input field.
   */
  value?: string
  /**
   * hides clear button and summary text
   */
  hideControls?: boolean
  /**
   * adds text when input value in not empty
   */
  summary?: string
}

export type InputSearchComponentType = FunctionComponent<InputSearchProps>
export type StyledInputSearchComponentType = StyledComponent<
  InputSearchComponentType,
  InputSearchProps
>

const InternalSearchFactory: InputSearchComponentType = ({
  hideControls = false,
  summary,
  onChange,
  value = '',
  width = '100%',
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  borderRadius,
  borderColor,
  ...props
}) => {
  const [inputValue, setValue] = useState(value)

  const onClear = () => setValue('')

  const updateValue = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
    onChange && onChange(event)
  }

  const controls = !hideControls && inputValue.length > 0 && (
    <InputSearchControls onClear={onClear} summary={summary} />
  )

  return (
    <InputSearchLayout
      display="flex"
      width={width}
      bg="white"
      alignItems="center"
      position="relative"
      border={border || 'solid 1px'}
      borderColor={borderColor || 'palette.charcoal300'}
      borderRadius={
        borderRadius || CustomizableInputTextAttributes.borderRadius
      }
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
    >
      <InputText
        type="search"
        onChange={updateValue}
        value={inputValue}
        focusStyle={{ outline: 'none' }}
        border="none"
        width="100%"
        {...props}
      />
      {controls}
    </InputSearchLayout>
  )
}

/** @component */
export const InputSearch: StyledInputSearchComponentType = styled<
  InputSearchComponentType
>(InternalSearchFactory)``

const InputSearchLayout = styled(Box)`
  &:focus-within {
    border: 1px solid rgba(0, 0, 0, 0);
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${InputText} {
    border: none;
    width: 100%;
    appearance: none;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      appearance: none;
    }
  }
`
