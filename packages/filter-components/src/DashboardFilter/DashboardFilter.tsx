/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useContext, useEffect } from 'react'
import { Field, Status, Tooltip } from '@looker/components'
import { Filter } from '../Filter/Filter'
import { useValidationMessage } from '../Filter/utils'
import type { UseSuggestableProps } from './use_suggestable'
import { useSuggestable } from './use_suggestable'
import type { UseExpressionStateProps } from './use_expression_state'
import { useExpressionState } from './use_expression_state'
import { FilterContext } from '../FilterCollection'

export type DashboardFilterProps = UseExpressionStateProps & UseSuggestableProps

/**
 * Renders a dashboard filter, including label and validation, and fetches suggestions
 * if necessary. For rendering just the filter input control on its own, see `Filter`.
 */
export const DashboardFilter = ({
  filter,
  sdk,
  ...rest
}: DashboardFilterProps) => {
  const { id, name, type, field, required, ui_config, allow_multiple_values } =
    filter

  const { removeFilter } = useContext(FilterContext)

  useEffect(() => {
    return () => {
      removeFilter(filter)
    }
  }, [removeFilter, filter])

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
      label={name || ''}
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
        type={type || ''}
        field={field}
        config={ui_config}
        isRequired={required}
        {...suggestableProps}
        {...stateProps}
        allowMultipleValues={!!allow_multiple_values}
      />
    </Field>
  )
}
