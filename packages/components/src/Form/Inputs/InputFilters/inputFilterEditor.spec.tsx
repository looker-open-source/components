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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { inputFilterEditor } from './inputFilterEditor'

describe('inputFilterEditor', () => {
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

  test('renders', () => {
    renderWithTheme(
      <>
        {inputFilterEditor({
          closeEditor,
          filterOptions: filterOptions1,
          onChange,
          value,
        })}
      </>
    )
    expect(screen.getByText('datagroup_trigger')).toBeInTheDocument()
  })

  test('onChange is called', () => {
    renderWithTheme(
      <>
        {inputFilterEditor({
          closeEditor,
          filterOptions: filterOptions1,
          onChange,
          value,
        })}
      </>
    )
    const selectingFilter = screen.queryByText('datagroup_trigger')
    selectingFilter && fireEvent.click(selectingFilter)
    expect(onChange).toBeCalled()
  })

  test('closeEditor is called', () => {
    renderWithTheme(
      <>
        {inputFilterEditor({
          closeEditor,
          filterOptions: filterOptions2,
          onChange,
          value,
        })}
      </>
    )
    const selectingFilter = screen.queryByText('Cheddar')
    selectingFilter && fireEvent.click(selectingFilter)
    expect(closeEditor).toBeCalled()
  })

  test('displays CheckboxGroup when multiple = true', () => {
    renderWithTheme(
      <>
        {inputFilterEditor({
          closeEditor,
          filterOptions: { ...filterOptions2, multiple: true },
          onChange,
          value,
        })}
      </>
    )
    const checkbox = screen.getByLabelText('Gouda')
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  test('displays RadioGroup when multiple = false', () => {
    renderWithTheme(
      <>
        {inputFilterEditor({
          closeEditor,
          filterOptions: filterOptions2,
          onChange,
          value,
        })}
      </>
    )
    const radio = screen.getByLabelText('Gouda')
    expect(radio).toHaveAttribute('type', 'radio')
  })
})
