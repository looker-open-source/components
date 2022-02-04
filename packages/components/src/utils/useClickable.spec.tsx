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

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import type { UseClickableProps } from './useClickable'
import { useClickable } from './useClickable'

const ClickableComponent = (props: UseClickableProps<HTMLDivElement>) => {
  const { focusVisible, ...clickableProps } = useClickable(props)
  return (
    <div {...clickableProps} data-testid="wrapper">
      focusVisible: {focusVisible.toString()}
    </div>
  )
}

describe('useClickable', () => {
  describe('role', () => {
    test('undefined if no onClick', () => {
      render(<ClickableComponent />)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    test('button if onClick and absent in props', () => {
      render(<ClickableComponent onClick={() => null} />)
      expect(screen.getByRole('button')).toBeVisible()
    })

    test('overwrite-able', () => {
      render(<ClickableComponent onClick={() => null} role="option" />)
      expect(screen.getByRole('option')).toBeVisible()
    })
  })

  test('focusVisible', () => {
    render(<ClickableComponent />)
    const wrapper = screen.getByTestId('wrapper')
    expect(wrapper).toHaveTextContent('focusVisible: false')
    fireEvent.focus(wrapper)
    expect(wrapper).toHaveTextContent('focusVisible: false')
    fireEvent.keyUp(wrapper, { key: 'ArrowUp' })
    expect(wrapper).toHaveTextContent('focusVisible: true')
    fireEvent.blur(wrapper)
    expect(wrapper).toHaveTextContent('focusVisible: false')
    fireEvent.focus(wrapper)
    fireEvent.keyUp(wrapper, { key: 'Tab' })
    expect(wrapper).toHaveTextContent('focusVisible: true')
  })

  describe('tabIndex', () => {
    test('0 by default', () => {
      render(<ClickableComponent />)
      expect(screen.getByTestId('wrapper')).toHaveAttribute('tabindex', '0')
    })

    test('undefined when disabled', () => {
      render(<ClickableComponent disabled />)
      expect(screen.getByTestId('wrapper')).not.toHaveAttribute('tabindex')
    })
  })

  describe('onClick', () => {
    test('not called if disabled', () => {
      const onClickMock = jest.fn()
      render(<ClickableComponent onClick={onClickMock} disabled />)
      fireEvent.click(screen.getByTestId('wrapper'))
      expect(onClickMock).not.toHaveBeenCalled()
    })

    test('called on click', () => {
      const onClickMock = jest.fn()
      render(<ClickableComponent onClick={onClickMock} />)
      fireEvent.click(screen.getByTestId('wrapper'))
      expect(onClickMock).toHaveBeenCalledTimes(1)
    })

    test('called on enter keyup', () => {
      const onClickMock = jest.fn()
      const onKeyUpMock = jest.fn()
      render(<ClickableComponent onClick={onClickMock} onKeyUp={onKeyUpMock} />)
      fireEvent.keyUp(screen.getByTestId('wrapper'), { key: 'Enter' })
      expect(onClickMock).toHaveBeenCalledTimes(1)
      expect(onKeyUpMock).toHaveBeenCalledTimes(1)
    })

    test('called on space keyup', () => {
      const onClickMock = jest.fn()
      const onKeyUpMock = jest.fn()
      render(<ClickableComponent onClick={onClickMock} onKeyUp={onKeyUpMock} />)
      fireEvent.keyUp(screen.getByTestId('wrapper'), { key: ' ' })
      expect(onClickMock).toHaveBeenCalledTimes(1)
      expect(onKeyUpMock).toHaveBeenCalledTimes(1)
    })
  })
})
