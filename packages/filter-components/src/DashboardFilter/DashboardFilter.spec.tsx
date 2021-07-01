/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { renderWithTheme } from '@looker/components-test-utils'
import type { IAPIMethods } from '@looker/sdk-rtl'
import { fireEvent, screen } from '@testing-library/react'
import { DashboardFilter } from './DashboardFilter'

describe('DashboardFilter', () => {
  it('renders label', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <DashboardFilter
        filter={{ name: 'Status', field: {} }}
        onChange={onChangeMock}
      />
    )
    expect(screen.getByText('Status')).toBeVisible()
  })

  it('renders validation message', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <DashboardFilter
        filter={{ name: 'Status', field: {}, required: true }}
        onChange={onChangeMock}
      />
    )
    expect(screen.getByText('Value required')).toBeVisible()
  })

  it('calls onChange', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <DashboardFilter
        filter={{
          name: 'Status',
          field: { suggestions: ['complete', 'pending', 'cancelled'] },
          ui_config: { type: 'button_group' },
        }}
        onChange={onChangeMock}
      />
    )
    const cancelled = screen.getByText('cancelled')
    fireEvent.click(cancelled)
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "cancelled",
        ],
      ]
    `)
  })

  describe('value', () => {
    it('uses default_value', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <DashboardFilter
          filter={{
            name: 'Status',
            field: {},
            default_value: 'complete',
          }}
          onChange={onChangeMock}
        />
      )
      expect(screen.getByRole('option')).toHaveTextContent('complete')
    })

    it('uses expression if available', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <DashboardFilter
          filter={{ name: 'Status', field: {}, default_value: 'complete' }}
          expression="complete,pending"
          onChange={onChangeMock}
        />
      )
      const values = screen.getAllByRole('option')
      expect(values[0]).toHaveTextContent('complete')
      expect(values[1]).toHaveTextContent('pending')
    })
  })

  describe('options', () => {
    it('uses field suggestions if available', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <DashboardFilter
          filter={{
            name: 'Status',
            field: { suggestions: ['complete', 'pending', 'cancelled'] },
            default_value: 'complete',
            ui_config: { type: 'button_group' },
          }}
          expression="complete,pending"
          onChange={onChangeMock}
        />
      )
      const values = screen.getAllByRole('button')

      expect(values[0]).toHaveTextContent('complete')
      expect(values[0]).toHaveAttribute('aria-pressed', 'true')

      expect(values[1]).toHaveTextContent('pending')
      expect(values[1]).toHaveAttribute('aria-pressed', 'true')

      expect(values[2]).toHaveTextContent('cancelled')
      expect(values[2]).toHaveAttribute('aria-pressed', 'false')
    })

    it('uses field enumerations if available', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <DashboardFilter
          filter={{
            name: 'Status',
            field: {
              enumerations: [
                { label: 'complete', value: 'complete' },
                { label: 'pending', value: 'pending' },
                { label: 'cancelled', value: 'cancelled' },
              ],
            },
            default_value: 'complete',
            ui_config: { type: 'button_group' },
          }}
          expression="complete,pending"
          onChange={onChangeMock}
        />
      )
      const values = screen.getAllByRole('button')

      expect(values[0]).toHaveTextContent('complete')
      expect(values[0]).toHaveAttribute('aria-pressed', 'true')

      expect(values[1]).toHaveTextContent('pending')
      expect(values[1]).toHaveAttribute('aria-pressed', 'true')

      expect(values[2]).toHaveTextContent('cancelled')
      expect(values[2]).toHaveAttribute('aria-pressed', 'false')
    })

    it('fetches suggestions', async () => {
      const onChangeMock = jest.fn()
      const sdkMock = ({
        ok: jest.fn((value) => value),
        get: jest.fn(() => ({
          suggestions: ['complete', 'pending', 'cancelled'],
        })),
      } as unknown) as IAPIMethods
      renderWithTheme(
        <DashboardFilter
          filter={{
            name: 'Status',
            field: {
              suggestable: true,
            },
            default_value: 'complete',
            ui_config: { type: 'button_group' },
          }}
          sdk={sdkMock}
          expression="complete,pending"
          onChange={onChangeMock}
        />
      )
      const values = await screen.findAllByRole('button')

      expect(values[0]).toHaveTextContent('complete')
      expect(values[0]).toHaveAttribute('aria-pressed', 'true')

      expect(values[1]).toHaveTextContent('pending')
      expect(values[1]).toHaveAttribute('aria-pressed', 'true')

      expect(values[2]).toHaveTextContent('cancelled')
      expect(values[2]).toHaveAttribute('aria-pressed', 'false')
    })

    it('shows fetch error message', async () => {
      const onChangeMock = jest.fn()
      const sdkMock = ({
        ok: jest.fn((value) => value),
        get: jest.fn(() => {
          throw new Error()
        }),
      } as unknown) as IAPIMethods
      renderWithTheme(
        <DashboardFilter
          filter={{
            name: 'Status',
            field: {
              suggestable: true,
            },
            default_value: 'complete',
            ui_config: { type: 'button_group' },
          }}
          sdk={sdkMock}
          expression="complete,pending"
          onChange={onChangeMock}
        />
      )
      expect(await screen.findByTestId('error-icon')).toBeVisible()
    })
  })
})
