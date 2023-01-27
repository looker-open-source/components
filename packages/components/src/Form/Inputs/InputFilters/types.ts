/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'

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
  /**
   * Placeholder text for input when empty
   *
   * I18n recommended: content that is user visible should be treated for i18n
   *
   * Defaults to internationalized "Filter List"
   */
  placeholder?: string
  onChange: (filters: FieldFilter[]) => void
}
