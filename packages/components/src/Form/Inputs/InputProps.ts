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

import pick from 'lodash/pick'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { ValidationType } from '../ValidationMessage'

export interface InputProps extends CompatibleHTMLProps<HTMLInputElement> {
  validationType?: ValidationType
  'data-autofocus'?: string
  'data-testid'?: string
}

export interface InputTextTypeProps {
  /**
   *
   * @default text
   */
  type?:
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'week'
}

export const inputPropKeys = [
  'accept',
  'autoFocus',
  'autoComplete',
  'checked',
  'data-autofocus',
  'data-testid',
  'defaultValue',
  'defaultChecked',
  'disabled',
  'id',
  'list',
  'max',
  'maxLength',
  'min',
  'minLength',
  'multiple',
  'name',
  'onBlur',
  'onChange',
  'onClick',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onFocus',
  'onKeyDown',
  'onKeyPress',
  'onPaste',
  'placeholder',
  'readOnly',
  'required',
  'pattern',
  'step',
  'tabIndex',
  'value',
  'aria-activedescendant',
  'aria-autocomplete',
  'aria-invalid',
  'aria-label',
  'aria-describedby',
  'aria-labelledby',
]
/**
 * Adds data-autofocus attribute for use with focus-trap (Popover & Dialog)
 * Can't use the autofocus dom attribute b/c React does not pass it down
 * https://github.com/facebook/react/issues/11851
 */
export const getAutoFocusProps = (autoFocus?: boolean) => {
  return autoFocus ? { autoFocus, 'data-autofocus': 'true' } : {}
}

export const pickInputProps = <T extends { autoFocus?: boolean }>({
  autoFocus,
  ...props
}: T) => {
  const inputProps = pick(props, inputPropKeys)
  return { ...getAutoFocusProps(autoFocus), ...inputProps }
}
