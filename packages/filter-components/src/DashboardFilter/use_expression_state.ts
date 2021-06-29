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
import { useState } from 'react'
import { useControlWarn } from '@looker/components'
import type { IDashboardFilter } from '@looker/sdk'
import type { FilterChangeProps } from '../Filter/types/filter_props'

export interface UseExpressionStateProps {
  /**
   * The current value of the filter.
   * See {@link https://docs.looker.com/reference/filter-expressions Looker Filter Expressions}.
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
  expression,
  filter,
  onChange,
}: UseExpressionStateProps) => {
  const isControlled = useControlWarn({
    controllingProps: ['expression'],
    isControlledCheck: () => expression !== undefined,
    name: 'DashboardFilter',
  })
  const [uncontrolledExpression, setExpression] = useState(
    expression || filter.default_value || ''
  )

  const handleChange = (value: FilterChangeProps) => {
    setExpression(value.expression)
    onChange(value.expression)
  }

  return {
    expression: isControlled ? expression! : uncontrolledExpression,
    onChange: handleChange,
  }
}
