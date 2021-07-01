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
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { ButtonToggles } from './ButtonToggles'

const options = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label2',
    value: 'value2',
  },
  {
    label: 'label3',
    value: 'value3',
  },
]

describe('ButtonToggles tests', () => {
  it('ButtonToggles with values pre-selected are selected', () => {
    renderWithTheme(
      <ButtonToggles value={'value1'} options={options} onChange={jest.fn()} />
    )

    expect(screen.getByText('label1')).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('label2')).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText('label3')).toHaveAttribute('aria-pressed', 'false')
  })

  it('passes onChange newly selected value', () => {
    const mock = jest.fn()
    renderWithTheme(
      <ButtonToggles value={''} options={options} onChange={mock} />
    )

    fireEvent.click(screen.getByText('label1'))
    expect(mock).toHaveBeenCalledWith('value1')
  })

  it('passes onChange new value when other value is clicked', () => {
    const mock = jest.fn()
    renderWithTheme(
      <ButtonToggles value={'value1'} options={options} onChange={mock} />
    )

    fireEvent.click(screen.getByText('label2'))
    expect(mock).toHaveBeenCalledWith('value2')
  })
})
