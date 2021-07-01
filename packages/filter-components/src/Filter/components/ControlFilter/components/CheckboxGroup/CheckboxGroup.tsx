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
import {
  CheckboxGroup as CheckboxGroupComponent,
  FormContext,
} from '@looker/components'
import pick from 'lodash/pick'
import React from 'react'
import type { StringMultiSelectProps } from '../../../../types/string_select_props'
import { ERROR_TYPE } from '../../../../utils'

/*
 * Filter CheckboxGroup adds red-outline around the checkbox when the CheckboxGroup has an error
 * Kinda hacky change when LENS-1066 is completed
 */
export const CheckboxGroup = ({
  validationMessage,
  ...props
}: StringMultiSelectProps) => (
  <FormContext.Provider
    value={{
      validationMessages: {
        'filter-checkbox-group': {
          type: validationMessage?.type === ERROR_TYPE ? ERROR_TYPE : undefined,
        },
      },
    }}
  >
    <CheckboxGroupComponent
      name="filter-checkbox-group"
      {...pick(props, ['inline', 'onChange', 'options', 'value'])}
    />
  </FormContext.Provider>
)
