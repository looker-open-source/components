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
import { mockBarConfig, mockLineConfig } from '@looker/visualizations'
import { Positioning } from './Positioning'

afterEach(() => {
  jest.resetAllMocks()
})

describe('Positioning', () => {
  const handleConfigChange = jest.fn()

  it('hidden when positioning is unsupported', () => {
    const { container } = renderWithTheme(
      <Positioning
        config={{ type: 'unsupported' as 'line' }}
        onConfigChange={handleConfigChange}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('area positioning: overlay', () => {
    renderWithTheme(
      <Positioning
        config={{ ...mockLineConfig, type: 'area', positioning: 'percent' }}
        onConfigChange={handleConfigChange}
      />
    )

    // open select menu
    fireEvent.click(screen.getByLabelText('Positioning'))

    // choose new option
    fireEvent.click(screen.getByText('overlay'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        type: 'area',
        positioning: 'overlay',
      })
    )
  })

  it('bar positioning: grouped', () => {
    renderWithTheme(
      <Positioning
        config={{ ...mockBarConfig, positioning: 'percent' }}
        onConfigChange={handleConfigChange}
      />
    )

    // open select menu
    fireEvent.click(screen.getByLabelText('Positioning'))

    // choose new option
    fireEvent.click(screen.getByText('grouped'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        type: 'bar',
        positioning: 'grouped',
      })
    )
  })
})
