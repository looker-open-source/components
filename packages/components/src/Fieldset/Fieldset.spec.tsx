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

import 'jest-styled-components'
import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { FieldText } from '../Form'
import { Fieldset } from './Fieldset'

const fieldTexts = (
  <>
    <FieldText label="one" name="name1" id="text-1" />
    <FieldText label="two" name="name2" id="text-2" />
    <FieldText label="three" name="nam3" id="text-3" />
  </>
)

const globalConsole = global.console
const warnMock = jest.fn()

beforeEach(() => {
  jest.useFakeTimers()
  global.console = {
    warn: warnMock,
  } as unknown as Console
})

afterEach(() => {
  global.console = globalConsole
})

describe('Fieldset', () => {
  test('Basic', () => {
    renderWithTheme(<Fieldset>{fieldTexts}</Fieldset>)
    expect(screen.getByText('three')).toBeInTheDocument()
  })

  test('Accordion w/o Legend warning', () => {
    renderWithTheme(<Fieldset accordion>{fieldTexts}</Fieldset>)
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "Please provide a value for the \\"legend\\" prop if using accordion mode",
        ],
      ]
    `)
  })

  test('Inline', () => {
    renderWithTheme(<Fieldset inline>{fieldTexts}</Fieldset>)
    expect(screen.getByText('three')).toBeInTheDocument()
  })

  test('Legend', () => {
    renderWithTheme(<Fieldset legend="Legend">{fieldTexts}</Fieldset>)
    expect(screen.getByText('Legend')).toBeInTheDocument()
  })

  test('Special Legend', () => {
    renderWithTheme(<Fieldset legend={<>Legend</>}>{fieldTexts}</Fieldset>)
    expect(screen.getByText('Legend')).toBeInTheDocument()
  })

  test('Wrap', () => {
    renderWithTheme(<Fieldset wrap>{fieldTexts}</Fieldset>)
    expect(screen.getByText('three')).toBeInTheDocument()
  })

  describe('Accordion mode', () => {
    test('Renders legend and children (on legend click)', () => {
      renderWithTheme(
        <Fieldset legend="Legend" accordion>
          {fieldTexts}
        </Fieldset>
      )

      expect(screen.queryByText('one')).not.toBeInTheDocument()
      expect(screen.queryByText('two')).not.toBeInTheDocument()
      expect(screen.queryByText('three')).not.toBeInTheDocument()
      fireEvent.click(screen.getByText('Legend'))
      screen.getByText('one')
      screen.getByText('two')
      screen.getByText('three')
    })

    test('Renders children by default when defaultOpen === true', () => {
      renderWithTheme(
        <Fieldset legend="Legend" accordion defaultOpen>
          {fieldTexts}
        </Fieldset>
      )

      screen.getByText('one')
      screen.getByText('two')
      screen.getByText('three')
    })

    test('Triggers onClose and onOpen callbacks on legend click', () => {
      const onClose = jest.fn()
      const onOpen = jest.fn()

      renderWithTheme(
        <Fieldset legend="Legend" accordion onClose={onClose} onOpen={onOpen}>
          {fieldTexts}
        </Fieldset>
      )

      const disclosure = screen.getByText('Legend')
      fireEvent.click(disclosure)
      expect(onOpen).toHaveBeenCalled()
      fireEvent.click(disclosure)
      expect(onClose).toHaveBeenCalled()
    })

    test('Shows and hides children on legend click with provided isOpen and toggleOpen props', () => {
      const Wrapper = () => {
        const [isOpen, setIsOpen] = useState(false)
        return (
          <Fieldset
            legend="Legend"
            accordion
            isOpen={isOpen}
            toggleOpen={setIsOpen}
          >
            {fieldTexts}
          </Fieldset>
        )
      }

      renderWithTheme(<Wrapper />)

      expect(screen.queryByText('one')).not.toBeInTheDocument()
      expect(screen.queryByText('two')).not.toBeInTheDocument()
      expect(screen.queryByText('three')).not.toBeInTheDocument()
      fireEvent.click(screen.getByText('Legend'))
      screen.getByText('one')
      screen.getByText('two')
      screen.getByText('three')
    })
  })
})
