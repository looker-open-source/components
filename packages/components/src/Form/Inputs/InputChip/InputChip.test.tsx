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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'

import { InputChip } from './InputChip'

test('values are added on Enter keydown', () => {
  const onChangeMock = jest.fn()
  const { getByPlaceholderText } = renderWithTheme(
    <InputChip onChange={onChangeMock} values={[]} placeholder="type here" />
  )
  const input = getByPlaceholderText('type here')
  fireEvent.change(input, { target: { value: 'tag1' } })
  expect(onChangeMock).not.toHaveBeenCalled()

  fireEvent.keyDown(input, { key: 'Enter' })
  expect(onChangeMock).toHaveBeenCalledTimes(1)
  expect(onChangeMock).toHaveBeenCalledWith(['tag1'])
  expect(input).toHaveValue('')
})

test('values are added when a comma is last character entered', () => {
  const onChangeMock = jest.fn()
  const { getByPlaceholderText } = renderWithTheme(
    <InputChip onChange={onChangeMock} values={[]} placeholder="type here" />
  )
  const input = getByPlaceholderText('type here')
  // values not yet added if user pastes comma separated list
  fireEvent.change(input, { target: { value: 'tag1,tag2' } })
  expect(onChangeMock).not.toHaveBeenCalled()

  // if the last character is a comma, values are added
  fireEvent.change(input, { target: { value: 'tag1,tag2,' } })
  expect(onChangeMock).toHaveBeenCalledTimes(1)
  expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2'])
  expect(input).toHaveValue('')
})

test('values are added on blur', () => {
  const onChangeMock = jest.fn()
  const { getByPlaceholderText } = renderWithTheme(
    <InputChip onChange={onChangeMock} values={[]} placeholder="type here" />
  )
  const input = getByPlaceholderText('type here')
  fireEvent.change(input, { target: { value: 'tag1' } })
  expect(onChangeMock).not.toHaveBeenCalled()

  fireEvent.blur(input)
  expect(onChangeMock).toHaveBeenCalledTimes(1)
  expect(onChangeMock).toHaveBeenCalledWith(['tag1'])
  expect(input).toHaveValue('')
})

test('new values are appended to existing values', () => {
  const onChangeMock = jest.fn()
  const { getByPlaceholderText } = renderWithTheme(
    <InputChip
      onChange={onChangeMock}
      values={['tag1']}
      placeholder="type here"
    />
  )
  const input = getByPlaceholderText('type here')
  fireEvent.change(input, { target: { value: 'tag2,' } })
  expect(onChangeMock).toHaveBeenCalledTimes(1)
  expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2'])
  expect(input).toHaveValue('')
})

test('values are removed on backspace keydown', () => {
  const onChangeMock = jest.fn()
  const { getByPlaceholderText } = renderWithTheme(
    <InputChip
      onChange={onChangeMock}
      values={['tag1']}
      placeholder="type here"
    />
  )
  const input = getByPlaceholderText('type here')

  // If there is text in the input, Backspace doesn't remove values
  fireEvent.change(input, { target: { value: 't' } })
  fireEvent.keyDown(input, { key: 'Backspace' })
  expect(onChangeMock).not.toHaveBeenCalled()

  fireEvent.change(input, { target: { value: '' } })
  fireEvent.keyDown(input, { key: 'Backspace' })
  expect(onChangeMock).toHaveBeenCalledTimes(1)
  expect(onChangeMock).toHaveBeenCalledWith([])
})

test('values are removed by clicking remove on the chip', () => {
  const onChangeMock = jest.fn()
  const { getByText } = renderWithTheme(
    <InputChip onChange={onChangeMock} values={['tag1']} />
  )
  const remove = getByText('Remove')

  fireEvent.click(remove)
  expect(onChangeMock).toHaveBeenCalledTimes(1)
  expect(onChangeMock).toHaveBeenCalledWith([])
})

test('new values are validated', () => {
  const onChangeMock = jest.fn()
  const validate = jest.fn(value => value === 'tag1')
  const { getByPlaceholderText } = renderWithTheme(
    <InputChip
      onChange={onChangeMock}
      values={[]}
      placeholder="type here"
      validate={validate}
    />
  )
  const input = getByPlaceholderText('type here')
  fireEvent.change(input, { target: { value: 'tag2,' } })
  expect(onChangeMock).toHaveBeenCalledTimes(1)
  expect(onChangeMock).toHaveBeenCalledWith([])
  expect(input).toHaveValue('tag2')

  fireEvent.change(input, { target: { value: 'tag1,' } })
  expect(onChangeMock).toHaveBeenCalledTimes(2)
  expect(onChangeMock).toHaveBeenCalledWith(['tag1'])
  expect(input).toHaveValue('')
})
