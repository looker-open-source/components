/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
