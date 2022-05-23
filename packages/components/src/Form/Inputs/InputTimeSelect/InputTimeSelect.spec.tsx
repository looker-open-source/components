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
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import map from 'lodash/map'
import type { InputTimeSelectProps } from './InputTimeSelect'
import { InputTimeSelect } from './InputTimeSelect'

jest.mock('lodash/throttle', () => (fn: any) => fn)

const realDateNow = Date.now.bind(global.Date)
// eslint-disable-next-line @typescript-eslint/unbound-method
const realScrollIntoView = window.HTMLElement.prototype.scrollIntoView

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  window.HTMLElement.prototype.scrollIntoView = jest.fn()
  // eslint-disable-next-line @typescript-eslint/unbound-method
  global.Date.now = jest.fn(() => 1580567580000)
})

afterEach(() => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  global.Date.now = realDateNow // reset Date.now mock
  // eslint-disable-next-line @typescript-eslint/unbound-method
  window.HTMLElement.prototype.scrollIntoView = realScrollIntoView
  jest.resetAllMocks()
})

// parse text content from options list
const extractTextFromDomList = (list: HTMLElement) => {
  const options = list.getElementsByTagName('li')
  return map(options, (el: HTMLElement) => {
    return el.textContent
  })
}

const renderListContent = (props: InputTimeSelectProps) => {
  renderWithTheme(<InputTimeSelect {...props} />)

  // open list
  const inputBox = screen.getByPlaceholderText('Select time')
  fireEvent.click(inputBox)

  // select list container
  const domList = screen.getByRole('listbox')
  return domList
}

describe('prop: format', () => {
  test('formats options in 12 hour time', () => {
    const view = renderListContent({ format: '12h' })
    expect(extractTextFromDomList(view)).toMatchSnapshot()
    fireEvent.click(document)
  })

  test('formats options in 24 hour time', () => {
    const view = renderListContent({ format: '24h' })
    expect(extractTextFromDomList(view)).toMatchSnapshot()
    fireEvent.click(document)
  })
})

describe('prop: interval', () => {
  test('renders 5-minute intervals', () => {
    const view = renderListContent({ interval: 5 })
    expect(extractTextFromDomList(view)).toMatchSnapshot()
    fireEvent.click(document)
  })

  test('renders 10-minute intervals', () => {
    const view = renderListContent({ interval: 10 })
    expect(extractTextFromDomList(view)).toMatchSnapshot()
    fireEvent.click(document)
  })
  test('renders 15-minute intervals', () => {
    const view = renderListContent({ interval: 15 })
    expect(extractTextFromDomList(view)).toMatchSnapshot()
    fireEvent.click(document)
  })
  test('renders 20-minute intervals', () => {
    const view = renderListContent({ interval: 20 })
    expect(extractTextFromDomList(view)).toMatchSnapshot()
    fireEvent.click(document)
  })
  test('renders 30-minute intervals', () => {
    const view = renderListContent({ interval: 30 })
    expect(extractTextFromDomList(view)).toMatchSnapshot()
    fireEvent.click(document)
  })
  test('renders 60-minute intervals', () => {
    const view = renderListContent({ interval: 60 })
    expect(extractTextFromDomList(view)).toMatchSnapshot()
    fireEvent.click(document)
  })
})

describe('text input', () => {
  test('converts shorthand input to 24h formatted string on change', () => {
    const handleChange = jest.fn()
    renderWithTheme(<InputTimeSelect onChange={handleChange} />)

    expect(handleChange).not.toHaveBeenCalled()

    const inputBox = screen.getByPlaceholderText('Select time')
    fireEvent.click(inputBox)

    // Enter key input
    fireEvent.change(inputBox, { target: { value: '2pm' } })
    fireEvent.keyDown(inputBox, { key: 'Enter' })
    expect(handleChange).toHaveBeenLastCalledWith('14:00')

    // Tab key input
    fireEvent.change(inputBox, { target: { value: '3:3' } }) // incomplete time string
    fireEvent.keyDown(inputBox, { key: 'Tab' })
    expect(handleChange).toHaveBeenLastCalledWith('03:03')

    fireEvent.click(document)
  })
})

describe('keyboard nav ux', () => {
  test('highlights closest time to now when an unselected list is opened', () => {
    // NOTE: Date.now() mocked to 1580517818172 (Feb 01 2020 6:33 am)
    const view = renderListContent({})
    const selected = view.querySelector('[aria-selected="true"]')
    expect((selected as HTMLElement).textContent).toMatchInlineSnapshot(
      `"06:30 am"`
    )
    fireEvent.click(document)
  })

  test('highlights selected value when list is opened', () => {
    const view = renderListContent({
      onChange: jest.fn(),
      value: '14:15',
    })
    const selected = view.querySelector('[aria-selected="true"]')
    expect((selected as HTMLElement).textContent).toMatchInlineSnapshot(
      `"02:15 pm"`
    )
    fireEvent.click(document)
  })

  test('highlights closest time to selected value when list is opened but value does not match provided options', () => {
    const view = renderListContent({ onChange: jest.fn(), value: '16:38' })
    const selected = view.querySelector('[aria-selected="true"]')
    expect((selected as HTMLElement).textContent).toMatchInlineSnapshot(
      `"04:45 pm"`
    )
    fireEvent.click(document)
  })
})
