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

import { setQueryProps } from './VisualizationPlayground'

describe('Utility: setQueryProps', () => {
  it('sets dashboard prop when fetchBy = "dashboard" and tabId = "live"', () => {
    const queryProps = setQueryProps({
      fetchBy: 'dashboard',
      tabId: 'live',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58,
    })

    expect(queryProps).toEqual({ dashboard: 58 })
  })

  it('sets query prop when fetchBy = "query" and tabId = "live"', () => {
    const queryProps = setQueryProps({
      fetchBy: 'query',
      tabId: 'live',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58,
    })

    expect(queryProps).toEqual({ query: 'qZ3N24' })
  })

  it('returns mock query id value when tabId = "mock"', () => {
    const queryProps = setQueryProps({
      fetchBy: 'dashboard',
      tabId: 'mock',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58,
    })

    expect(queryProps).toEqual({ query: 'mock-query-slug' })
  })
})
