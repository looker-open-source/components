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
import { mockLineConfig } from '@looker/visualizations'
import { XAxis } from './XAxis'

afterEach(() => {
  jest.resetAllMocks()
})

describe('XAxis', () => {
  const handleConfigChange = jest.fn()

  it('renders x-axis toggle when there are multiple config objects', () => {
    renderWithTheme(
      <XAxis
        config={{
          ...mockLineConfig,
          x_axis: [{ reversed: false }, { reversed: true }],
        }}
        onConfigChange={handleConfigChange}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument() // button group value
    expect(screen.getByText('2')).toBeInTheDocument() // button group value
  })

  it('hidden when x-axis is unsupported', () => {
    const { container } = renderWithTheme(
      <XAxis
        config={{ type: 'unsupported' as 'line' }}
        onConfigChange={handleConfigChange}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('toggles XAxis reversed', () => {
    renderWithTheme(
      <XAxis
        config={{ ...mockLineConfig, x_axis: [{ reversed: false }] }}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.click(screen.getByLabelText('Reverse'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        x_axis: [{ reversed: true }],
      })
    )
  })

  it('toggles XAxis gridlines', () => {
    renderWithTheme(
      <XAxis
        config={{ ...mockLineConfig, x_axis: [{ gridlines: false }] }}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.click(screen.getByLabelText('Render Gridlines'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        x_axis: [{ gridlines: true }],
      })
    )
  })

  it('updates XAxis label value', () => {
    renderWithTheme(
      <XAxis
        config={{ ...mockLineConfig, x_axis: [{ label: false }] }}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: 'New Label' },
    })

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        x_axis: [{ label: 'New Label' }],
      })
    )
  })

  it('sets XAxis label to false when text input is empty', () => {
    renderWithTheme(
      <XAxis
        config={{ ...mockLineConfig, x_axis: [{ label: 'Default Label' }] }}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: '' },
    })

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        x_axis: [{ label: false }],
      })
    )
  })

  it('toggles XAxis values', () => {
    renderWithTheme(
      <XAxis
        config={{ ...mockLineConfig, x_axis: [{ values: false }] }}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.click(screen.getByLabelText('Show Values'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        x_axis: [{ values: true }],
      })
    )
  })
})
