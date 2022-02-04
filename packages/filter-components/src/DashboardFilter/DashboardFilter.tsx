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
import React from 'react'
import { Field, Status, Tooltip } from '@looker/components'
import { Filter } from '../Filter/Filter'
import { useValidationMessage } from '../Filter/utils'
import type { UseSuggestableProps } from './use_suggestable'
import { useSuggestable } from './use_suggestable'
import type { UseExpressionStateProps } from './use_expression_state'
import { useExpressionState } from './use_expression_state'

export type DashboardFilterProps = UseExpressionStateProps & UseSuggestableProps

/**
 * Renders a dashboard filter, including label and validation, and fetches suggestions
 * if necessary. For rendering just the filter input control on its own, see `Filter`.
 */
export const DashboardFilter: FC<DashboardFilterProps> = ({
  filter,
  sdk,
  ...rest
}) => {
  const { id, name, type, field, required, ui_config } = filter

  const stateProps = useExpressionState({ filter, ...rest })

  const { errorMessage, suggestableProps } = useSuggestable({
    filter,
    sdk,
  })

  const validationMessage = useValidationMessage(
    stateProps.expression,
    required
  )

  return (
    <Field
      id={id || ''}
      label={name}
      detail={
        errorMessage && (
          <Tooltip content={errorMessage}>
            <Status intent="critical" data-testid="error-icon" />
          </Tooltip>
        )
      }
      validationMessage={validationMessage}
    >
      <Filter
        name={name || ''}
        type={type}
        field={field}
        config={ui_config}
        isRequired={required}
        {...suggestableProps}
        {...stateProps}
      />
    </Field>
  )
}
