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

import { ScrollLockProvider } from '@looker/components-providers'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { useScrollLock, useToggle } from './'

const globalConsole = global.console
const warnMock = jest.fn()
let paddingSpy: jest.SpyInstance<void, string[]>

beforeEach(() => {
  paddingSpy = jest.spyOn(document.body.style, 'paddingRight', 'set')
  global.console = {
    ...globalConsole,
    warn: warnMock,
  } as unknown as Console
})

afterEach(() => {
  jest.resetAllMocks()
  global.console = globalConsole
  paddingSpy.mockClear()
})

const ScrollLockComponent = () => {
  const [, ref] = useScrollLock()
  const { value, toggle } = useToggle()
  return (
    <>
      {value && <div ref={ref} data-testid="scroll-lock-element" />}
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
      expect(document.body).toHaveStyle({ overflow: 'hidden' })
      // haven't found a better way to test scrollbar offset style
      expect(paddingSpy.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "calc( + 0px)",
          ],
        ]
      `)
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
      expect(document.body).toHaveStyle({ overflow: 'hidden' })
      // haven't found a better way to test scrollbar offset style
      expect(paddingSpy.mock.calls).toMatchInlineSnapshot(`
              Array [
                Array [
                  "calc( + 0px)",
                ],
              ]
          `)
      fireEvent.click(toggle)
      expect(document.body).toHaveStyle({ overflow: 'scroll' })
      document.body.style.overflow = ''
    })

    test('no scrollbar detected', () => {
      const widthSpy = jest
        .spyOn(document.documentElement, 'clientWidth', 'get')
        // Make it bigger than jest default for innerWidth: 1024
        .mockImplementation(() => 1025)
      render(
        <ScrollLockProvider>
          <ScrollLockComponent />
        </ScrollLockProvider>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)
      // no scrollbar offset
      expect(paddingSpy).not.toHaveBeenCalled()
      widthSpy.mockRestore()
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

  describe('scroll handler', () => {
    test('stops scroll in other elements', () => {
      render(
        <ScrollLockProvider>
          <ScrollLockComponent />
          <div data-testid="scrollable-element" />
        </ScrollLockProvider>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      const scrollDiv = screen.getByTestId('scrollable-element')
      const scrollSpy = jest.spyOn(scrollDiv, 'scrollTop', 'set')
      fireEvent.scroll(scrollDiv)
      expect(scrollSpy.mock.calls).toMatchInlineSnapshot(`
              Array [
                Array [
                  0,
                ],
              ]
          `)
      scrollSpy.mockRestore()
    })

    test('does not stop scroll in scroll lock element', () => {
      render(
        <ScrollLockProvider>
          <ScrollLockComponent />
          <div data-testid="scroll me" />
        </ScrollLockProvider>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      const scrollDiv = screen.getByTestId('scroll-lock-element')
      const scrollSpy = jest.spyOn(scrollDiv, 'scrollTop', 'set')
      fireEvent.scroll(scrollDiv)
      expect(scrollSpy).not.toHaveBeenCalled()
      scrollSpy.mockRestore()
    })

    test('stops scroll on document', () => {
      render(
        <ScrollLockProvider>
          <ScrollLockComponent />
          <div data-testid="scroll me" />
        </ScrollLockProvider>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      const scrollSpy = jest
        .spyOn(window, 'scrollTo')
        .mockImplementation(() => {
          // do nothing, just need an implementation b/c jsdom doesn't have one
        })
      fireEvent.scroll(document)
      expect(scrollSpy.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            Object {
              "top": 0,
            },
          ],
        ]
      `)
      scrollSpy.mockRestore()
    })
  })
})
