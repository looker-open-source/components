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
import type { FilterModel, TierFilterType } from '@looker/filter-expressions'
import { Category } from '@looker/sdk'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'

import { TierFilter } from './TierFilter'

describe('Tier filter test', () => {
  const enumerations = [
    { value: '1', label: 'a' },
    { value: '2', label: 'b' },
    { value: 'with^_underscore^_03', label: 'With underscore c' },
    { value: 'with^_underscore^_04', label: 'With underscore d' },
  ]
  const defaultProps = {
    enumerations,
    filterType: 'tier' as const,
    onChange: jest.fn(),
    showAdd: false,
    showName: true,
    showRemove: false,
    showOperator: false,
    showMatchesAdvanced: false,
    onAdd: jest.fn(),
    onRemove: jest.fn(),
  }
  it('should render a TierFilter', () => {
    const item = {
      id: '1',
      is: true,
      type: 'match',
      value: [],
    } as FilterModel<TierFilterType>
    renderWithTheme(<TierFilter {...defaultProps} item={item} />)
    const inputs = screen.getAllByRole('textbox')
    expect(inputs[0]).toHaveValue('is')
    expect(inputs[1]).toHaveValue('')
  })

  describe('when the filter is a parameter', () => {
    describe('and there is no value selected', () => {
      it('should not change the item value', () => {
        const item = {
          id: '1',
          type: 'match',
          is: false,
          value: [],
        } as FilterModel
        renderWithTheme(
          <TierFilter
            {...defaultProps}
            item={item}
            field={{ category: Category.parameter }}
          />
        )
        const inputs = screen.getAllByRole('textbox')
        expect(inputs[0]).toHaveValue('!match')
        expect(inputs[1]).toHaveValue('a')
      })
    })

    describe('and there is an existing value selected', () => {
      it('should not change the item value (default value does not have underscores)', () => {
        const item = {
          id: '1',
          type: 'match',
          is: false,
          value: ['2'],
        } as FilterModel
        renderWithTheme(
          <TierFilter
            {...defaultProps}
            item={item}
            field={{ category: Category.parameter, has_allowed_values: true }}
          />
        )
        const inputs = screen.getAllByRole('textbox')
        expect(inputs[0]).toHaveValue('!match')
        expect(inputs[1]).toHaveValue('b')
      })

      it('should not change the item value (default value has underscores)', () => {
        const item = {
          id: '1',
          type: 'match',
          is: true,
          value: ['with_underscore_04'],
        } as FilterModel

        renderWithTheme(
          <TierFilter
            {...defaultProps}
            item={item}
            field={{ category: Category.parameter, has_allowed_values: true }}
          />
        )
        const inputs = screen.getAllByRole('textbox')
        expect(inputs[0]).toHaveValue('is')
        expect(inputs[1]).toHaveValue('With underscore d')
      })
    })

    describe('and there is an invalid value selected', () => {
      it('should change the item value', () => {
        const item = {
          id: '1',
          type: 'match',
          is: false,
          value: ['abc'],
        } as FilterModel
        renderWithTheme(
          <TierFilter
            {...defaultProps}
            item={item}
            field={{ category: Category.parameter, has_allowed_values: true }}
          />
        )
        const inputs = screen.getAllByRole('textbox')
        expect(inputs[0]).toHaveValue('!match')
        expect(inputs[1]).toHaveValue('a')
      })
    })
  })

  describe('and advanced filter control', () => {
    it('should render with Add button', () => {
      const item = {
        id: '1',
        type: 'match',
        is: false,
        value: ['abc'],
      } as FilterModel
      renderWithTheme(
        <TierFilter
          {...defaultProps}
          item={item}
          showAdd={true}
          field={{ category: Category.parameter }}
        />
      )

      expect(screen.getByRole('button')).toHaveTextContent('Add')
    })
  })
})
