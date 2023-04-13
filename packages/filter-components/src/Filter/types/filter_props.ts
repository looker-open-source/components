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
import type {
  FilterExpressionType,
  UserAttributeWithValue,
  FilterASTNode,
  FilterModel,
} from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { Option } from './option'
import type { ValidationMessageProps } from '@looker/components'

export interface FilterChangeProps {
  expression: string
}

type ExpressionTypeProps = {
  /**
   * The type of the expression. Required if field is not provided.
   * Will be derived from field and type if absent.
   */
  expressionType: FilterExpressionType
  /**
   * The field associated with the filter.
   * Required if expressionType is not provided.
   */
  field: ILookmlModelExploreField | null
  /**
   * The type on the DashboardFilter, e.g. field_filter,
   * used to derive expressionType if that is not provided
   */
  type: string
}

type AtLeastOnePropertyOf<T> = {
  [K in keyof T]: { [L in K]: T[L] } & { [L in Exclude<keyof T, K>]?: T[L] }
}[keyof T]
// Use a union to get "either / or" required
// Use an intersection + Partial to make them both also optional
// Combined result is "at least one of"
type ExpressionTypeOrFieldProps = AtLeastOnePropertyOf<ExpressionTypeProps>

/**
 * Interface for the <Filter/> component's props property.
 * Requires at least one of: expressionType, field, type
 */
export type FilterProps = ExpressionTypeOrFieldProps & {
  /**
   * The UI config that determines how a control filter will render and behave
   */
  config?: any
  /**
   * The current value of the filter.
   * See {@link https://cloud.google.com/looker/docs/reference/filter-expressions Looker Filter Expressions}.
   */
  expression: string
  /**
   * Used to generate unique key for multi-condition advanced filters
   */
  name: string
  /**
   * Flag for filters where suggestions are link to another filter
   */
  isLinked?: boolean
  /**
   * Suggestions are currently loading
   */
  isLoading?: boolean
  /**
   * Filter will render error styling if this is true and expression is empty
   */
  isRequired?: boolean
  /**
   * Render filter horizontally (applies to checkboxes and radio buttons)
   */
  inline?: boolean
  /**
   * Called when the filter expression is changed
   */
  onChange?: (value: FilterChangeProps) => void
  /**
   * Called in the event that user is typing in a suggestable filter, but the results
   * are at the front-end limit of 999, so filtering must be done in the API
   */
  onInputChange?: (value: string) => void
  /**
   * Called when user attributes are needed in the filter
   */
  loadUserAttributes?: () => void
  /**
   * Can be initially empty – loadUserAttributes will be called when they are needed
   */
  userAttributes?: UserAttributeWithValue[]
  /**
   * Suggestions for the filter – see useSuggestable hook for fetching suggestions via the API
   */
  suggestions?: string[]
  /**
   * Enumerations for the filter
   */
  enumerations?: Option[] | null
  /**
   * Used to initialize filters in Edit Mode – do not use if filter is not editable
   */
  dispatchConfigTypeChange?: boolean
  /**
   * Skip checking if expression can be rendered by filter control
   */
  skipFilterConfigCheck?: boolean
  /**
   * Allow multiple values to filter by
   */
  allowMultipleValues?: boolean
  /**
   * Hide the add button even when allowMultipleValues is true
   */
  hideAdd?: boolean
}

/**
 * Interface for <InternalFilter /> and <InternalFilterAdvanced />
 */
export interface InternalFilterProps
  extends Omit<
    FilterProps,
    'type' | 'expressionType' | 'expression' | 'loadUserAttributes' | 'onChange'
  > {
  expressionType: FilterExpressionType
  ast: FilterASTNode | undefined
  changeFilter: (id: number, newItem: FilterModel) => void
  validationMessage: ValidationMessageProps
}
