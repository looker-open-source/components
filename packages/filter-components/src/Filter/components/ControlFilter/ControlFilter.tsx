/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useEffect } from 'react'
import type { InternalFilterProps } from '../../types/filter_props'
import { getControlFilterInfo, calculateSuggestOptions } from '../../utils'
import { getFilterTokenItem } from '../../utils/get_filter_token_item'

/**
 * Visual filters that can take the form of radio buttons, checkboxes, etc.
 */
export const ControlFilter = ({
  ast,
  expressionType,
  validationMessage,
  dispatchConfigTypeChange = false,
  ...adapterProps
}: InternalFilterProps) => {
  const { config, field } = adapterProps
  const { Component, props: filterTokenProps } = getControlFilterInfo(
    getFilterTokenItem(ast || {}, expressionType, config.type),
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

  const { onInputChange: filterTokenInputChange, ...restProps } =
    filterTokenProps

  const toggleOptions = calculateSuggestOptions(filterTokenProps)

  return (
    <Component
      onInputChange={filterTokenInputChange}
      inline={config.display === 'inline'}
      validationMessage={validationMessage}
      anyOption={!(field?.category === 'parameter')}
      {...restProps}
      options={toggleOptions}
    />
  )
}
