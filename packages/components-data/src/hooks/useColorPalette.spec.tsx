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
import { renderHook } from '@testing-library/react-hooks'
import { DEFAULT_SERIES_COLORS } from '@looker/visualizations-adapters'
import { ContextWrapper, sdkMethodColorCollectionListener } from '../testUtils'
import { useColorPalette } from './useColorPalette'

afterEach(() => {
  jest.resetAllMocks()
})

describe('useColorPalette', () => {
  const wrapper: FC = ({ children }) => (
    <ContextWrapper>{children}</ContextWrapper>
  )

  it('returns DEFAULT_SERIES_COLORS when argument is undefined', () => {
    const { result } = renderHook(() => useColorPalette(), { wrapper })
    expect(result.current.colorPalette).toEqual(DEFAULT_SERIES_COLORS)
    expect(sdkMethodColorCollectionListener).not.toHaveBeenCalled()
  })

  it('returns color palette based on collection_id and paletted_id', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useColorPalette({
          collection_id: '5591d8d1-6b49-4f8e-bafa-b874d82f8eb7',
          palette_id: '18d0c733-1d87-42a9-934f-4ba8ef81d736',
        }),
      { wrapper }
    )

    await waitForNextUpdate()

    expect(result.current.colorPalette).toEqual([
      '#3D52B9',
      '#08B248',
      '#A918B4',
      '#FC2E31',
      '#FC9200',
      '#2B99F7',
      '#C9DC10',
      '#fa2f90',
      '#FCBF00',
      '#24BED5',
      '#149888',
      '#6F38BB',
    ])
    expect(sdkMethodColorCollectionListener).toHaveBeenCalledTimes(1)
  })

  it('returns custom color palette when that is present', async () => {
    const customColors = ['#FFFFFF', '#FF0000', '#00FF00']

    const { result, waitForNextUpdate } = renderHook(
      () =>
        useColorPalette({
          collection_id: '5591d8d1-6b49-4f8e-bafa-b874d82f8eb7',
          custom: {
            colors: customColors,
            id: 'bb90f382-806e-f66a-cce0-35ee8f837186',
            label: 'Custom',
            type: 'discrete',
          },
        }),
      { wrapper }
    )

    await waitForNextUpdate()

    expect(result.current.colorPalette).toEqual(customColors)
    expect(sdkMethodColorCollectionListener).toHaveBeenCalledTimes(1)
  })
})
