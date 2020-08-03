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

import 'jest-styled-components'
import React from 'react'
import {
  assertSnapshot,
  mountWithTheme,
  renderWithTheme,
} from '@looker/components-test-utils'

import { InputText } from './InputText'

const globalConsole = global.console
const warnMock = jest.fn()

beforeEach(() => {
  global.console = ({
    warn: warnMock,
  } as unknown) as Console
})

afterEach(() => {
  jest.resetAllMocks()
  global.console = globalConsole
})

test('InputText default', () => {
  assertSnapshot(<InputText />)
})

test('InputText with name and id', () => {
  assertSnapshot(<InputText name="Bob" id="Bobby" />)
})

test('InputText should accept disabled', () => {
  assertSnapshot(<InputText disabled />)
})

test('InputText with a placeholder', () => {
  assertSnapshot(<InputText placeholder="I am a placeholder" />)
})

test('InputText should accept readOnly', () => {
  assertSnapshot(<InputText readOnly />)
})

test('InputText should accept required', () => {
  assertSnapshot(<InputText required />)
})

test('InputText with a value', () => {
  assertSnapshot(<InputText value="Some value" />)
})

test('InputText with aria-describedby', () => {
  assertSnapshot(<InputText aria-describedby="some-id" />)
})

test('InputText autoResize', () => {
  const { container, getByPlaceholderText, getByText } = renderWithTheme(
    <InputText autoResize placeholder="resize me" />
  )
  expect(container.firstChild).toHaveStyle('width: auto')
  expect(getByPlaceholderText('resize me')).toHaveStyle('position: absolute')
  expect(getByText('resize me')).toBeVisible()
})

test('InputText with an error validation', () => {
  const { getAllByTitle, getByPlaceholderText } = renderWithTheme(
    <InputText placeholder="Hello" validationType="error" />
  )

  expect(getByPlaceholderText('Hello')).toHaveAttribute('aria-invalid')
  expect(getAllByTitle('Validation Error')).toBeDefined()
})

test('InputText with a before & after', () => {
  const { getByText } = renderWithTheme(
    <InputText before={<span>before</span>} after={<span>after</span>} />
  )

  expect(getByText('before')).toBeVisible()
  expect(getByText('after')).toBeVisible()
})

test('InputText with an iconBefore & iconAfter', () => {
  const { getByTitle } = renderWithTheme(
    <InputText
      iconBefore="Favorite"
      iconBeforeTitle="Before Title"
      iconAfter="Account"
      iconAfterTitle="After Title"
    />
  )

  expect(getByTitle('Before Title')).toBeInTheDocument()
  expect(getByTitle('After Title')).toBeInTheDocument()
})

test('InputText with redundant before/after props', () => {
  const { queryByPlaceholderText } = renderWithTheme(
    <>
      <InputText placeholder="Hello" iconBefore="Favorite" before="$" />
      <InputText placeholder="Goodbye" iconAfter="Account" after="%" />
    </>
  )

  expect(queryByPlaceholderText('Hello')).not.toBeInTheDocument()
  expect(queryByPlaceholderText('Goodbye')).not.toBeInTheDocument()
  expect(warnMock.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        "Use before or iconBefore, but not both at the same time.",
      ],
      Array [
        "Use after or iconAfter, but not both at the same time.",
      ],
    ]
  `)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<InputText onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
