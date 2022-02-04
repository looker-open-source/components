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

import type { FilterProps } from '../../Filter/types/filter_props'
import { getLabel } from './get_label'
import { i18nInit } from '../../utils'

describe('getLabel', () => {
  i18nInit()
  const defaultFilterProps = {
    config: {},
    name: 'name',
    enumerations: [{ value: 'value', label: 'label' }],
    expression: 'value',
    field: { parameter: false },
    expressionType: 'tier' as const,
  }
  const getFilter = (propsOverride: Partial<FilterProps> = {}) => {
    return { ...defaultFilterProps, ...propsOverride }
  }

  describe('when filter is not a parameter', () => {
    it('should return the value', () => {
      expect(getLabel(getFilter())).toBe('is value')
    })

    describe('and fieldOptions is unavailable', () => {
      it('should return the value', () => {
        const filter = { ...getFilter(), fieldOptions: null }
        expect(getLabel(filter)).toBe('is value')
      })
    })
  })

  describe('when filter is a parameter', () => {
    describe('and label is available', () => {
      it('should return the label', () => {
        const filterState = getFilter()
        const filter = {
          ...filterState,
          field: {
            parameter: true,
            has_allowed_values: true,
            enumerations: defaultFilterProps.enumerations,
          },
        }
        expect(getLabel(filter)).toBe('is label')
      })
    })

    describe('and label is not available', () => {
      describe('and value is not in the enumerations', () => {
        describe('and value is defined', () => {
          it('should return the filter value', () => {
            const filter = {
              ...getFilter(),
              expressionType: 'date' as const,
              field: { parameter: true },
              label: undefined,
              expression: '2020/09/21',
            }
            expect(getLabel(filter)).toBe('is on 2020/09/21')
          })
        })

        describe('and value is not available', () => {
          it('should return `is any value``', () => {
            const filter = getFilter({
              field: { parameter: true },
              expression: undefined,
            })
            expect(getLabel(filter)).toBe('is any value')
          })
        })
      })

      describe('and value is not in the enumerations and enumerations is null', () => {
        it('should return `is any value``', () => {
          const filter = getFilter({
            field: { parameter: true },
            enumerations: null,
            expression: undefined,
          })
          expect(getLabel(filter)).toBe('is any value')
        })
      })

      describe('and value is in the enumerations', () => {
        it('should return `is any value``', () => {
          const enumerations = [
            {
              label: 'lab',
              value: 'val',
            },
            {
              label: 'label from enum',
              value: 'value',
            },
          ]
          const filter = getFilter({
            field: {
              parameter: true,
              has_allowed_values: true,
              enumerations,
            },
            enumerations,
          })
          expect(getLabel(filter)).toBe('is label from enum')
        })
      })
    })
  })
})
