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

import { firePasteEvent, renderWithTheme } from '@looker/components-test-utils'
import { act, cleanup, fireEvent, screen } from '@testing-library/react'
import React from 'react'

import { SelectMulti } from './SelectMulti'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

afterEach(cleanup)

const basicOptions = [
  { label: 'Foo', value: 'FOO' },
  { label: 'Bar', value: 'BAR' },
]

describe('SelectMulti', () => {
  test('ripple effect', () => {
    renderWithTheme(
      <SelectMulti
        options={[
          { label: 'Cheddar', value: 'cheddar' },
          { label: 'Gouda', value: 'gouda' },
          { label: 'Swiss', value: 'swiss' },
        ]}
        placeholder="SelectMulti"
      ></SelectMulti>
    )

    fireEvent.click(screen.getByPlaceholderText('SelectMulti'))

    const select = screen.getByText('Cheddar').closest('li')
    expect(select).not.toHaveClass('bg-on fg-in')
    expect(select).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    select && fireEvent.focus(select)
    expect(select).toHaveClass('bg-on')

    select && fireEvent.mouseDown(select)
    expect(select).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    select && fireEvent.mouseUp(select)
    runTimers()
    expect(select).toHaveClass('bg-on fg-out')
    runTimers()
    expect(select).toHaveClass('bg-on')

    select && fireEvent.blur(select)
    expect(select).not.toHaveClass('bg-on fg-in')
    fireEvent.click(document)
  })
  test('values', () => {
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
      { label: 'Baz', value: 'BAZ' },
      { label: 'Qux', value: 'QUX' },
    ]
    renderWithTheme(
      <SelectMulti
        options={options}
        placeholder="Search"
        values={['BAZ', 'FOO']}
        onChange={jest.fn()}
      />
    )
    // should already have the 2 chips
    expect(screen.getByText('Baz')).toBeVisible()
    expect(screen.getByText('Foo')).toBeVisible()
    // 2 chip remove buttons and 1 clear all button
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  test('defaultValues', () => {
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
      { label: 'Baz', value: 'BAZ' },
      { label: 'Qux', value: 'QUX' },
    ]
    renderWithTheme(
      <SelectMulti
        options={options}
        placeholder="Search"
        defaultValues={['BAR']}
      />
    )
    // should already have the chip
    expect(screen.getByText('Bar')).toBeVisible()
    // 1 chip remove button and 1 clear all button
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  test('controlled value & context mismatch', () => {
    const TestComponent = () => {
      const [values, setValues] = React.useState<string[] | undefined>(['FOO'])
      const handleFilter = () => {
        // Contrived example to test how the component handles "unexpected" values
        // i.e. the values prop is different from the values in context
        // Tests a bug fix where the input value was getting lost (SELECT_SILENT)
        setValues([])
      }
      return (
        <SelectMulti
          values={values}
          onChange={setValues}
          options={basicOptions}
          isFilterable
          onFilter={handleFilter}
          placeholder="Search"
        />
      )
    }
    renderWithTheme(<TestComponent />)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'b' } })
    expect(input).toHaveValue('b')

    fireEvent.click(document)
  })

  test('controlled, filterable', () => {
    const cheeses = [
      { value: 'Cheddar' },
      { value: 'Gouda' },
      { value: 'Swiss' },
      { value: 'Feta' },
      { value: 'Mascarpone' },
      { value: 'Brie' },
      { value: 'Mozzarella' },
      { value: 'Cotija' },
      { value: 'Pepperjack' },
    ]

    const TestComponent = () => {
      const [values, setValues] = React.useState<string[] | undefined>([
        'Cheddar',
      ])
      const [term, setTerm] = React.useState('')

      const options = React.useMemo(() => {
        if (term === '') return cheeses
        return cheeses.filter(
          cheese => cheese.value.toUpperCase().indexOf(term.toUpperCase()) > -1
        )
      }, [term])
      return (
        <SelectMulti
          values={values}
          onChange={setValues}
          options={options}
          isFilterable
          onFilter={setTerm}
          placeholder="Search"
        />
      )
    }

    renderWithTheme(<TestComponent />)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'z' } })
    // Tests a bug fix with the controlled value behavior where SELECT_SILENT
    // was incorrectly triggered b/c the context value had '' for label
    // when the selected option is filtered out (faulty logic in getComboboxText)
    expect(input).toHaveValue('z')

    fireEvent.click(document)
  })
})

