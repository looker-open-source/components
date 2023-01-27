/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { ValidationMessageProps } from '@looker/components'
import { InputText, InputSearch } from '@looker/components'
import type { FilterModel } from '@looker/filter-expressions'
import isArray from 'lodash/isArray'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import type { Option } from '../../../../../../types/option'
import type { PlacementProps } from '../../../../../../utils/filter_styles'
import {
  inputPlacementStyle,
  multiInputWidth,
} from '../../../../../../utils/filter_styles'
import { createOptions } from '../../../../../../utils/option_utils'
import { useOptionFiltering } from '../../../../../../utils/use_option_filtering'
import { usePlaceholder } from '../../../../../../utils/use_placeholder'

interface StringInputProps extends PlacementProps {
  className?: string
  onChange?: (id?: string, props?: any) => void
  onInputChange?: (value: string) => void
  isLoading?: boolean
  item: FilterModel
  suggestions?: string[]
  enumerations?: Option[]
  validationMessage?: ValidationMessageProps
  id?: string
  width?: string | number
  height?: string | number
}

export const StringInputLayout = ({
  className,
  onChange,
  onInputChange,
  isLoading,
  item,
  suggestions,
  enumerations,
  validationMessage,
  id,
  width = multiInputWidth,
  height,
}: StringInputProps) => {
  // if suggestions exist, create Option[]
  const options = useMemo(() => {
    return suggestions ? createOptions(suggestions) : enumerations || []
  }, [suggestions, enumerations])

  const { filteredOptions, noOptionsLabel, onFilter } = useOptionFiltering({
    excludeValues: true,
    onInputChange,
    options,
    value: item.value,
  })

  const handleChange = (newValue?: string) => {
    onFilter(newValue || '')
    onChange?.(item.id, { value: [newValue] })
  }

  const comboboxInputRef = React.useRef<HTMLInputElement>(null)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      comboboxInputRef?.current?.click()
    }
  }

  const placeholderProps = usePlaceholder(item.value, validationMessage)

  const commonProps = {
    ...placeholderProps,
    className,
    height,
    id,
    maxHeight: 145,
    onChange: handleChange,
    noErrorIcon: true,
    validationType: validationMessage?.type,
    width,
  }
  const value =
    isArray(item.value) && item.value.length ? item.value[0] : item.value

  return (
    <InputSearch
      {...commonProps}
      options={filteredOptions}
      noOptionsLabel={noOptionsLabel}
      indicator={false}
      isLoading={isLoading}
      value={value}
      onKeyDown={handleKeyDown}
      isClearable={true}
      ref={comboboxInputRef}
      hideSearchIcon={true}
      openOnClick={true}
    />
  )
}

export const StringInput = styled(StringInputLayout)`
  ${inputPlacementStyle}
  ${InputText} {
    ${inputPlacementStyle}
  }
`
