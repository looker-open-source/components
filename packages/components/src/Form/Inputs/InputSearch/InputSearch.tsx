import React, { forwardRef, Ref, useState } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  reset,
} from 'looker-design-tokens'
import {
  CustomizableInputTextAttributes,
  InputText,
  InputTextProps,
} from '../InputText'
import { InputSearchControls } from './InputSearchControls'

interface InputSearchLayoutProps extends BorderProps, LayoutProps {}

export interface InputSearchProps
  extends Omit<InputTextProps, 'height' | 'size' | 'width'> {
  /**
   * hides clear button and summary text
   */
  hideControls?: boolean
  /**
   * adds text when input value in not empty
   */
  summary?: string

  value?: string
  width?: string
  height?: string
}

const InputSearchLayout = styled.div<InputSearchLayoutProps>`
  ${reset}
  ${border}
  ${layout}

  align-items: center;
  display: flex;
  background: ${props => props.theme.colors.palette.white};
  position: relative;

  &:focus-within {
    border-color: transparent;
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

InputSearchLayout.defaultProps = {
  border: '1px solid',
  borderColor: 'palette.charcoal300',
  borderRadius: CustomizableInputTextAttributes.borderRadius,
}

const InputSearchComponent = forwardRef(
  (props: InputSearchProps, ref: Ref<HTMLInputElement>) => {
    const {
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
      ...inputProps
    } = props
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
        border={border}
        borderColor={borderColor}
        borderRadius={borderRadius}
        borderTop={borderTop}
        borderBottom={borderBottom}
        borderLeft={borderLeft}
        borderRight={borderRight}
        width={width}
      >
        <InputText
          type="search"
          onChange={updateValue}
          value={inputValue}
          focusStyle={{ outline: 'none' }}
          border="none"
          width="100%"
          {...inputProps}
          ref={ref}
        />
        {controls}
      </InputSearchLayout>
    )
  }
)

InputSearchComponent.displayName = 'InputSearchComponent'

export const InputSearch = styled(InputSearchComponent)``
