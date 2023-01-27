/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import type { FloatingLabelFieldProps } from '../Field/types'
import type { ValidationMessageProps } from '../../ValidationMessage'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'
import { getHasValue } from '../Field/useFloatingLabel'
import { useFormContext } from '../../Form'
import { Tooltip } from '../../../Tooltip'
import { useID, useTranslation } from '../../../utils'
import type { InputTimeSelectProps } from '../../Inputs/InputTimeSelect'
import { InputTimeSelect } from '../../Inputs/InputTimeSelect'
import { VisuallyHidden } from '../../../VisuallyHidden'

export interface FieldTimeSelectProps
  extends FloatingLabelFieldProps,
    InputTimeSelectProps {}

export const FieldTimeSelect = styled(
  forwardRef((props: FieldTimeSelectProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)
    const { onChange: propsOnChange, ...fieldProps } = omitFieldProps(props)
    const [formatError, setFormatError] = useState('')
    const { t } = useTranslation('FieldTimeSelect')
    const onChange = (value?: string) => {
      propsOnChange?.(value)
      if (value) {
        setFormatError('')
      } else {
        setFormatError(t('Please use format HHMM'))
      }
    }

    const onBlur = () => {
      // Clear the format errors on blur since the combobox will revert back to
      // the previously selected value or the new value is it is valid
      setFormatError('')
    }
    const errorMessage = (
      formatError ? { message: formatError, type: 'error' } : validationMessage
    ) as ValidationMessageProps
    return (
      <FloatingLabelField
        data-testid="FieldSelectMultiId"
        {...pickFieldProps(props)}
        id={id}
        hasValue={getHasValue(props)}
      >
        <Tooltip
          placement="top-end"
          content={formatError}
          isOpen={true}
          canClose={() => false}
        >
          <div>
            <VisuallyHidden aria-live="polite">{formatError}</VisuallyHidden>
            <InputTimeSelect
              {...fieldProps}
              aria-labelledby={`labelledby-${id}`}
              id={id}
              validationType={errorMessage?.type}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
        </Tooltip>
      </FloatingLabelField>
    )
  })
)``
