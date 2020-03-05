/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { CompatibleHTMLProps, SpaceProps } from '@looker/design-tokens'
import { ValidationType } from '../ValidationMessage'

export interface InputProps extends CompatibleHTMLProps<HTMLInputElement> {
  validationType?: ValidationType
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
  'onChange',
  'placeholder',
  'readOnly',
  'required',
  'pattern',
  'step',
  'value',
  'aria-autocomplete',
  'aria-label',
  'aria-describedby',
  'aria-labelledby',
]

export interface CheckboxRadioContainerProps extends SpaceProps {
  branded?: boolean
}
