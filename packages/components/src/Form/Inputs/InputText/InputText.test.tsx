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

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'

import { InputText } from './InputText'

const globalConsole = global.console
const warnMock = jest.fn()

beforeEach(() => {
  jest.useFakeTimers()
  global.console = ({
    warn: warnMock,
  } as unknown) as Console
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
  jest.resetAllMocks()
  global.console = globalConsole
})

describe('InputText', () => {
  test('with name and id', () => {
    renderWithTheme(<InputText name="Bob" id="Bobby" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'Bob')
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'Bobby')
  })

  test('should accept disabled', () => {
    renderWithTheme(<InputText disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  test('with a placeholder', () => {
    renderWithTheme(<InputText placeholder="I am a placeholder" />)
    expect(
      screen.getByPlaceholderText('I am a placeholder')
    ).toBeInTheDocument()
  })

  test('should accept readOnly', () => {
    renderWithTheme(<InputText readOnly />)
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
  })

  test('should accept required', () => {
    renderWithTheme(<InputText required />)
    expect(screen.getByRole('textbox')).toBeRequired()
  })

  test('should accept defaultValue', () => {
    renderWithTheme(<InputText defaultValue="Some value" />)
    expect(screen.getByRole('textbox')).toHaveValue('Some value')
  })

  test('with aria-describedby', () => {
    renderWithTheme(<InputText aria-describedby="some-id" />)
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      'some-id'
    )
  })
  test('autoResize', () => {
    const { container, getByPlaceholderText, getByText } = renderWithTheme(
      <InputText autoResize placeholder="resize me" />
    )
    expect(container.firstChild).toHaveStyleRule('width: auto')
    expect(getByPlaceholderText('resize me')).toHaveStyleRule(
      'position: absolute'
    )
    expect(getByText('resize me')).toBeVisible()
  })

  test('with an error validation', () => {
    renderWithTheme(<InputText placeholder="Hello" validationType="error" />)
    expect(screen.getByPlaceholderText('Hello')).toHaveAttribute('aria-invalid')
    expect(screen.getByTitle('Validation Error')).toBeInTheDocument()
  })

  describe('before & after', () => {
    test('ReactNode', () => {
      const { getByText } = renderWithTheme(
        <InputText before={<span>before</span>} after={<span>after</span>} />
      )

      expect(getByText('before')).toBeVisible()
      expect(getByText('after')).toBeVisible()
    })

    test('icons', () => {
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

    test('redundant ones should not render', () => {
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

    test('focus & blur behavior', () => {
      const handleBlur = jest.fn()
      const handleFocus = jest.fn()
      renderWithTheme(
        <>
          <InputText
            onBlur={handleBlur}
            onFocus={handleFocus}
            after={<span>after</span>}
          />
          <button>click</button>
        </>
      )
      const after = screen.getByText('after')
      userEvent.click(after)
      jest.runOnlyPendingTimers()
      expect(handleFocus).toHaveBeenCalled()
      expect(screen.getByRole('textbox')).toHaveFocus()

      userEvent.click(after)
      expect(handleBlur).not.toHaveBeenCalled()
      expect(screen.getByRole('textbox')).toHaveFocus()

      userEvent.click(screen.getByText('click'))
      expect(handleBlur).toHaveBeenCalled()
      expect(screen.getByRole('textbox')).not.toHaveFocus()
    })
  })

  test('Should trigger onChange handler', () => {
    const onChange = jest.fn()

    renderWithTheme(<InputText onChange={onChange} />)

    userEvent.type(screen.getByRole('textbox'), 'Hello world')
    expect(onChange).toHaveBeenCalled()
  })
})
