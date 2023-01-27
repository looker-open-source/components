/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { InputText, SelectMulti } from '@looker/components'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import type { StringMultiSelectProps } from '../../../../types/string_select_props'
import type { TokenStyleProps } from '../../../../utils/filter_styles'
import { tokenStylePlaceholder } from '../../../../utils/filter_styles'
import { useOptionFiltering } from '../../../../utils/use_option_filtering'
import { usePlaceholder } from '../../../../utils/use_placeholder'

export type TagListProps = StringMultiSelectProps & TokenStyleProps

const TagListComponent = ({
  value,
  options,
  onChange,
  onInputChange,
  validationMessage,
  ...props
}: TagListProps) => {
  const { filteredOptions, noOptionsLabel, onFilter } = useOptionFiltering({
    value,
    options,
    onInputChange,
  })

  const handleChange = (newValues?: string[]) => {
    onChange(newValues || [])
  }

  const placeholderProps = usePlaceholder(value, validationMessage)

  // TODO(benshope) remove this hack when the components people
  // fix the height on the infinite scroll component
  const resizeHappened = useRef<boolean>()
  useEffect(() => {
    if (options.length && !resizeHappened.current) {
      window.dispatchEvent(new Event('resize'))
      resizeHappened.current = true
    }
  }, [options.length])

  return (
    <SelectMulti
      {...props}
      {...placeholderProps}
      removeOnBackspace={false}
      values={value}
      onChange={handleChange}
      isFilterable
      onFilter={onFilter}
      options={filteredOptions}
      noOptionsLabel={noOptionsLabel}
      width={410}
      maxWidth="100%"
      maxHeight={145}
      listLayout={{
        maxWidth: ['95vw', '90vw', '80vw', '65vw', '50vw'],
        width: 'auto',
      }}
      noErrorIcon
      validationType={validationMessage?.type}
    />
  )
}

export const TagList = styled(TagListComponent)`
  ${InputText} {
    ${tokenStylePlaceholder}
  }
`
