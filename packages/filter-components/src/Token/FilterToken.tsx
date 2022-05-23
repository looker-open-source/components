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

import React, { forwardRef } from 'react'
import { Popover, PopoverContent } from '@looker/components'
import {
  getExpressionType,
  getUserAttributeMatchingTypeAndExpression,
} from '@looker/filter-expressions'
import { ERROR_TYPE } from '../constants'
import type { FilterProps } from '../Filter/types/filter_props'
import { Filter } from '../Filter/Filter'
import { FilterErrorMessage, useFiltersErrors } from '../FilterErrorMessage'
import { Token } from './Token'
import type { TokenProps } from './Token'
import { getLabel } from './utils/get_label'

export type FilterTokenProps = FilterProps &
  Pick<TokenProps, 'maxWidth' | 'onClick'>

export const FilterToken = forwardRef(
  (
    { config, maxWidth, onClick, userAttributes, ...props }: FilterTokenProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const expressionType =
      props.expressionType ||
      getExpressionType({ type: props.type, field: props.field || undefined })

    const label = getLabel({
      ...props,
      type: expressionType,
      userAttributes,
    })
    const hasError =
      useFiltersErrors([props], { userAttributes }).type === ERROR_TYPE
    const userAttribute = getUserAttributeMatchingTypeAndExpression(
      expressionType,
      props.expression,
      userAttributes
    )
    const isSubdued =
      props.expression === '' ||
      props.expression === undefined ||
      (!!userAttribute && !userAttribute.value)

    const content = (
      <Filter
        expressionType={expressionType}
        config={config}
        inline={config?.display === 'inline'}
        userAttributes={userAttributes}
        {...props}
      />
    )

    if (config?.display === 'inline') {
      return content
    }

    const popoverContent = (
      <PopoverContent maxWidth="90vw" py="large">
        {content}
        <FilterErrorMessage
          filters={[props]}
          userAttributes={userAttributes}
          useLongMessageForm={true}
        />
      </PopoverContent>
    )

    return (
      <Popover content={popoverContent} placement="bottom-start" ref={ref}>
        <Token
          label={label}
          subdued={isSubdued}
          hasError={hasError}
          maxWidth={maxWidth}
          onClick={onClick}
        />
      </Popover>
    )
  }
)
