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
import type {
  CScatterSeries,
  CLineSeries,
} from '@looker/visualizations-adapters'
import { mockLineConfig, mockFields } from '@looker/visualizations-adapters'
import { Series } from './Series'

afterEach(() => {
  jest.resetAllMocks()
})

describe('Series', () => {
  const handleConfigChange = jest.fn()

  it('hidden when Series is unsupported', () => {
    const { container } = renderWithTheme(
      <Series
        fields={mockFields}
        config={{ type: 'unsupported' as 'line' }}
        onConfigChange={handleConfigChange}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('renders a Series editor block for every element in the series', () => {
    renderWithTheme(
      <Series
        fields={mockFields}
        config={{
          type: mockLineConfig.type,
          series: mockLineConfig.series as CLineSeries,
        }}
        onConfigChange={handleConfigChange}
      />
    )

    expect(screen.getAllByRole('group')).toHaveLength(
      (Array.isArray(mockLineConfig.series) &&
        mockLineConfig?.series?.length) ||
        0 // fallback to zero just to suppress typescript complaints
    )
  })

  it('updates Series Color', () => {
    renderWithTheme(
      <Series
        config={{
          ...mockLineConfig,
          series: {
            'orders.count': { color: '#ffffff' },
          } as Partial<CLineSeries>,
        }}
        fields={mockFields}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.change(screen.getByDisplayValue('#ffffff'), {
      target: { value: '#000000' },
    })

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        series: { 'orders.count': { color: '#000000' } },
      })
    )

    const { calls } = handleConfigChange.mock
    const draftConfig = calls[calls.length - 1][0]
    expect(draftConfig.series['orders.count'].color).toBe('#000000')

    // silence act(...) warning
    fireEvent.click(document)
  })

  it('updates Series Label', () => {
    renderWithTheme(
      <Series
        config={{
          ...mockLineConfig,
          series: {
            'orders.count': { label: 'Order Count' },
          } as Partial<CLineSeries>,
        }}
        fields={mockFields}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.change(screen.getByDisplayValue('Order Count'), {
      target: { value: '0RD3R C0UN7' },
    })

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        series: { 'orders.count': { label: '0RD3R C0UN7' } },
      })
    )
  })

  it('updates Series Line Width', () => {
    renderWithTheme(
      <Series
        config={{
          ...mockLineConfig,
          series: { 'orders.count': { line_width: 5 } } as Partial<CLineSeries>,
        }}
        fields={mockFields}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.change(screen.getByDisplayValue('5'), {
      target: { value: 15 },
    })

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        series: { 'orders.count': { line_width: 15 } },
      })
    )
  })

  it('updates Series Point Shape', () => {
    renderWithTheme(
      <Series
        config={{
          ...mockLineConfig,
          series: {
            'orders.count': { shape: 'circle' },
          } as Partial<CLineSeries>,
        }}
        fields={mockFields}
        onConfigChange={handleConfigChange}
      />
    )
    // open select menu
    fireEvent.click(screen.getByLabelText('Point Shape'))
    // choose new option
    fireEvent.click(screen.getByText('square'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        series: { 'orders.count': { shape: 'square' } },
      })
    )
  })

  it('updates Series Point Style', () => {
    renderWithTheme(
      <Series
        config={{
          ...mockLineConfig,
          series: { 'orders.count': { style: 'none' } } as Partial<CLineSeries>,
        }}
        fields={mockFields}
        onConfigChange={handleConfigChange}
      />
    )
    // open select menu
    fireEvent.click(screen.getByLabelText('Point Style'))
    // choose new option
    fireEvent.click(screen.getByText('outline'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        series: { 'orders.count': { style: 'outline' } },
      })
    )
  })

  it('updates Series Visibility', () => {
    renderWithTheme(
      <Series
        config={{
          ...mockLineConfig,
          series: {
            'orders.count': { visible: false },
          } as Partial<CLineSeries>,
        }}
        fields={mockFields}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.click(screen.getByLabelText('Visible'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        series: { 'orders.count': { visible: true } },
      })
    )
  })

  it('updates Series Size By', () => {
    renderWithTheme(
      <Series
        config={{
          type: 'scatter',
          series: {
            'orders.count': { size_by: 'none' },
          } as Partial<CScatterSeries>,
        }}
        fields={mockFields}
        onConfigChange={handleConfigChange}
      />
    )

    // open select menu
    fireEvent.click(screen.getByLabelText('Size By'))

    // option[0] is always "none", so option[1] represents the first measure.
    fireEvent.click(screen.getAllByRole('option')[1])

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        series: { 'orders.count': { size_by: mockFields.measures[0].name } },
      })
    )
  })
})
