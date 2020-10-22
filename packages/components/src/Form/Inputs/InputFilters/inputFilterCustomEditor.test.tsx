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
import { inputFilterCustomEditor } from './inputFilterCustomEditor'

describe('InputFilterCustomEditor', () => {
  const closeEditor = jest.fn()
  const filterOptions1 = {
    field: 'persistance-type',
    label: 'Persistance Type',
    multiple: true,
    options: ['datagroup_trigger', 'datagroup_trigger1', 'datagroup_trigger2'],
  }
  const filterOptions2 = {
    field: 'group',
    label: 'Group',
    options: ['Cheddar', 'Gouda'],
  }
  const value = 'user'
  const onChange = jest.fn()

  test('renders InputFilterCustomEditor', () => {
    const { queryByText } = renderWithTheme(
      <>
        {inputFilterCustomEditor(closeEditor, filterOptions1, onChange, value)}
      </>
    )
    expect(queryByText('datagroup_trigger')).toBeInTheDocument()
  })

  test('InputFilterCustomEditor onChange is called', () => {
    const { queryByText } = renderWithTheme(
      <>
        {inputFilterCustomEditor(closeEditor, filterOptions1, onChange, value)}
      </>
    )

    const selectingFilter = queryByText('datagroup_trigger')
    selectingFilter && fireEvent.click(selectingFilter)

    expect(onChange).toBeCalled()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('InputFilterCustomEditor closeEditor is called', () => {
    const { queryByText } = renderWithTheme(
      <>
        {inputFilterCustomEditor(closeEditor, filterOptions2, onChange, value)}
      </>
    )
    const selectingFilter = queryByText('Cheddar')
    selectingFilter && fireEvent.click(selectingFilter)

    expect(closeEditor).toBeCalled()

    // Close popover to silence act() warning
    // fireEvent.click(document)
  })
})
