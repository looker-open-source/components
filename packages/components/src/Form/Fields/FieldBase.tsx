import React from 'react'
import styled from 'styled-components'
import { FontSizes, FontWeights } from '@looker/design-tokens'
import { ValidationMessageProps } from '../ValidationMessage/ValidationMessage'

export interface FieldBaseProps {
  className?: string
  disabled?: boolean
  /**
   * Defines the label for the field.
   */
  label?: string
  /**
   * Specifies the fontWeight of the internal Label.
   * TODO - Deprecate usage in HT, then here.
   */
  labelFontSize?: FontSizes
  /**
   * Specifies the fontWeight of the internal Label.
   */
  labelFontWeight?: FontWeights
  /**
   * Whether or not the field should display a `*` denoting it is required.
   */
  required?: boolean
  /**
   *
   * Holds the type of validation (error, warning, etc.) and corresponding message.
   */
  validationMessage?: ValidationMessageProps
}

export const RequiredStar = styled((props) => (
  <span {...props} aria-hidden="true">
    {' '}
    *
  </span>
))`
  color: ${(props) => props.theme.colors.palette.red500};
`
