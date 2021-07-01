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
import { InputText, Select } from '@looker/components'
import type { FC } from 'react'
import React from 'react'
import styled, { css } from 'styled-components'
import type { StringSingleSelectProps } from '../../../../types/string_select_props'
import type { TokenStyleProps } from '../../../../utils/filter_styles'
import {
  inputErrorStyle,
  tokenStylePlaceholder,
} from '../../../../utils/filter_styles'
import { useOptionFiltering } from '../../../../utils/use_option_filtering'
import { usePlaceholder } from '../../../../utils/use_placeholder'

const DropdownMenuComponent: FC<StringSingleSelectProps & TokenStyleProps> = ({
  value,
  options,
  onChange,
  onInputChange,
  anyOption,
  validationMessage,
  ...props
}) => {
  const { filteredOptions, noOptionsLabel, onFilter } = useOptionFiltering({
    value,
    options,
    onInputChange,
  })

  const placeholderProps = usePlaceholder(value, validationMessage)

  return (
    <Select
      {...props}
      {...placeholderProps}
      options={filteredOptions}
      noOptionsLabel={noOptionsLabel}
      isClearable={anyOption}
      value={value}
      onChange={onChange}
      isFilterable
      onFilter={onFilter}
      minWidth="12rem"
      maxWidth="20rem"
      autoResize
      listLayout={{
        maxWidth: ['95vw', '90vw', '80vw', '65vw', '50vw'],
        width: 'auto',
      }}
    />
  )
}

export const DropdownMenu = styled(DropdownMenuComponent)`
  ${InputText} {
    ${inputErrorStyle}
    ${tokenStylePlaceholder}
    ${({ tokenStyle, value }) =>
      value !== '' && tokenStyle
        ? css`
            background-color: ${({ theme }) => theme.colors.keySubtle};
            color: ${({ theme }) => theme.colors.key};
            &:not(:focus-within) {
              border-color: ${({ theme }) => theme.colors.ui2};
            }
          `
        : ''}
  }
`
