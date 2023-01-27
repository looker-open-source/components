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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import { fireEvent, screen } from '@testing-library/react'
import { theme } from '@looker/design-tokens'
import { FloatingLabelField } from './FloatingLabelField'
import type { FloatingLabelFieldPropsInternal } from './types'

const TestComponent = ({
  children = <input id="test" type="text" />,
  ...props
}: FloatingLabelFieldPropsInternal) => (
  <ExtendComponentsThemeProvider
    themeCustomizations={{ defaults: { externalLabel: false } }}
  >
    <FloatingLabelField id="test" label="hello!" {...props}>
      {children}
    </FloatingLabelField>
  </ExtendComponentsThemeProvider>
)

describe('FloatingLabelField', () => {
  test('No value', () => {
    renderWithTheme(<TestComponent />)
    expect(screen.getByText('hello!').closest('div')).toHaveClass('label-down')
  })

  test('With value (controlled)', () => {
    renderWithTheme(
      <TestComponent hasValue>
        <input id="test" type="text" defaultValue="test" />
      </TestComponent>
    )
    expect(screen.getByText('hello!').closest('div')).toHaveClass('label-up')
  })

  test('externalLabel', () => {
    renderWithTheme(
      <TestComponent hasValue externalLabel>
        <input id="test" type="text" defaultValue="test" />
      </TestComponent>
    )
    expect(screen.getByText('hello!').closest('div')).not.toHaveClass(
      'label-up'
    )
  })

  test('Focus/change/blur', () => {
    renderWithTheme(<TestComponent />)
    const input = screen.getByLabelText('hello!')
    const label = screen.getByText('hello!')
    const wrapper = label.closest('div')
    expect(wrapper).toHaveClass('label-down')

    fireEvent.focus(input)
    expect(label).toHaveStyle(`color: ${theme.colors.key}`)
    expect(wrapper).toHaveClass('label-up')
    fireEvent.blur(input, { relatedTarget: document.body })
    expect(wrapper).toHaveClass('label-down')

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'Hello World' } })
    fireEvent.blur(input)
    expect(wrapper).toHaveClass('label-up')
  })

  test('Error', () => {
    renderWithTheme(
      <TestComponent validationMessage={{ message: 'Oops', type: 'error' }} />
    )
    const label = screen.getByText('hello!')
    expect(label).toHaveStyle(`color: ${theme.colors.critical}`)
  })

  test('Detail', () => {
    renderWithTheme(<TestComponent detail="0/50" />)
    screen.getByText('0/50')
  })
})
