/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import pick from 'lodash/pick'
import type { AriaAttributes } from 'react'
import type { ValidationType } from '../ValidationMessage'

const ariaKeys = [
  'aria-describedby',
  'aria-invalid',
  'aria-label',
  'aria-labelledby',
] as const

type SelectedAriaAttributes = Pick<AriaAttributes, typeof ariaKeys[number]>

export interface AriaAndValidationProps extends SelectedAriaAttributes {
  required?: boolean
  validationType?: ValidationType
}

export function pickAriaAndValidationProps({
  required,
  validationType,
  ...props
}: AriaAndValidationProps) {
  const ariaProps = pick(props, ariaKeys)
  return { ...ariaProps, 'aria-invalid': validationType === 'error', required }
}

type NotAriaAndValidationProps<PropsType extends AriaAndValidationProps> = Omit<
  PropsType,
  typeof ariaKeys[number] | 'validationType' | 'required'
>

export function omitAriaAndValidationProps<
  PropsType extends AriaAndValidationProps
>(props: PropsType): NotAriaAndValidationProps<PropsType> {
  const {
    'aria-describedby': _ariaDescribedBy,
    'aria-invalid': _ariaInvalid,
    'aria-label': _ariaLabel,
    'aria-labelledby': _ariaLabelledBy,
    validationType: _validationType,
    required: _required,
    ...rest
  } = props

  return rest
}
