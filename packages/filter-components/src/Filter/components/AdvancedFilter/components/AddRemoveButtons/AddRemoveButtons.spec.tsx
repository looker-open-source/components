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
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { AddRemoveButtons } from './AddRemoveButtons'

describe('AddRemoveButtons', () => {
  const mockOnAdd = jest.fn()
  const mockOnRemove = jest.fn()

  beforeEach(() => {
    mockOnAdd.mockReset()
    mockOnRemove.mockReset()
  })

  it('should render an add button when showAdd is true', () => {
    renderWithTheme(
      <AddRemoveButtons
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        showAdd={true}
        showRemove={false}
      />
    )
    const addButton = screen.getByText('Add')
    expect(addButton).toBeVisible()
  })

  it('should render a remove button when showRemove is true', () => {
    renderWithTheme(
      <AddRemoveButtons
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        showAdd={false}
        showRemove={true}
      />
    )
    const removeButton = screen.getByText('Remove')
    expect(removeButton).toBeVisible()
  })

  it('should call the onAdd handler when the add button is clicked', () => {
    renderWithTheme(
      <AddRemoveButtons
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        showAdd={true}
        showRemove={true}
      />
    )
    const addButton = screen.getByText('Add')
    fireEvent.click(addButton)
    expect(mockOnAdd).toHaveBeenCalled()
  })

  it('should call the onRemove handler when the remove button is clicked', () => {
    renderWithTheme(
      <AddRemoveButtons
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        showAdd={true}
        showRemove={true}
      />
    )
    const removeButton = screen.getByText('Remove')
    fireEvent.click(removeButton)
    expect(mockOnRemove).toHaveBeenCalled()
  })
})
