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

import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/react'
import React, { useState } from 'react'

import { renderWithTheme } from '@looker/components-test-utils'
import { ButtonGroup } from './ButtonGroup'
import { ButtonItem } from './ButtonItem'

describe('ButtonGroup', () => {
  test('controlled', () => {
    function TestComponent() {
      const [value, setValue] = useState(['Bananas'])
      return (
        <ButtonGroup value={value} onChange={setValue}>
          <ButtonItem>Apples</ButtonItem>
          <ButtonItem>Oranges</ButtonItem>
          <ButtonItem>Bananas</ButtonItem>
        </ButtonGroup>
      )
    }
    renderWithTheme(<TestComponent />)

    const apples = screen.getByText('Apples')
    const bananas = screen.getByText('Bananas')
    const oranges = screen.getByText('Oranges')

    expect(apples).toHaveAttribute('aria-pressed', 'false')
    expect(bananas).toHaveAttribute('aria-pressed', 'true')
    expect(oranges).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(apples)
    expect(apples).toHaveAttribute('aria-pressed', 'true')
    expect(bananas).toHaveAttribute('aria-pressed', 'true')
    expect(oranges).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(bananas)
    expect(apples).toHaveAttribute('aria-pressed', 'true')
    expect(bananas).toHaveAttribute('aria-pressed', 'false')
    expect(oranges).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(oranges)
    expect(apples).toHaveAttribute('aria-pressed', 'true')
    expect(bananas).toHaveAttribute('aria-pressed', 'false')
    expect(oranges).toHaveAttribute('aria-pressed', 'true')
  })

  test('options', () => {
    const options = [
      { label: 'Smoked Gouda', value: 'Gouda' },
      { value: 'Cheddar' },
      { disabled: true, value: 'Swiss' },
    ]
    const onChangeMock = jest.fn()
    renderWithTheme(
      <ButtonGroup
        options={options}
        value={['Cheddar']}
        onChange={onChangeMock}
      />
    )
    const goudaButton = screen.getByText('Smoked Gouda')
    const cheddarButton = screen.getByText('Cheddar')
    const swissButton = screen.getByText('Swiss')

    expect(goudaButton).toHaveAttribute('aria-pressed', 'false')
    expect(cheddarButton).toHaveAttribute('aria-pressed', 'true')
    expect(swissButton).toHaveAttribute('aria-pressed', 'false')
    expect(swissButton).toBeDisabled()

    fireEvent.click(goudaButton)
    expect(onChangeMock).toBeCalledWith(['Cheddar', 'Gouda'])
    onChangeMock.mockClear()
    fireEvent.click(cheddarButton)
    expect(onChangeMock).toHaveBeenCalledWith([])
    onChangeMock.mockClear()
    // Disabled
    fireEvent.click(swissButton)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  test('disabled', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <ButtonGroup disabled onChange={onChangeMock}>
        <ButtonItem>Apples</ButtonItem>
      </ButtonGroup>
    )
    const applesButton = screen.getByText('Apples')
    fireEvent.click(applesButton)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  test('JSX children', () => {
    renderWithTheme(
      <ButtonGroup>
        <ButtonItem>
          <strong>BOLD</strong> thing
        </ButtonItem>
      </ButtonGroup>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
