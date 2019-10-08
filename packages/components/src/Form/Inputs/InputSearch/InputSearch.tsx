import React, { forwardRef, Ref, useState } from 'react'
import styled from 'styled-components'
import { border, BorderProps, layout, LayoutProps } from '@looker/design-tokens'
import {
  CustomizableInputTextAttributes,
  InputText,
  InputTextProps,
} from '../InputText'
import { InputSearchControls } from './InputSearchControls'

interface InputSearchLayoutProps extends BorderProps, LayoutProps {}

export interface InputSearchProps extends InputTextProps {
  /**
   * hides clear button and summary text
   */
  hideControls?: boolean
  /**
   * adds text when input value in not empty
   */
  summary?: string
}

const InputSearchLayout = styled.div<InputSearchLayoutProps>`
  &:focus-within {
    border: 1px solid rgba(0, 0, 0, 0);
    outline: 5px auto -webkit-focus-ring-color;
  }
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.palette.white};

  ${border}
  ${layout}

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

const InputSearchComponent = forwardRef(
  (
    {
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
    }: InputSearchProps,
    ref: Ref<HTMLInputElement>
  ) => {
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
        width={width}
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
          height={props.height as any}
          size={props.size as any}
          {...props}
          ref={ref}
        />
        {controls}
      </InputSearchLayout>
    )
  }
)

export const InputSearch = styled(InputSearchComponent)``
