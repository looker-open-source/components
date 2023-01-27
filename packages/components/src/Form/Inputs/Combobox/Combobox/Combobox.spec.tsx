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
import { cleanup, fireEvent, screen } from '@testing-library/react'
import React from 'react'

import type { ComboboxOptionIndicatorFunction } from '..'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
  ComboboxMultiOption,
} from '..'

afterEach(cleanup)

describe('<Combobox/> with children', () => {
  test('Renders children, merges callbacks', () => {
    const handleChange = jest.fn()
    const handleClick = jest.fn()
    renderWithTheme(
      <Combobox onChange={handleChange}>
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" onClick={handleClick} />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>
    )

    const input = screen.getByPlaceholderText('Type here')
    fireEvent.mouseDown(input)

    const foo = screen.getByText('Foo')
    expect(screen.getByText('Foo')).toBeInTheDocument()
    expect(screen.getByText('Bar')).toBeInTheDocument()
    expect(handleClick).toHaveBeenCalledTimes(0)
    expect(handleChange).toHaveBeenCalledTimes(0)

    fireEvent.click(foo)

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith({ label: 'Foo', value: '101' })
  })

  // Testing same behavior on both Combobox and ComboboxMulti
  test.each([
    [
      'Combobox',
      <Combobox key="combobox">
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti key="combobox-multi">
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('Opens and closes on click (%s)', (_, jsx) => {
    renderWithTheme(jsx)
    expect(screen.queryByText('Foo')).not.toBeInTheDocument()

    const input = screen.getByPlaceholderText('Type here')
    fireEvent.click(input)
    expect(screen.getByText('Foo')).toBeInTheDocument()

    fireEvent.click(input)
    expect(screen.queryByText('Foo')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  // Testing same behavior on both Combobox and ComboboxMulti
  test.each([
    [
      'Combobox',
      <Combobox key="combobox">
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti key="combobox-multi">
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('Highlights typed text', (_, jsx) => {
    renderWithTheme(jsx)

    const input = screen.getByPlaceholderText('Type here')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'oo' } })
    expect(screen.getByText('oo')).toHaveStyleRule(
      'font-weight: 600; text-decoration: underline'
    )
    expect(screen.getByText('Bar')).not.toHaveStyleRule(
      'font-weight: 600; text-decoration: underline'
    )

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  const dimensions = {
    maxHeight: 400,
    maxWidth: 800,
    minWidth: 300,
    width: '50vw',
  }

  test.each([
    [
      'Combobox',
      <Combobox key="combobox">
        <ComboboxInput placeholder="Type here" />
        <ComboboxList {...dimensions}>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti key="combobox-multi">
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList {...dimensions}>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('Sets the list layout styles (%s)', (_, jsx) => {
    renderWithTheme(jsx)

    const input = screen.getByPlaceholderText('Type here')
    fireEvent.click(input)

    const list = screen.getByRole('listbox')
    expect(list).toHaveStyleRule('max-height', '400px')
    expect(list).toHaveStyleRule('max-width', '800px')
    expect(list).toHaveStyleRule('min-width', '300px')
    expect(list).toHaveStyleRule('width', '50vw')

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  /* eslint-disable react/display-name */
  const GetIndicatorJSX =
    (listLevel: boolean) => (indicator: ComboboxOptionIndicatorFunction) =>
      (
        <Combobox key="combobox" value={{ label: 'Foo', value: '101' }}>
          <ComboboxInput placeholder="Type here" />
          <ComboboxList indicator={listLevel ? indicator : undefined}>
            <ComboboxOption
              label="Foo"
              value="101"
              indicator={listLevel ? undefined : indicator}
            />
            <ComboboxOption
              label="Bar"
              value="102"
              indicator={listLevel ? undefined : indicator}
            />
          </ComboboxList>
        </Combobox>
      )

  const GetIndicatorJSXMulti =
    (listLevel: boolean) => (indicator: ComboboxOptionIndicatorFunction) =>
      (
        <ComboboxMulti
          key="combobox-multi"
          values={[{ label: 'Foo', value: '101' }]}
        >
          <ComboboxMultiInput placeholder="Type here" />
          <ComboboxMultiList indicator={listLevel ? indicator : undefined}>
            <ComboboxMultiOption
              label="Foo"
              value="101"
              indicator={listLevel ? undefined : indicator}
            />
            <ComboboxMultiOption
              label="Bar"
              value="102"
              indicator={listLevel ? undefined : indicator}
            />
          </ComboboxMultiList>
        </ComboboxMulti>
      )
  /* eslint-enable react/display-name */

  test.each([
    ['list level (Combobox)', GetIndicatorJSX(true)],
    ['list level (ComboboxMulti)', GetIndicatorJSXMulti(true)],
    ['option level (Combobox)', GetIndicatorJSX(false)],
    ['option level (ComboboxMulti)', GetIndicatorJSXMulti(false)],
  ])('Customize the indicator at the %s', (_, getJSX) => {
    const rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())

    const indicator = jest.fn()
    renderWithTheme(getJSX(indicator))

    const input = screen.getByPlaceholderText('Type here')
    fireEvent.click(input)

    expect(indicator).toHaveBeenCalledTimes(2)
    expect(indicator).toHaveBeenNthCalledWith(1, {
      isActive: false,
      isSelected: true,
      label: 'Foo',
      value: '101',
    })
    expect(indicator).toHaveBeenNthCalledWith(2, {
      isActive: false,
      isSelected: false,
      label: 'Bar',
      value: '102',
    })

    const check = screen.queryByTitle('Check')
    expect(check).not.toBeInTheDocument()

    indicator.mockClear()

    const bar = screen.getByText('Bar')
    fireEvent.mouseOver(bar)

    expect(indicator).toHaveBeenCalledTimes(1)
    expect(indicator).toHaveBeenCalledWith({
      isActive: true,
      isSelected: false,
      label: 'Bar',
      value: '102',
    })

    // Close popover to silence act() warning
    fireEvent.click(document)
    rafSpy.mockRestore()
  })

  test('Does not highlight current selected value', () => {
    renderWithTheme(
      <Combobox key="combobox" value={{ label: 'Foo', value: '101' }}>
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="FooBar" value="102" />
        </ComboboxList>
      </Combobox>
    )

    const input = screen.getByPlaceholderText('Type here')
    fireEvent.click(input)
    expect(screen.getByText('Foo')).not.toHaveStyleRule(
      'font-weight: 600; text-decoration: underline'
    )
    expect(screen.getByText('FooBar')).not.toHaveStyleRule(
      'font-weight: 600; text-decoration: underline'
    )

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test.each([
    [
      'Combobox',
      <Combobox key="combobox" openOnFocus>
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti key="combobox-multi" openOnFocus>
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('with openOnFocus (%s)', (_, jsx) => {
    renderWithTheme(jsx)

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    screen.getByPlaceholderText('Type here').focus()
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test.each([
    [
      'Combobox',
      <Combobox key="combobox">
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti key="combobox-multi">
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('click caret to open', (_, jsx) => {
    renderWithTheme(jsx)

    screen.getByPlaceholderText('Type here').focus()
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId('caret'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})

describe('Keyboard navigation', () => {
  const onChangeMock = jest.fn()
  beforeEach(() => {
    onChangeMock.mockClear()
  })

  const arrowDown = {
    key: 'ArrowDown',
  }
  const arrowUp = {
    key: 'ArrowUp',
  }
  const enter = {
    key: 'Enter',
  }
  const space = {
    key: 'Spacebar',
  }

  test.each([
    [
      'Combobox',
      <Combobox
        id="with-options"
        openOnFocus
        key="combobox"
        onChange={onChangeMock}
      >
        <ComboboxInput inputReadOnly placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti
        id="with-options"
        openOnFocus
        key="combobox-multi"
        onChange={onChangeMock}
      >
        <ComboboxMultiInput inputReadOnly placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('arrows, enter and space (%s)', (name, jsx) => {
    renderWithTheme(jsx)

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    const input = screen.getByPlaceholderText('Type here')

    fireEvent.keyDown(input, arrowDown)
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    const items = screen.getAllByRole('option')
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('Foo')
    expect(items[0]).toHaveAttribute('aria-selected', 'true')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('Bar')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowUp)
    expect(input).toHaveValue('Bar')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(input, arrowUp)
    expect(input).toHaveValue('Foo')
    expect(items[0]).toHaveAttribute('aria-selected', 'true')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, enter)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    const value = { label: 'Foo', value: '101' }
    const onChangeValue = name === 'Combobox' ? value : [value]
    expect(onChangeMock).toHaveBeenCalledWith(onChangeValue)

    fireEvent.keyDown(input, arrowUp)
    fireEvent.keyDown(input, arrowUp)
    fireEvent.keyDown(input, space)
    expect(onChangeMock).toHaveBeenCalledTimes(2)
    const value2 = { label: 'Bar', value: '102' }
    const onChangeValue2 = name === 'Combobox' ? value2 : [value, value2]
    expect(onChangeMock).toHaveBeenNthCalledWith(2, onChangeValue2)

    if (name === 'Combobox') {
      // Selected value is the input's value
      expect(input).toHaveValue('Bar')
    } else {
      // Selected value is a chip
      expect(screen.getByText('Bar')).toBeInTheDocument()
    }

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('arrows, enter and space with autoComplete = false and no inputReadOnly', () => {
    renderWithTheme(
      <Combobox id="with-options" openOnFocus>
        <ComboboxInput placeholder="Type here" autoComplete={false} />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>
    )

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    const input = screen.getByPlaceholderText('Type here')

    fireEvent.keyDown(input, arrowDown)
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    const items = screen.getAllByRole('option')
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'true')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'true')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowUp)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(input, enter)
    expect(input).toHaveValue('Bar')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    // Spacebar doesn't select the option without inputReadOnly
    fireEvent.keyDown(input, arrowDown)
    fireEvent.keyDown(input, arrowDown)
    fireEvent.keyDown(input, space)
    expect(input).toHaveValue('Bar')
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