describe('closeOnSelect', () => {
  test('false by default', () => {
    renderWithTheme(<SelectMulti options={basicOptions} placeholder="Search" />)

    const input = screen.getByPlaceholderText('Search')
    fireEvent.mouseDown(input)

    const bar = screen.getByText('Bar')

    expect(screen.getByText('Foo')).toBeVisible()
    expect(bar).toBeVisible()

    fireEvent.click(bar)

    expect(screen.getByText('Foo')).toBeVisible()
    expect(screen.getAllByText('Bar')).toHaveLength(2)

    fireEvent.click(document)
  })

  test('true', () => {
    renderWithTheme(
      <SelectMulti options={basicOptions} placeholder="Search" closeOnSelect />
    )

    const input = screen.getByPlaceholderText('Search')
    fireEvent.mouseDown(input)

    const bar = screen.getByText('Bar')

    expect(screen.getByText('Foo')).toBeVisible()
    expect(bar).toBeVisible()

    fireEvent.click(bar)
    // Bar is now a chip
    expect(screen.getByText('Bar')).toBeVisible()
    // list has closed
    expect(screen.queryByText('Foo')).not.toBeInTheDocument()

    fireEvent.click(document)
  })

  describe('removeOnBackspace', () => {
    test('true by default', () => {
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
        />
      )

      const input = screen.getByPlaceholderText('Search')

      expect(screen.getByText('Foo')).toBeVisible()
      expect(screen.getByText('Bar')).toBeVisible()

      fireEvent.keyDown(input, {
        key: 'Backspace',
      })

      expect(screen.getByText('Foo')).toBeVisible()
      expect(screen.queryByText('Bar')).not.toBeInTheDocument()
    })

    test('false', () => {
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
          removeOnBackspace={false}
        />
      )

      const input = screen.getByPlaceholderText('Search')

      expect(screen.getByText('Foo')).toBeVisible()
      expect(screen.getByText('Bar')).toBeVisible()

      fireEvent.keyDown(input, {
        key: 'Backspace',
      })

      expect(screen.getByText('Foo')).toBeVisible()
      expect(screen.queryByText('Bar')).toBeVisible()
    })
  })

  describe('freeInput', () => {
    test('false by default', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
          onChange={onChangeMock}
        />
      )

      const input = screen.getByPlaceholderText('Search')
      fireEvent.change(input, { target: { value: 'baz,qux,' } })

      expect(onChangeMock).not.toHaveBeenCalled()
      expect(input).toHaveValue('baz,qux,')

      fireEvent.click(document)
    })

    test('true', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
          onChange={onChangeMock}
          freeInput
        />
      )

      const input = screen.getByPlaceholderText('Search')

      // Whitespace trimmed by default
      fireEvent.change(input, { target: { value: ' baz , qux,' } })

      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', 'baz', 'qux'])
      expect(input).toHaveValue('')

      fireEvent.click(document)
    })

    test('formatInputValue false', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
          onChange={onChangeMock}
          freeInput
          formatInputValue={false}
        />
      )

      const input = screen.getByPlaceholderText('Search')
      fireEvent.change(input, { target: { value: ' baz , qux,' } })

      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', ' baz ', ' qux'])
      expect(input).toHaveValue('')

      fireEvent.click(document)
    })

    test('creates value and closes list on blur', async () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <>
          <button>A random button</button>
          <SelectMulti
            options={basicOptions}
            placeholder="Search"
            onChange={onChangeMock}
            freeInput
          />
        </>
      )

      const input = screen.getByPlaceholderText('Search')
      input.focus()
      fireEvent.change(input, { target: { value: 'baz' } })
      expect(screen.getByRole('listbox')).toBeVisible()
      screen.getByText('A random button').focus()

      expect(onChangeMock).toHaveBeenCalledWith(['baz'])
      expect(input).toHaveValue('')

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    test('copy/paste', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          values={['FOO', 'BAR']}
          onChange={onChangeMock}
          placeholder="Search"
          freeInput
        />
      )

      const input = screen.getByPlaceholderText('Search')
      const hiddenInput = screen.getByTestId('hidden-input')

      fireEvent.keyDown(input, { key: 'a', metaKey: true })
      // testing the hidden input value b/c jsdom do clipboard
      expect(hiddenInput).toHaveDisplayValue(
        '[{"label":"Foo","value":"FOO"},{"label":"Bar","value":"BAR"}]'
      )

      firePasteEvent(
        input,
        '[{"label":"Baz","value":"BAZ"},{"label":"Qux","value":"QUX"}]'
      )
      fireEvent.change(input, {
        target: {
          value:
            '[{"label":"Baz","value":"BAZ"},{"label":"Qux","value":"QUX"}]',
        },
      })
      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', 'BAZ', 'QUX'])
    })
  })
})
