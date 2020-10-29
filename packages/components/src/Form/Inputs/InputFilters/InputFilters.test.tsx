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
import { FieldFilter, InputFilters } from './InputFilters'

const filters: FieldFilter[] = [
  {
    field: 'name',
    label: 'Name',
    options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella'],
  },
  {
    field: 'color',
    label: 'Color',
    multiple: true,
    options: ['blue', 'orange', 'yellow', 'white'],
  },
  {
    field: 'origin',
    label: 'Origin',
    multiple: true,
    options: ['France', 'England', 'Italy', 'Netherlands', 'United States'],
  },
]

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
    expect(getByText('Color')).toBeInTheDocument()
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Origin')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
  test('Clicking on a filter item will displays list of second layer filters ', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Color')).toBeInTheDocument()

    fireEvent.click(getByText('Name'))

    expect(getByText('Name')).toBeInTheDocument()
    expect(queryByText('Color')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Shows editing options ', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <ControlledComponent />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(getByText('Name')).toBeInTheDocument()

    fireEvent.click(getByText('Name'))

    expect(getByText('Cheddar')).toBeInTheDocument()
    expect(getByText('Gouda')).toBeInTheDocument()
    expect(getByText('Swiss')).toBeInTheDocument()
    expect(getByText('Mozzarella')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Display full filter selected', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <ControlledComponent />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(getByText('Name')).toBeInTheDocument()

    fireEvent.click(getByText('Name'))

    fireEvent.click(getByText('Swiss'))
    expect(getByText('name:')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test("Doesn't show filter displayed as chip", () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('Name')).toBeInTheDocument()

    fireEvent.click(getByText('Name'))

    fireEvent.click(getByText('Swiss'))

    expect(getByText('name:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(queryByText('Name')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Display a second filter as chip', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('Name')).toBeInTheDocument()

    fireEvent.click(getByText('Name'))

    fireEvent.click(getByText('Swiss'))

    expect(getByText('name:')).toBeInTheDocument()
    expect(queryByText(/Swiss/)).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByPlaceholderText('Filter List'))

    fireEvent.click(getByText('Color'))
    fireEvent.click(getByText('blue'))

    expect(getByText('color:')).toBeInTheDocument()
    expect(queryByText(/, blue/)).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Change filter values when multiple = false', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('Name')).toBeInTheDocument()

    fireEvent.click(getByText('Name'))

    fireEvent.click(getByText('Cheddar'))

    expect(queryByText('name:')).toBeInTheDocument()
    expect(queryByText(/Cheddar/)).toBeInTheDocument()

    fireEvent.click(getByText('name:'))
    fireEvent.click(getByText('Swiss'))

    expect(queryByText(/Swiss/)).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Change filter values when multiple = true', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('Color')).toBeInTheDocument()

    fireEvent.click(getByText('Color'))

    fireEvent.click(getByText('blue'))
    fireEvent.click(getByText('white'))

    fireEvent.click(document)

    expect(queryByText('color:')).toBeInTheDocument()
    expect(queryByText(/blue/)).toBeInTheDocument()
    expect(queryByText(/white/)).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Delete filter', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('Name')).toBeInTheDocument()

    fireEvent.click(getByText('Name'))

    fireEvent.click(getByText('Gouda'))

    expect(getByText('name:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByText('Delete'))

    expect(queryByText('name:')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Delete multiple filter', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <ControlledComponent />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('Name')).toBeInTheDocument()

    fireEvent.click(getByText('Name'))

    fireEvent.click(getByText('Gouda'))

    expect(getByText('name:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByPlaceholderText('Filter List'))

    fireEvent.click(getByText('Color'))
    fireEvent.click(getByText('yellow'))
    fireEvent.click(getByText('orange'))

    fireEvent.click(document)

    expect(queryByText('color:')).toBeInTheDocument()
    expect(queryByText(/yellow/)).toBeInTheDocument()
    expect(queryByText(/orange/)).toBeInTheDocument()
    expect(getByText('name:')).toBeInTheDocument()
    expect(queryByText(/Gouda/)).toBeInTheDocument()

    fireEvent.click(getByText('Clear Filters'))

    expect(queryByText('color:')).not.toBeInTheDocument()
    expect(queryByText('name:')).not.toBeInTheDocument()

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
