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
import type { FilterModel, StringFilterType } from '@looker/filter-expressions'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'

import { StringFilter } from './StringFilter'

describe('String filter test', () => {
  it('should render a StringFilter', () => {
    const item = {
      id: '1',
      is: true,
      type: 'match',
      value: [],
    } as FilterModel<StringFilterType>
    renderWithTheme(
      <StringFilter
        item={item}
        filterType="string"
        onChange={jest.fn()}
        showAdd={false}
        showName={true}
        showRemove={false}
        showOperator={false}
        showMatchesAdvanced={false}
        onAdd={jest.fn()}
        onRemove={jest.fn()}
      />
    )
    const inputs = screen.getAllByRole('textbox')
    expect(inputs[0]).toHaveValue('is')
    expect(inputs[1]).toHaveValue('')
  })
})
