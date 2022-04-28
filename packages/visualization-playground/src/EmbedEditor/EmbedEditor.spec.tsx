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
import { screen, fireEvent, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import type { CAll } from '@looker/visualizations'
import { mockSDK } from '@looker/visualizations'
import { DataProvider } from '@looker/components-data'
import { EmbedEditor } from './'

describe('EmbedEditor', () => {
  it('modifies chart type', async () => {
    const handleChange = jest.fn()
    const config: Partial<CAll> = { type: 'bar' }
    renderWithTheme(
      <DataProvider sdk={mockSDK}>
        <EmbedEditor
          onConfigChange={handleChange}
          config={config}
          setHeight={jest.fn()}
          setWidth={jest.fn()}
        />
      </DataProvider>
    )

    // open select menu
    fireEvent.click(screen.getByLabelText('Chart Type'))
    // choose new type from available options
    fireEvent.click(screen.getByText('table').closest('li') as Element)

    await waitFor(() => {
      expect(handleChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ type: 'table' })
      )
    })
  })

  it('modifies stacking property when chart type is area', async () => {
    const handleChange = jest.fn()
    const config: Partial<CAll> = {
      type: 'area',
      positioning: 'overlay',
    }

    renderWithTheme(
      <DataProvider sdk={mockSDK}>
        <EmbedEditor
          onConfigChange={handleChange}
          config={config}
          setHeight={jest.fn()}
          setWidth={jest.fn()}
        />
      </DataProvider>
    )

    // open select menu
    fireEvent.click(screen.getByLabelText('Positioning'))
    // choose new stacking option
    fireEvent.click(screen.getByText('stacked').closest('li') as Element)
    await waitFor(() => {
      expect(handleChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ positioning: 'stacked' })
      )
    })
    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  it('toggles render_null_values when type is sparkline', async () => {
    const handleChange = jest.fn()
    const config: Partial<CAll> = {
      type: 'sparkline',
    }

    renderWithTheme(
      <DataProvider sdk={mockSDK}>
        <EmbedEditor
          onConfigChange={handleChange}
          config={config}
          setHeight={jest.fn()}
          setWidth={jest.fn()}
        />
      </DataProvider>
    )

    // click relevant checkbox
    fireEvent.click(screen.getByLabelText('Render Null Values'))

    await waitFor(() => {
      expect(handleChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ render_null_values: true })
      )
    })
  })

  it('sets value of width field in embed editor', async () => {
    const handleChange = jest.fn()
    const config: Partial<CAll> = { type: 'bar' }
    const mockSetHeight = jest.fn()
    const mockSetWidth = jest.fn()

    renderWithTheme(
      <DataProvider sdk={mockSDK}>
        <EmbedEditor
          onConfigChange={handleChange}
          config={config}
          setHeight={mockSetHeight}
          setWidth={mockSetWidth}
        />
      </DataProvider>
    )

    // set value of width input
    fireEvent.change(screen.getByLabelText('Width'), {
      target: { value: '100' },
    })
    await waitFor(() => {
      expect(mockSetWidth).toHaveBeenCalledWith('100')
    })
  })

  it('sets value of height field in embed editor', async () => {
    const handleChange = jest.fn()
    const config: Partial<CAll> = { type: 'bar' }
    const mockSetHeight = jest.fn()
    const mockSetWidth = jest.fn()

    renderWithTheme(
      <DataProvider sdk={mockSDK}>
        <EmbedEditor
          onConfigChange={handleChange}
          config={config}
          setHeight={mockSetHeight}
          setWidth={mockSetWidth}
        />
      </DataProvider>
    )

    // set value of height input
    fireEvent.change(screen.getByLabelText('Height'), {
      target: { value: '90' },
    })
    await waitFor(() => {
      expect(mockSetHeight).toHaveBeenCalledWith('90')
    })
  })
})
