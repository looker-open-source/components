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
import { act, fireEvent, screen } from '@testing-library/react'
import type { FormEvent } from 'react'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import {
  useOptionFiltering,
  useDebouncedFilterTerm,
} from './use_option_filtering'

const options = [
  { value: 'Foo', label: 'Foo' },
  { value: 'Bar', label: 'Bar' },
]

jest.useFakeTimers()

const DebounceComponent = ({
  onInputChange,
}: {
  onInputChange: (val: string) => void
}) => {
  const { debouncedFilterTerm, noOptionsLabel, onFilter } =
    useDebouncedFilterTerm(onInputChange)
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    onFilter(e.currentTarget.value)
  }
  return (
    <div>
      <span data-testid="debouncedFilterTerm">{debouncedFilterTerm}</span>
      <span data-testid="noOptionsLabel">{noOptionsLabel}</span>
      <input placeholder="input" onChange={handleChange} />
    </div>
  )
}

const OptionFilterComponent = ({
  onInputChange,
}: {
  onInputChange: (val: string) => void
}) => {
  const { filteredOptions, noOptionsLabel, onFilter } = useOptionFiltering({
    // low limit for testing
    limit: 2,
    onInputChange,
    options,
    value: 'Baz',
  })
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    onFilter(e.currentTarget.value)
  }
  return (
    <div>
      {filteredOptions.map(({ value }, index) => (
        <span key={index} role="option">
          {value}
        </span>
      ))}
      <span data-testid="noOptionsLabel">{noOptionsLabel}</span>
      <input placeholder="input" onChange={handleChange} />
    </div>
  )
}

test.each([
  ['useDebouncedFilterTerm', DebounceComponent],
  ['useOptionFiltering', OptionFilterComponent],
])('%s: updates only after a delay', (_, Component) => {
  const mockOnInputChange = jest.fn()
  renderWithTheme(<Component onInputChange={mockOnInputChange} />)
  expect(screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values')

  const input = screen.getByPlaceholderText('input')
  fireEvent.change(input, { target: { value: 'Foo' } })

  // Updates are not reflected immediately
  expect(screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values')

  act(() => {
    jest.advanceTimersByTime(150)
  })
  // Updated after delay
  expect(screen.getByTestId('noOptionsLabel')).toHaveTextContent(
    'No values match "Foo"'
  )
  expect(mockOnInputChange).toHaveBeenCalledTimes(1)
  expect(mockOnInputChange).toHaveBeenCalledWith('Foo')
  mockOnInputChange.mockClear()

  fireEvent.change(input, { target: { value: 'Foo' } })
  act(() => {
    jest.advanceTimersByTime(150)
  })
  // Not called again b/c the value has not changed
  expect(mockOnInputChange).not.toHaveBeenCalled()
})

describe('useDebouncedFilterTerm', () => {
  it('does not update on initial render with updateOnFirstRender', () => {
    const mockOnInputChange = jest.fn()
    renderWithTheme(<DebounceComponent onInputChange={mockOnInputChange} />)
    expect(screen.getByTestId('debouncedFilterTerm')).toHaveTextContent('')
    expect(screen.getByTestId('noOptionsLabel')).toHaveTextContent('No values')
    expect(mockOnInputChange).not.toHaveBeenCalled()

    const input = screen.getByPlaceholderText('input')
    fireEvent.change(input, { target: { value: 'test' } })
    act(() => {
      jest.advanceTimersByTime(150)
    })
    expect(mockOnInputChange.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "test",
        ],
      ]
    `)
  })
})

describe('useOptionFiltering', () => {
  it('adds the current value as an option unless a filter term is added', () => {
    const mockOnInputChange = jest.fn()
    renderWithTheme(<OptionFilterComponent onInputChange={mockOnInputChange} />)
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(3)
    expect(options[0]).toHaveTextContent('Foo')
    expect(options[1]).toHaveTextContent('Bar')
    expect(options[2]).toHaveTextContent('Baz')

    const input = screen.getByPlaceholderText('input')
    fireEvent.change(input, { target: { value: 'test' } })
    act(() => {
      jest.advanceTimersByTime(150)
    })

    const updatedOptions = screen.queryByRole('option')
    // No matches for "test"
    expect(updatedOptions).not.toBeInTheDocument()
  })

  it('should recognize a value even if its surrounded by whitespace', () => {
    const mockOnInputChange = jest.fn()
    renderWithTheme(<OptionFilterComponent onInputChange={mockOnInputChange} />)

    const input = screen.getByPlaceholderText('input')
    fireEvent.change(input, { target: { value: '   Foo  ' } })
    act(() => {
      jest.advanceTimersByTime(150)
    })

    const updatedOptions = screen.queryByRole('option')
    expect(updatedOptions).toBeInTheDocument()
  })
})
