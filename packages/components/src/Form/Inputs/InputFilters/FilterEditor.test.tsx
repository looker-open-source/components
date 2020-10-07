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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { FilterEditor } from './FilterEditor'

describe('InputFilters', () => {
  const draft = { field: 'Name', label: 'name' }
  const options = ['suggestion 1', 'suggestion 2', 'suggestion 3']
  const handleDraft = jest.fn()

  test('renders DraftFilter', () => {
    const { queryByText } = renderWithTheme(
      <FilterEditor draft={draft} options={options} onClick={handleDraft} />
    )
    const draftOption = queryByText('suggestion 1')
    draftOption && fireEvent.click(draftOption)

    expect(draftOption).toBeInTheDocument()
    expect(handleDraft).toBeCalled()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
