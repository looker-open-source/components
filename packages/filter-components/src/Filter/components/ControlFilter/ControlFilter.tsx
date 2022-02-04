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
import type { FC } from 'react'
import React, { useEffect } from 'react'
import type { InternalFilterProps } from '../../types/filter_props'
import { getControlFilterInfo } from '../../utils'
import take from 'lodash/take'
import { getFilterTokenItem } from '../../utils/get_filter_token_item'

/**
 * Visual filters that can take the form of radio buttons, checkboxes, etc.
 */
export const ControlFilter: FC<InternalFilterProps> = ({
  ast,
  expressionType,
  validationMessage,
  dispatchConfigTypeChange = false,
  ...adapterProps
}) => {
  const { config, field } = adapterProps
  const { Component, props: filterTokenProps } = getControlFilterInfo(
    getFilterTokenItem(ast!, expressionType, config.type),
    adapterProps
  )

  /**
   * This effect is used by FilterEditorSettings in Edit Mode
   * because we currently delegate initializing filter value to the Filter components
   * TODO: refactor initializing filters with proper values then remove this effect
   */
  useEffect(() => {
    // When control type changes in Edit Mode, update value and default value of filter
    if (dispatchConfigTypeChange) {
      if (filterTokenProps?.date) {
        filterTokenProps?.onChange(filterTokenProps?.date)
      } else {
        filterTokenProps?.onChange(filterTokenProps?.value)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.type])

  if (!filterTokenProps || !Component) {
    // props or Component not available - nothing to render
    return null
  }

  const {
    onInputChange: filterTokenInputChange,
    options,
    max,
    ...restProps
  } = filterTokenProps

  return (
    <Component
      options={max ? take(options, max) : options}
      onInputChange={filterTokenInputChange}
      inline={config.display === 'inline'}
      validationMessage={validationMessage}
      anyOption={!(field?.category === 'parameter')}
      {...restProps}
    />
  )
}
