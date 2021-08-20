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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { FC } from 'react'
import { useFocusVisible } from './useFocusVisible'

const FocusVisibleComponent: FC<CompatibleHTMLProps<HTMLButtonElement>> = ({
  onBlur,
  onKeyUp,
  ...props
}) => {
  const { focusVisible, ...handlers } = useFocusVisible({ onBlur, onKeyUp })
  return (
    <button {...props} {...handlers} type="button">
      {focusVisible.toString()}
    </button>
  )
}

describe('useFocusVisible', () => {
  test('false when clicking', () => {
    render(<FocusVisibleComponent />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(button).toHaveFocus()
    expect(button).toHaveTextContent('false')
  })

  test('true when tabbing', () => {
    render(<FocusVisibleComponent />)
    const button = screen.getByRole('button')
    userEvent.tab()
    expect(button).toHaveFocus()
    expect(button).toHaveTextContent('true')
  })

  test('removed on blur', () => {
    render(<FocusVisibleComponent />)
    const button = screen.getByRole('button')
    userEvent.tab()
    expect(button).toHaveTextContent('true')
    userEvent.tab()
    expect(button).toHaveTextContent('false')
  })
})
