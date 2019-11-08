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

import 'jest-styled-components'
import React from 'react'
import { mountWithTheme, assertSnapshot } from '@looker/components-test-utils'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
import { InputSearch } from './InputSearch'

test('InputSearch default', () => {
  assertSnapshot(<InputSearch />)
})

test('InputSearch displays placeholder', () => {
  const wrapper = mountWithTheme(<InputSearch placeholder="Type your search" />)
  expect(wrapper.props().children.props.placeholder).toEqual('Type your search')
})

test('InputSearch displays value', () => {
  const wrapper = mountWithTheme(<InputSearch value="start value" />)
  expect(wrapper.props().children.props.value).toEqual('start value')
})

test('InputSearch displays summary', () => {
  const wrapper = mountWithTheme(
    <InputSearch value="start value" summary="summary value" />
  )
  expect(wrapper.props().children.props.summary).toEqual('summary value')
})

test('InputSearch clears bottom when input value is empty', () => {
  const wrapper = mountWithTheme(<InputSearch value="start value" />)

  expect(wrapper.find('input').props().value).toEqual('start value')
  wrapper.find('button').simulate('click')
  expect(wrapper.find('input').props().value).toEqual('')
})

test('InputSearch shows clear button and summary', () => {
  const wrapper = mountWithTheme(
    <InputSearch value="start value" summary="summary value" />
  )
  expect(wrapper.find('button').exists()).toEqual(true)
  expect(wrapper.props().children.props.summary).toEqual('summary value')
})

test('InputSearch hides controls when using the flag hideControls', () => {
  const wrapper = mountWithTheme(
    <InputSearch value="start value" summary="summary value" hideControls />
  )
  expect(wrapper.find('button').exists()).toEqual(false)
})

test('InputSearch onClear can be updated by user', () => {
  const onClear = jest.fn()

  const { getByRole } = render(
    <ThemeProvider theme={theme}>
      <InputSearch value="Search" onClear={onClear} />
    </ThemeProvider>
  )

  const inputButton = getByRole('button')
  inputButton && fireEvent.click(inputButton)
  expect(onClear).toHaveBeenCalled()
})
