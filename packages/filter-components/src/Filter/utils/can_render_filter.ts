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
  FilterASTNode,
  FilterExpressionType,
  FilterModel,
  UserAttributeWithValue,
} from '@looker/filter-expressions'
import { parseFilterExpression } from '@looker/filter-expressions'
import { getControlFilterInfo } from '.'
import noop from 'lodash/noop'
import type { FilterUIConfig } from '../types/filter_ui_config'
import { FilterUIDisplay, FilterUIType } from '../types/filter_ui_config'
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { Option } from '../types/option'
import { isValidFilterType } from './filter_token_type_map'

interface RenderFilterCommonProps {
  config?: FilterUIConfig
  field?: ILookmlModelExploreField | null
  suggestions?: string[]
  enumerations?: Option[] | null
  skipFilterConfigCheck?: boolean
}
interface RenderFilterASTProps extends RenderFilterCommonProps {
  ast: FilterASTNode
}

interface RenderFilterExpressionProps extends RenderFilterCommonProps {
  expression: string
  expressionType: FilterExpressionType
  userAttributes?: UserAttributeWithValue[]
}

export type RenderFilterProps =
  | RenderFilterASTProps
  | RenderFilterExpressionProps

/**
 * Tests if a filter can be rendered for its uiConfig type
 * @param RenderFilterProps
 * @returns
 */
export const canRenderFilter = ({
  config,
  field,
  suggestions,
  enumerations,
  ...filterProps
}: RenderFilterProps) => {
  // advanced filters can always be rendered
  if (config?.type === FilterUIType.Advanced) return true

  if (!isValidFilterType(config?.type)) return false

  let ast: FilterASTNode
  if ('ast' in filterProps) {
    ast = filterProps.ast
  } else {
    ast = parseFilterExpression(
      filterProps.expressionType,
      filterProps.expression,
      filterProps.userAttributes
    )
  }

  const item = {
    ...(ast as FilterModel),
    is: true,
    left: null,
    right: null,
  }

  // get the props for the Control Filter
  const { props } = getControlFilterInfo(item, {
    config,
    suggestions,
    enumerations,
    field,
    changeFilter: noop,
    allowMultipleValues: true,
    name: '',
  })

  // if props exists it can be rendered
  return Boolean(props)
}

/**
 * Returns a fallback Filter config for scenarios when
 * the ControlFilter can't render a filter expression
 * @param config
 * @returns
 */
export const getFallbackFilterConfig = (config?: FilterUIConfig) =>
  config?.type !== FilterUIType.Advanced &&
  config?.display === FilterUIDisplay.INLINE
    ? {
        ...config,
        display: FilterUIDisplay.POPOVER,
        type: FilterUIType.Advanced,
      }
    : { ...config, type: FilterUIType.Advanced }
