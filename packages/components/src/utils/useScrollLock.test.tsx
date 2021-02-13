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

import { ScrollLockProvider } from '@looker/components-providers'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { useScrollLock, useToggle } from './'

const globalConsole = global.console
const warnMock = jest.fn()

beforeEach(() => {
  global.console = ({
    warn: warnMock,
  } as unknown) as Console
})

afterEach(() => {
  jest.resetAllMocks()
  global.console = globalConsole
})

const ScrollLockComponent = () => {
  const [, ref] = useScrollLock()
  const { value, toggle } = useToggle()
  return (
    <>
      {value && <div ref={ref} />}
      <button onClick={toggle}>toggle</button>
    </>
  )
}

describe('useScrollLock', () => {
  describe('toggle body styles', () => {
    test('with no existing style', () => {
      render(
        <ScrollLockProvider>
          <ScrollLockComponent />
        </ScrollLockProvider>
      )
      expect(document.body).not.toHaveStyle({ overflow: 'hidden' })
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)
      // haven't found a way to test scrollbar offset style
      expect(document.body).toHaveStyle({ overflow: 'hidden' })
      fireEvent.click(toggle)
      expect(document.body).not.toHaveStyle({ overflow: 'hidden' })
    })

    test('with existing style', () => {
      // create an existing style
      document.body.style.overflow = 'scroll'
      render(
        <ScrollLockProvider>
          <ScrollLockComponent />
        </ScrollLockProvider>
      )
      expect(document.body).toHaveStyle({ overflow: 'scroll' })
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)
      // haven't found a way to test scrollbar offset style
      expect(document.body).toHaveStyle({ overflow: 'hidden' })
      fireEvent.click(toggle)
      expect(document.body).toHaveStyle({ overflow: 'scroll' })
      document.body.style.overflow = ''
    })
  })

  test('warning when used without ScrollLockProvider', () => {
    render(<ScrollLockComponent />)
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "ScrollLockContext is missing. Please wrap all @looker/components in a ComponentsProvider.",
        ],
      ]
    `)
  })
})
