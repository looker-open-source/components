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

import { ReactNode } from 'react'

export interface InputFilterEditorProps {
  closeEditor: () => void
  filterOptions: FieldFilterOptions
  onChange: (value?: string) => void
  value?: string
}

export type InputFilterEditorRenderProp = (
  props: InputFilterEditorProps
) => ReactNode

export interface FieldFilterOptions {
  /* specify the field value */
  field: string
  /* text to be displayed in drop-down, optional, `field` is used if not specified */
  label?: string
  /**
   * ability to select multiple filter options
   * @default false
   */
  multiple?: boolean
  /* list of options to filter by */
  options?: string[]
}

export interface FieldFilter extends FieldFilterOptions {
  editor?: InputFilterEditorRenderProp
  formatValue?: (value: string) => string
  /* filter value/expression */
  value?: string
}

export interface InputFiltersProps {
  className?: string
  filters: FieldFilter[]
  hideFilterIcon?: boolean
  onChange: (filters: FieldFilter[]) => void
}
