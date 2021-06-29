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
import type { FilterTypeMap } from '@looker/filter-expressions'
import defaultTo from 'lodash/defaultTo'
import type { ElementType } from 'react'
import { MatchesAdvanced } from '../../MatchesAdvanced'

import { MultiStringInput } from '../../StringFilter/components/MultiStringInput'
import { UserAttribute } from '../../UserAttribute'
import { ParamFilter } from '../components/ParamFilter'

const typeMap: FilterTypeMap = {
  anyvalue: () => '',
  match: MultiStringInput,
  user_attribute: UserAttribute,
}

export const tierFilterTypeToFilter = (
  type: string,
  isParamFilter?: boolean
): ElementType =>
  isParamFilter && type !== 'user_attribute'
    ? ParamFilter
    : defaultTo(typeMap[type], MatchesAdvanced)
