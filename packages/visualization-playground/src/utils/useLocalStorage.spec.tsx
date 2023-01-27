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
import React, { useEffect } from 'react'
import { render, waitFor } from '@testing-library/react'
import { AppContext } from '../AppContext'
import { useLocalStorage } from './useLocalStorage'

const mockLocalStorage: Record<string, string> = {
  'TEST-DATA-STORE': 'true',
}

const localStorageGetItem = jest
  .fn()
  .mockImplementation((key: string) => Promise.resolve(mockLocalStorage[key]))

const localStorageSetItem = jest
  .fn()
  .mockImplementation((key: string, val: string) => {
    mockLocalStorage[key] = val
  })

afterEach(() => {
  jest.fn()
})

const MockContextWrapper = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <AppContext.Provider value={{ localStorageGetItem, localStorageSetItem }}>
      {children}
    </AppContext.Provider>
  )
}

describe('useLocalStorage', () => {
  it('writes to localstorage', () => {
    const valStateListener = jest.fn()
    const localStorageListener = jest.fn()

    const TestComponent = ({ value }: { value: string }) => {
      const [valState, setValState] = useLocalStorage('VALUE-PROP', value)

      valStateListener(valState)
      localStorageListener(mockLocalStorage)

      useEffect(() => {
        setValState(value)
      }, [value, setValState])

      return null
    }

    // set initial localstorage value
    const { rerender } = render(
      <MockContextWrapper>
        <TestComponent value="hello world" />
      </MockContextWrapper>
    )

    expect(valStateListener).toHaveBeenLastCalledWith('hello world')
    expect(localStorageListener).toHaveBeenLastCalledWith(
      expect.objectContaining({ 'VALUE-PROP': '"hello world"' }) // stored in JSON string format
    )

    // update localstorage value
    rerender(
      <MockContextWrapper>
        <TestComponent value="goodbye world" />
      </MockContextWrapper>
    )

    expect(valStateListener).toHaveBeenLastCalledWith('goodbye world')
    expect(localStorageListener).toHaveBeenLastCalledWith(
      expect.objectContaining({ 'VALUE-PROP': '"goodbye world"' }) // stored in JSON string format
    )
  })

  it('reads from localstorage', async () => {
    const valStateListener = jest.fn()

    const TestComponent = () => {
      // value for `TEST-DATA-STORE` already set before rendering
      const [valState] = useLocalStorage('TEST-DATA-STORE')
      valStateListener(valState)
      return null
    }

    render(
      <MockContextWrapper>
        <TestComponent />
      </MockContextWrapper>
    )

    await waitFor(() => {
      expect(valStateListener).toHaveBeenLastCalledWith(true)
    })
  })
})
