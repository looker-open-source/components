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
import { mockTableConfig } from '@looker/visualizations'
import { TruncateText } from './TruncateText'

afterEach(() => {
  jest.resetAllMocks()
})

describe('TruncateText', () => {
  const handleConfigChange = jest.fn()

  it('hidden when truncate_text is unsupported', () => {
    const { container } = renderWithTheme(
      <TruncateText
        config={{ type: 'unsupported' as 'table' }}
        onConfigChange={handleConfigChange}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('toggles truncate_text', () => {
    renderWithTheme(
      <TruncateText
        config={{ ...mockTableConfig, truncate_text: true }}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.click(screen.getByLabelText('Truncate text'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        truncate_text: false,
      })
    )
  })
})
