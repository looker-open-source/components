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
import { InputText, SelectMulti } from '@looker/components'
import type { FC } from 'react'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import type { StringMultiSelectProps } from '../../../../types/string_select_props'
import type { TokenStyleProps } from '../../../../utils/filter_styles'
import { tokenStylePlaceholder } from '../../../../utils/filter_styles'
import { useOptionFiltering } from '../../../../utils/use_option_filtering'
import { usePlaceholder } from '../../../../utils/use_placeholder'

export type TagListProps = StringMultiSelectProps & TokenStyleProps

const TagListComponent: FC<TagListProps> = ({
  value,
  options,
  onChange,
  onInputChange,
  validationMessage,
  ...props
}) => {
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
