/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { fireEvent, screen } from '@testing-library/react'
import { theme } from '@looker/design-tokens'
import { FloatingLabelField } from './FloatingLabelField'

describe('FloatingLabelField', () => {
  test('No value', () => {
    renderWithTheme(
      <FloatingLabelField id="test" label="hello!">
        <input id="test" type="text" />
      </FloatingLabelField>
    )
    expect(screen.getByText('hello!').closest('div')).toHaveClass('label-down')
  })

  test('With value (controlled)', () => {
    renderWithTheme(
      <FloatingLabelField id="test" label="hello!" hasValue>
        <input id="test" type="text" defaultValue="test" />
      </FloatingLabelField>
    )
    expect(screen.getByText('hello!').closest('div')).toHaveClass('label-up')
  })

  test('externalLabel', () => {
    renderWithTheme(
      <FloatingLabelField id="test" label="hello!" hasValue externalLabel>
        <input id="test" type="text" defaultValue="test" />
      </FloatingLabelField>
    )
    expect(screen.getByText('hello!').closest('div')).not.toHaveClass(
      'label-up'
    )
  })

  test('Focus/change/blur', () => {
    renderWithTheme(
      <FloatingLabelField id="test" label="hello!">
        <input id="test" type="text" />
      </FloatingLabelField>
    )
    const input = screen.getByLabelText('hello!')
    const label = screen.getByText('hello!')
    const wrapper = label.closest('div')
    expect(wrapper).toHaveClass('label-down')

    fireEvent.focus(input)
    expect(label).toHaveStyle(`color: ${theme.colors.key}`)
    expect(wrapper).toHaveClass('label-up')
    fireEvent.blur(input)
    expect(wrapper).toHaveClass('label-down')

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'Hello World' } })
    fireEvent.blur(input)
    expect(wrapper).toHaveClass('label-up')
  })

  test('Error', () => {
    renderWithTheme(
      <FloatingLabelField
        id="test"
        label="hello!"
        validationMessage={{ message: 'Oops', type: 'error' }}
      >
        <input id="test" type="text" />
      </FloatingLabelField>
    )
    const label = screen.getByText('hello!')
    expect(label).toHaveStyle(`color: ${theme.colors.critical}`)
  })

  test('Detail', () => {
    renderWithTheme(
      <FloatingLabelField id="test" label="hello!" detail="0/50">
        <input id="test" type="text" />
      </FloatingLabelField>
    )
    screen.getByText('0/50')
  })
})
