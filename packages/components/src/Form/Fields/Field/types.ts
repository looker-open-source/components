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

import type { WidthProps } from '@looker/design-tokens'
import type { FocusEvent, ReactNode } from 'react'
import type { ValidationMessageProps } from '../../ValidationMessage/ValidationMessage'
import type { LabelProps } from '../../Label'

type FieldLabelBaseProps = {
  /**
   * Id of the input element to match a label to.
   */
  id?: string
  /**
   * Defines the label for the field.
   * I18n recommended: content that is user visible should be treated for i18n
   */
  label?: ReactNode
  /**
   * Whether or not the field should display a `*` denoting it is required.
   */
  required?: boolean
}

export type UseFloatingLabelProps = {
  /**
   * Internal only
   * @private
   */
  hasValue?: boolean
  /**
   * Internal only
   * @private
   */
  labelOffset?: string
  /**
   * Internal only
   * @private
   */
  checkValueOnBlur?: false | ((e: FocusEvent) => boolean)
}

export type FieldBaseProps = FieldLabelBaseProps & {
  className?: string
  children?: ReactNode
  /**
   * Allows Field to adjust to the width of the input (InputText and Select)
   */
  autoResize?: boolean
  disabled?: boolean
  /**
   * notes and details added to the top right corner of the field
   * I18n recommended: content that is user visible should be treated for i18n
   */
  detail?: ReactNode
  /**
   * notes and more info added to the bottom of the field
   * I18n recommended: content that is user visible should be treated for i18n
   */
  description?: ReactNode
  /**
   * Determines where to place the label in relation to the input.
   * @default false
   */
  inline?: boolean
  /**
   * Holds the type of validation (error, warning, etc.) and corresponding message.
   */
  validationMessage?: ValidationMessageProps
}

export type HideLabelProps = {
  /**
   * Label will be visually hidden
   * @default false
   */
  hideLabel?: boolean
  /**
   * Apply label using aria-label, there will be no visible label in the UI
   */
  ariaLabelOnly?: boolean
}

export type FieldProps = FieldBaseProps & WidthProps & HideLabelProps

export type FloatingLabelFieldProps = FieldProps & {
  /**
   * External label placement above the field
   * @default false
   */
  externalLabel?: boolean
}

export type FloatingLabelFieldPropsInternal = FloatingLabelFieldProps &
  UseFloatingLabelProps

export type FieldLabelProps = HideLabelProps & FieldLabelBaseProps & LabelProps
