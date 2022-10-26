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

import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { filters } from '../../../fixtures/filters'
import type { FieldFilter } from './'
import { InputFilters } from './'

const ControlledComponent = () => {
  const [controlledFilters, onChange] = useState<FieldFilter[]>(filters)
  return <InputFilters filters={controlledFilters} onChange={onChange} />
}

describe('InputFilters', () => {
  test('renders', () => {
    renderWithTheme(<ControlledComponent />)
    expect(screen.getByPlaceholderText('Filter List')).toBeInTheDocument()
  })

  test('placeholder', () => {
    renderWithTheme(
      <InputFilters
        onChange={() => null}
        filters={[]}
        placeholder="Hello world"
      />
    )
    expect(screen.getByPlaceholderText('Hello world')).toBeInTheDocument()
  })

  test('Displays list of filters', () => {
    renderWithTheme(<ControlledComponent />)

    const input = screen.getByPlaceholderText('Filter List')
    fireEvent.click(input)
    expect(screen.getByText('Color')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Origin')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
  test('Clicking on a filter item will displays list of second layer filters ', () => {
    renderWithTheme(<ControlledComponent />)

    const input = screen.getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Color')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Name'))

    expect(screen.getByText('Name:')).toBeInTheDocument()
    expect(screen.queryByText('Color')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Shows editing options ', () => {
    renderWithTheme(<ControlledComponent />)

    const input = screen.getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(screen.getByText('Name')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Name'))

    expect(screen.getByText('Cheddar')).toBeInTheDocument()
    expect(screen.getByText('Gouda')).toBeInTheDocument()
    expect(screen.getByText('Swiss')).toBeInTheDocument()
    expect(screen.getByText('Mozzarella')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Display full filter selected', () => {
    renderWithTheme(<ControlledComponent />)

    const input = screen.getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(screen.getByText('Name')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Name'))

    fireEvent.click(screen.getByText('Swiss'))
    expect(screen.getByText('name:')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test("Doesn't show filter displayed as chip", () => {
    renderWithTheme(<ControlledComponent />)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    expect(screen.getByText('Name')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Name'))

    fireEvent.click(screen.getByText('Swiss'))

    expect(screen.getByText('name:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    expect(screen.queryByText('Name')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Display a second filter as chip', () => {
    renderWithTheme(<ControlledComponent />)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    expect(screen.getByText('Name')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Name'))

    fireEvent.click(screen.getByText('Swiss'))

    expect(screen.getByText('name:')).toBeInTheDocument()
    expect(screen.getByText(/Swiss/)).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    fireEvent.click(screen.getByText('Color'))
    fireEvent.click(screen.getByText('blue'))

    expect(screen.getByText('color:')).toBeInTheDocument()
    expect(screen.getAllByText('blue').length).toEqual(2)

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Change filter values when multiple = false', () => {
    renderWithTheme(<ControlledComponent />)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    expect(screen.getByText('Name')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Name'))

    fireEvent.click(screen.getByText('Cheddar'))

    expect(screen.getByText('name:')).toBeInTheDocument()
    expect(screen.getByText(/Cheddar/)).toBeInTheDocument()

    fireEvent.click(screen.getByText('name:'))
    fireEvent.click(screen.getByText('Swiss'))

    expect(screen.getByText(/Swiss/)).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Change filter values when multiple = true', () => {
    renderWithTheme(<ControlledComponent />)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    expect(screen.getByText('Color')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Color'))

    fireEvent.click(screen.getByText('blue'))
    fireEvent.click(screen.getByText('white'))

    fireEvent.click(document)

    expect(screen.getByText('color:')).toBeInTheDocument()
    expect(screen.getByText(/blue/)).toBeInTheDocument()
    expect(screen.getByText(/white/)).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Delete filter', () => {
    renderWithTheme(<ControlledComponent />)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    expect(screen.getByText('Name')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Name'))

    fireEvent.click(screen.getByText('Gouda'))

    expect(screen.getByText('name:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(screen.getByText('Delete'))

    expect(screen.queryByText('name:')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('Delete multiple filter', () => {
    renderWithTheme(<ControlledComponent />)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    expect(screen.getByText('Name')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Name'))

    fireEvent.click(screen.getByText('Gouda'))

    expect(screen.getByText('name:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    fireEvent.click(screen.getByText('Color'))
    fireEvent.click(screen.getByText('yellow'))
    fireEvent.click(screen.getByText('orange'))

    fireEvent.click(document)

    expect(screen.getByText('color:')).toBeInTheDocument()
    expect(screen.getByText(/yellow/)).toBeInTheDocument()
    expect(screen.getByText(/orange/)).toBeInTheDocument()
    expect(screen.getByText('name:')).toBeInTheDocument()
    expect(screen.getByText(/Gouda/)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Clear Filters'))

    expect(screen.queryByText('color:')).not.toBeInTheDocument()
    expect(screen.queryByText('name:')).not.toBeInTheDocument()

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

    renderWithTheme(<InputFilters filters={editorFilter} onChange={onChange} />)

    fireEvent.click(screen.getByPlaceholderText('Filter List'))

    expect(screen.getByText('Important')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Important'))

    expect(screen.getByText('hello world')).toBeInTheDocument()
    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
