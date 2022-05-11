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
import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { mockLineConfig } from '@looker/visualizations-adapters'
import { RenderNullValues } from './RenderNullValues'

afterEach(() => {
  jest.resetAllMocks()
})

describe('RenderNullValues', () => {
  const handleConfigChange = jest.fn()

  it('hidden when render_null_values is unsupported', () => {
    const { container } = renderWithTheme(
      <RenderNullValues
        config={{ type: 'unsupported' as 'line' }}
        onConfigChange={handleConfigChange}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('toggles render_null_values', () => {
    renderWithTheme(
      <RenderNullValues
        config={{ ...mockLineConfig, render_null_values: true }}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.click(screen.getByLabelText('Render Null Values'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        render_null_values: false,
      })
    )
  })
})
