/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { InputText, Select } from '@looker/components'
import React from 'react'
import styled, { css } from 'styled-components'
import type { StringSingleSelectProps } from '../../../../types/string_select_props'
import type { TokenStyleProps } from '../../../../utils/filter_styles'
import { tokenStylePlaceholder } from '../../../../utils/filter_styles'
import { useOptionFiltering } from '../../../../utils/use_option_filtering'
import { usePlaceholder } from '../../../../utils/use_placeholder'

const DropdownMenuComponent = ({
  value,
  options,
  onChange,
  onInputChange,
  anyOption,
  validationMessage,
  ...props
}: StringSingleSelectProps & TokenStyleProps) => {
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
      noErrorIcon
      validationType={validationMessage?.type}
    />
  )
}

export const DropdownMenu = styled(DropdownMenuComponent)`
  ${InputText} {
    ${tokenStylePlaceholder}
    ${({ tokenStyle, value }) =>
      value !== '' && tokenStyle
        ? css`
            background-color: ${({ theme }) => theme.colors.keyAccent};
            color: ${({ theme }) => theme.colors.text5};
            &:not(:focus-within) {
              border-color: ${({ theme }) => theme.colors.ui3};
            }
            &:hover {
              border: 1px solid ${({ theme }) => theme.colors.keyInteractive};
            }
          `
        : ''}
  }
`
