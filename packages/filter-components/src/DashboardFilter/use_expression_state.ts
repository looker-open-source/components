/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { useContext, useEffect, useState } from 'react'
import { useControlWarn } from '@looker/components'
import type { IDashboardFilter } from '@looker/sdk'
import type { FilterChangeProps } from '../Filter/types/filter_props'
import { FilterContext } from '../FilterCollection'

export interface UseExpressionStateProps {
  /**
   * The current value of the filter.
   * See {@link https://cloud.google.com/looker/docs/reference/filter-expressions Looker Filter Expressions}.
   */
  expression?: string
  /**
   * A dashboard filter as defined in @looker/sdk
   */
  filter: IDashboardFilter
  /**
   * Called when the filter expression is changed
   */
  onChange: (expression: string) => void
}

/**
 * Custom state hook for filter expression
 */
export const useExpressionState = ({
  expression: propsExpression,
  filter,
  onChange,
}: UseExpressionStateProps) => {
  const { updateExpression } = useContext(FilterContext)

  const isControlled = useControlWarn({
    controllingProps: ['expression'],
    isControlledCheck: () => propsExpression !== undefined,
    name: 'DashboardFilter',
  })
  const [uncontrolledExpression, setExpression] = useState(
    propsExpression || filter.default_value || ''
  )

  const handleChange = (value: FilterChangeProps) => {
    setExpression(value.expression)
    onChange(value.expression)
  }

  const expression = isControlled
    ? propsExpression || ''
    : uncontrolledExpression

  useEffect(() => {
    updateExpression(filter, expression)
  }, [filter, expression, updateExpression])

  return {
    expression,
    onChange: handleChange,
  }
}
