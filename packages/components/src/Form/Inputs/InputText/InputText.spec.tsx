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

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '@looker/components-test-utils'
import { AccountCircle } from '@styled-icons/material-outlined'
import { Favorite } from '@styled-icons/material'
import React from 'react'

import { InputText } from './InputText'

const globalConsole = global.console
const warnMock = jest.fn()

beforeEach(() => {
  jest.useFakeTimers()
  global.console = {
    warn: warnMock,
  } as unknown as Console
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
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
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

  test('should accept type', () => {
    renderWithTheme(<InputText type="tel" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel')
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
    const { container } = renderWithTheme(
      <InputText autoResize placeholder="resize me" />
    )
    expect(container.firstChild).toHaveStyleRule('width: auto')
    expect(screen.getByPlaceholderText('resize me')).toHaveStyleRule(
      'position: absolute'
    )
    expect(screen.getByText('resize me')).toBeVisible()
  })

  test('with an error validation', () => {
    renderWithTheme(<InputText placeholder="Hello" validationType="error" />)
    expect(screen.getByPlaceholderText('Hello')).toHaveAttribute('aria-invalid')
  })

  describe('before & after', () => {
    test('ReactNode', () => {
      renderWithTheme(<InputText before="before" after="after" />)

      expect(screen.getByText('before')).toBeVisible()
      expect(screen.getByText('after')).toBeVisible()
    })

    test('Simple string', () => {
      renderWithTheme(<InputText before="before" after="after" />)

      expect(screen.getByText('before')).toBeVisible()
      expect(screen.getByText('after')).toBeVisible()
    })

    test('icons', () => {
      renderWithTheme(
        <InputText
          iconBefore={<Favorite title="Before Title" />}
          iconAfter={<AccountCircle title="After Title" />}
        />
      )

      expect(screen.getByTitle('Before Title')).toBeInTheDocument()
      expect(screen.getByTitle('After Title')).toBeInTheDocument()
    })

    test('redundant ones should not render', () => {
      renderWithTheme(
        <>
          <InputText placeholder="Hello" iconBefore={<Favorite />} before="$" />
          <InputText
            placeholder="Goodbye"
            iconAfter={<AccountCircle />}
            after="%"
          />
        </>
      )

      expect(screen.queryByPlaceholderText('Hello')).not.toBeInTheDocument()
      expect(screen.queryByPlaceholderText('Goodbye')).not.toBeInTheDocument()
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

    test.skip('focus & blur behavior', () => {
      const handleBlur = jest.fn()
      const handleFocus = jest.fn()
      renderWithTheme(
        <InputText onBlur={handleBlur} onFocus={handleFocus} after="after" />
      )
      const after = screen.getByText('after')
      /**
       * userEvent now (correctly) detects that `after` is `pointer-events: 'none'` and
       * can therefore not _actually_ be clicked. Disabling this test until someone can
       * come up with a workaround.
       */
      userEvent.click(after)
      expect(handleFocus).toHaveBeenCalled()
      expect(screen.getByRole('textbox')).toHaveFocus()

      userEvent.click(after)
      expect(handleBlur).not.toHaveBeenCalled()
      expect(screen.getByRole('textbox')).toHaveFocus()
    })
  })

  test('Should trigger onChange handler', () => {
    const onChange = jest.fn()

    renderWithTheme(<InputText onChange={onChange} />)

    userEvent.type(screen.getByRole('textbox'), 'Hello world')
    expect(onChange).toHaveBeenCalled()
  })

  test('onBlur & onFocus callbacks', () => {
    const handleBlur = jest.fn()
    const handleFocus = jest.fn()
    renderWithTheme(
      <>
        <InputText onBlur={handleBlur} onFocus={handleFocus} />
        <button>click</button>
      </>
    )

    userEvent.click(screen.getByRole('textbox'))
    expect(handleFocus).toHaveBeenCalled()
    expect(screen.getByRole('textbox')).toHaveFocus()

    userEvent.click(screen.getByText('click'))
    expect(handleBlur).toHaveBeenCalled()
    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })
})
