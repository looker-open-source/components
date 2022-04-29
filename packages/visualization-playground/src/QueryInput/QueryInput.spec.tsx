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
import type { FC } from 'react'
import React from 'react'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import type { ExtensionSDK } from '@looker/extension-sdk'
import type { ExtensionContextData } from '@looker/extension-sdk-react'
import type { Looker40SDK } from '@looker/sdk'
import { ExtensionContext } from '@looker/extension-sdk-react'
import { DataProvider } from '@looker/components-data'
import { mockSDK } from '@looker/visualizations'
import { AppContext } from '../AppContext'
import { QueryInput } from './'

const handleInputChange = jest.fn()
const handleSetFetchBy = jest.fn()

const mockLocalStorage: Record<string, string> = {
  visComponentInputType: '"query"',
  visComponentQueryIdentifier: '"abc123"',
  visComponentDashboardId: '123',
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
  jest.clearAllMocks()
})

const MockContextWrapper: FC = ({ children }) => {
  return (
    <ExtensionContext.Provider
      value={
        ({
          extensionSDK: ({
            openBrowserWindow: jest.fn(),
          } as unknown) as ExtensionSDK,
          core40SDK: mockSDK as Looker40SDK,
        } as unknown) as ExtensionContextData
      }
    >
      <AppContext.Provider value={{ localStorageGetItem, localStorageSetItem }}>
        <DataProvider sdk={mockSDK}>{children}</DataProvider>
      </AppContext.Provider>
    </ExtensionContext.Provider>
  )
}

describe('QueryInput', () => {
  it('allows dashboard id input', async () => {
    renderWithTheme(
      <MockContextWrapper>
        <QueryInput
          onChange={handleInputChange}
          setFetchBy={handleSetFetchBy}
          fetchBy="query"
          dashboardId={5}
          queryId="abc123"
        />
      </MockContextWrapper>
    )

    fireEvent.click(screen.getByText('Dashboard (Numeric ID)'))

    await waitFor(() => {
      expect(handleInputChange).toHaveBeenLastCalledWith({
        type: 'dashboard',
        value: 5,
      })
    })
  })

  it('allows query id input', async () => {
    renderWithTheme(
      <MockContextWrapper>
        <QueryInput
          onChange={handleInputChange}
          setFetchBy={handleSetFetchBy}
          fetchBy="dashboard"
          dashboardId={5}
          queryId="abc123"
        />
      </MockContextWrapper>
    )

    fireEvent.click(screen.getByText('Query (Numeric ID or Slug)'))

    await waitFor(() => {
      expect(handleInputChange).toHaveBeenLastCalledWith({
        type: 'query',
        value: 'abc123',
      })
    })
  })

  it('restores dashboard and query id from localstorage on load', async () => {
    renderWithTheme(
      <MockContextWrapper>
        <QueryInput
          onChange={handleInputChange}
          dashboardId={5}
          queryId="abc123"
          setFetchBy={handleSetFetchBy}
          fetchBy="query"
        />
      </MockContextWrapper>
    )

    await waitFor(() => {
      expect(
        screen.getByDisplayValue(
          JSON.parse(mockLocalStorage.visComponentQueryIdentifier)
        )
      ).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(
        screen.getByDisplayValue(
          JSON.parse(mockLocalStorage.visComponentDashboardId)
        )
      ).toBeInTheDocument()
    })
  })

  it('updates localstorage when you input dashboard or query id', async () => {
    renderWithTheme(
      <MockContextWrapper>
        <QueryInput
          onChange={handleInputChange}
          dashboardId={5}
          queryId="abc123"
          setFetchBy={handleSetFetchBy}
          fetchBy="query"
        />
      </MockContextWrapper>
    )

    const queryIdInput = screen.getByPlaceholderText('CmBbGK2\u2026')

    fireEvent.change(queryIdInput, { target: { value: 'new-query-id' } })

    await waitFor(() => {
      expect(localStorageSetItem).toHaveBeenLastCalledWith(
        'visComponentQueryIdentifier',
        '"new-query-id"'
      )
    })
  })
})
