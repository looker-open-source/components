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
import { screen, fireEvent } from '@testing-library/react'
import type { ChangeEvent } from 'react'
import React, { useState } from 'react'
import { Button } from '../../../Button'
import { InlineInputText, InlineInputTextBase } from './InlineInputText'

const ControlledInlineInputText = () => {
  const [value, setValue] = useState('Type here...')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }
  const onClick = () => {
    setValue('You clicked the button')
  }
  return (
    <>
      <InlineInputText value={value} onChange={onChange} />
      <Button onClick={onClick}>Click Me</Button>
    </>
  )
}
describe('InlineInputText', () => {
  test('renders and displays placeholder', () => {
    renderWithTheme(<InlineInputText placeholder="this is the placeholder" />)
    expect(
      screen.getByPlaceholderText('this is the placeholder')
    ).toBeInTheDocument()
  })

  test('renders and displays value', () => {
    renderWithTheme(<InlineInputText value="this is the value" />)
    expect(screen.getByDisplayValue('this is the value')).toBeInTheDocument()
  })

  test('renders and displays when passed prop simple', () => {
    renderWithTheme(<InlineInputText simple value="this is the value" />)
    expect(screen.getByDisplayValue('this is the value')).toBeInTheDocument()
  })

  test('renders and displays when passed prop readOnly', () => {
    renderWithTheme(<InlineInputText simple value="this is the value" />)
    expect(screen.getByDisplayValue('this is the value')).toBeInTheDocument()
  })

  test('renders and displays when passed prop underlineOnlyOnHover', () => {
    renderWithTheme(
      <InlineInputText underlineOnlyOnHover value="this is the value" />
    )
    expect(screen.getByDisplayValue('this is the value')).toBeInTheDocument()
  })

  test('applies style when prop disabled is passed', () => {
    renderWithTheme(<InlineInputTextBase placeholder="type here..." />)
    expect(
      screen.getByPlaceholderText('type here...').parentElement
    ).toBeInTheDocument()
  })

  test('change value as user types', () => {
    renderWithTheme(<InlineInputTextBase placeholder="type here..." />)
    expect(screen.getByPlaceholderText('type here...')).toBeInTheDocument()
    fireEvent.change(
      screen.getByPlaceholderText('type here...').closest('input') as Element,
      {
        target: { value: 'this is the new value' },
      }
    )
    expect(screen.getByText('this is the new value')).toBeInTheDocument()
  })

  test('onChange behaves as expected', () => {
    renderWithTheme(<ControlledInlineInputText />)
    expect(screen.getByText('Type here...')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Click Me'))
    expect(screen.queryByText('Type here...')).not.toBeInTheDocument()
    expect(screen.getByText('You clicked the button')).toBeInTheDocument()
  })
})
