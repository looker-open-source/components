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
import type { CPie } from '@looker/visualizations-adapters'
import { renderHook, cleanup } from '@testing-library/react-hooks'
import { ComponentsProvider } from '@looker/components-providers'
import { useLabelWidth, MIN_LABEL_SPACE } from './useLabelWidth'

const wrapper: FC = ({ children }) => (
  <ComponentsProvider>{children}</ComponentsProvider>
)

describe('useLabelWidth', () => {
  test('calculates the width of the longest label in a set', async () => {
    const data = { albany: 20, albuquerque: 20 }
    const legend: CPie['legend'] = { type: 'legend', value: 'label_percent' }

    const { result, unmount } = renderHook(
      () => useLabelWidth(40, data, legend),
      {
        wrapper,
      }
    )

    // the min label size will be returned as no real dom measurements will
    // take place in the jest virtual dom
    expect(result.current).toEqual(MIN_LABEL_SPACE)

    // silence act(...) warning
    unmount()
    await cleanup()
  })
})
