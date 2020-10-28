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

import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { filters } from '../../../__mocks__/filters'
import { FieldFilter, InputFilters } from './InputFilters'

const ControlledComponent = () => {
  const [controlledFilters, onChange] = useState<FieldFilter[]>(filters)
  return <InputFilters filters={controlledFilters} onChange={onChange} />
}

describe('InputFilters', () => {
  test('renders', () => {
    const { getByPlaceholderText } = renderWithTheme(<ControlledComponent />)
    expect(getByPlaceholderText('Filter List')).toBeInTheDocument()
  })

  test('Displays list of filters', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <ControlledComponent />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)
    expect(getByText('role')).toBeInTheDocument()
    expect(getByText('Group')).toBeInTheDocument()
    expect(getByText('Last Successful Build')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
  test('Clicking on a filter item will displays list of second layer filters ', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <ControlledComponent />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    const group = getByText('Group')

    expect(getByText('role')).toBeInTheDocument()
    expect(group).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    expect(getByText('role')).toBeInTheDocument()
    expect(group).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Shows editing options ', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <ControlledComponent />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    expect(getByText('user')).toBeInTheDocument()
    expect(getByText('admin')).toBeInTheDocument()
    expect(getByText('pizza')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Display full filter selected', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <ControlledComponent />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    fireEvent.click(getByText('user'))
    expect(getByText('role:')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test("Doesn't show filter displayed as chip", () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    fireEvent.click(getByText('user'))

    expect(getByText('role:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(queryByText('role')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Display a second filter as chip', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    fireEvent.click(getByText('user'))

    expect(getByText('role:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByPlaceholderText('Filter List'))

    fireEvent.click(getByText('Group'))
    fireEvent.click(getByText('Cheddar'))

    expect(getByText('group:')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Change filter values when multiple = false', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    fireEvent.click(getByText('user'))

    expect(queryByText('role:')).toBeInTheDocument()
    expect(queryByText(/user/)).toBeInTheDocument()

    fireEvent.click(getByText('role:'))
    fireEvent.click(getByText('pizza'))

    expect(queryByText(/pizza/)).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Change filter values when multiple = true', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('Persistance Type')).toBeInTheDocument()

    fireEvent.click(getByText('Persistance Type'))

    fireEvent.click(getByText('datagroup_trigger'))
    fireEvent.click(getByText('datagroup_trigger1'))

    fireEvent.click(document)

    expect(queryByText('persistance-type:')).toBeInTheDocument()
    expect(queryByText(/datagroup_trigger/)).toBeInTheDocument()
    expect(queryByText(/datagroup_trigger1/)).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Delete filter', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    fireEvent.click(getByText('user'))

    expect(getByText('role:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByText('Delete'))

    expect(queryByText('role:')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Delete multiple filter', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    fireEvent.click(getByText('user'))

    expect(getByText('role:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByPlaceholderText('Filter List'))

    fireEvent.click(getByText('Group'))
    fireEvent.click(getByText('Cheddar'))

    fireEvent.click(document)

    fireEvent.click(getByText('Clear Filters'))

    expect(queryByText('role:')).not.toBeInTheDocument()
    expect(queryByText('group:')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Editor component is displayed if passed', () => {
    const EditorComponent = () => <>hello world</>

    const onChange = jest.fn()

    const editorFilter: FieldFilter[] = [
      {
        editor: EditorComponent,
        field: 'editor',
        label: 'Important',
        options: ['a', 'b', 'c'],
      },
    ]

    const { getByPlaceholderText, getByText } = renderWithTheme(
      <InputFilters filters={editorFilter} onChange={onChange} />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('Important')).toBeInTheDocument()

    fireEvent.click(getByText('Important'))

    expect(getByText('hello world')).toBeInTheDocument()
    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
