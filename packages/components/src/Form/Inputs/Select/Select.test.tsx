/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
import { act, fireEvent } from '@testing-library/react'
import React from 'react'

import { Select } from './Select'

test('Select with options', () => {
  const options = [{ value: 'FOO' }, { value: 'BAR' }]
  const handleSelect = jest.fn()
  const { queryByText, getByText, getByPlaceholderText } = renderWithTheme(
    <Select
      options={options}
      id="with-options"
      inputProps={{ placeholder: 'Search' }}
      onSelect={handleSelect}
    />
  )
  expect(queryByText('FOO')).not.toBeInTheDocument()
  expect(queryByText('BAR')).not.toBeInTheDocument()

  const input = getByPlaceholderText('Search')
  expect(input).toBeVisible()

  fireEvent.click(input)

  const foo = getByText('FOO')
  const bar = getByText('BAR')

  expect(foo).toBeInTheDocument()
  expect(bar).toBeInTheDocument()

  act(() => bar.focus())
  fireEvent.click(bar)
  fireEvent.click(foo)

  expect(handleSelect).toHaveBeenCalledTimes(2)
  expect(handleSelect).toHaveBeenCalledWith({ value: 'FOO' })
  expect(handleSelect).toHaveBeenCalledWith({ value: 'BAR' })
})

// test('Select with name and id', () => {
//   const { debug } = renderWithTheme(<Select name="Bob" id="Bobby" />)
//   debug()
// })

// test('Select should accept disabled', () => {
//   const { debug } = renderWithTheme(<Select disabled id="disabled" />)
//   debug()
// })

// test('Select should accept empty options array', () => {
//   const { debug } = renderWithTheme(<Select options={[]} id="empty-options" />)
//   debug()
// })

// test('Select with a placeholder', () => {
//   const { debug } = renderWithTheme(
//     <Select placeholder="I am a placeholder" id="placeholder" />
//   )
//   debug()
// })

// test('Select placeholder option does not have a value', () => {
//   const {findByPlaceholderText} = renderWithTheme(<Select placeholder="Boo!" id="no-value" />)
//   const input = findByPlaceholderText('Boo!')
// })

// test('Select should accept readOnly', () => {
//   const { debug } = renderWithTheme(<Select readOnly id="read-only" />)
// })

// test('Select should accept required', () => {
//   const { debug } = renderWithTheme(<Select required id="required" />)
// })

// test('Select with a value', () => {
//   const options = [
//     { data: '1', value: 'thing' },
//     { data: '1.5', value: 'Some Value' },
//     { data: '2', value: 'other' },
//   ]
//   const { debug } = renderWithTheme(
//     <Select value="Some Value" options={options} id="value-and-options" />
//   )
// })

// test('Select with aria-describedby', () => {
//   const { debug } = renderWithTheme(<Select aria-describedby="some-id" />)
// })

// test('Select with an error validation', () => {
//   const { debug } = renderWithTheme(
//     <Select validationType="error" id="error" />
//   )
// })

// test('Should trigger onChange handler', () => {
//   const handleChange = jest.fn()

//   const wrapper = mountWithTheme(
//     <Select
//       openOnFocus
//       onSelect={handleChange}
//       options={[{ value: 'foo' }, { value: 'bar' }]}
//     />
//   )

//   wrapper.find('input').simulate('focus')
//   wrapper.update()
//   wrapper
//     .find('li')
//     .at(0)
//     .simulate('click')
//   expect(handleChange).toHaveBeenCalledTimes(1)
//   expect(handleChange).toHaveBeenCalledWith({ value: 'foo' })
// })
