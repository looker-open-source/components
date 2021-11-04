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

import { render } from '@testing-library/react'
import React, { useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { useResize, SafeSSRProvider } from './'

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

beforeEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      bottom: 0,
      height: 30,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 360,
      x: 0,
      y: 0,
    }
  })
})

afterEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
})

const ResizeComponent = ({ callback }: { callback: () => void }) => {
  const [element, ref] = useState<HTMLDivElement | null>(null)
  useResize(element, callback)
  return <div ref={ref} />
}

describe('useResize', () => {
  test('calls the callback', () => {
    const callback = jest.fn()
    render(<ResizeComponent callback={callback} />)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  test('No useLayoutEffect warning with SSR', () => {
    // Throw an error on console.error so the test would fail
    // with the React useLayoutEffect error
    const globalConsole = global.console
    global.console = {
      ...globalConsole,
      error: (message: string) => {
        throw new Error(message)
      },
    }

    const callback = jest.fn()
    // eslint-disable-next-line testing-library/render-result-naming-convention
    ReactDOMServer.renderToString(
      <SafeSSRProvider>
        <ResizeComponent callback={callback} />
      </SafeSSRProvider>
    )
    // useEffect also doesn't run, but it doesn't warn
    expect(callback).not.toHaveBeenCalled()

    global.console = globalConsole
  })
})
