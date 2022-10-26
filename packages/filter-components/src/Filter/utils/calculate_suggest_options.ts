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

import difference from 'lodash/difference'
import find from 'lodash/find'
import isArray from 'lodash/isArray'
import map from 'lodash/map'
import take from 'lodash/take'
import union from 'lodash/union'
import nth from 'lodash/nth'
import pull from 'lodash/pull'

/*
Calculate the Suggestion Options based on max number of allowed
values as well as pre-existing values on the filter which should show
to allow de-selection
*/
export const calculateSuggestOptions = (filterTokenProps: any) => {
  const { max, options, value: values } = filterTokenProps

  // if values is not an arary or is not an array containing a string
  // return default
  if (!isArray(values) || !find(values, (val) => typeof val === 'string')) {
    return max ? take(options, max) : options
  }

  const existingValues =
    map(values, (v) => find(options, { value: v }) || { value: v, label: v }) ||
    []

  // if there is a max limit, first use all existing values then options
  // if there is no max, union all
  if (max) {
    // if there are more values than max, only show existing values
    // else there is room to show other options
    if (existingValues.length >= max) {
      return take(existingValues, max)
    } else {
      const suggestionOptions: { value: string; label: string }[] = []
      for (
        let optionIndex = 0;
        optionIndex < max - existingValues.length;
        optionIndex++
      ) {
        const option = nth(options, optionIndex) as {
          value: string
          label: string
        }
        if (!option) {
          break
        }
        pull(existingValues, option)
        suggestionOptions.push(option)
      }
      return union(suggestionOptions, existingValues)
    }
  } else {
    const unfoundValues = difference(existingValues, options) || []
    return union(options, unfoundValues)
  }
}
