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
import type { ILookmlModelExploreField } from '@looker/sdk'
import { Category } from '@looker/sdk'
import { getExpressionTypeFromField } from './get_expression_type'

describe('getExpressionTypeFromField', () => {
  it('should return "tier" if the field has enumerations', () => {
    const mockField = {
      enumerations: [
        {
          label: 'answer',
          value: 42,
        },
      ],
    } as ILookmlModelExploreField
    expect(getExpressionTypeFromField(mockField)).toEqual('tier')
  })

  it('should return "number" if the field is_numeric', () => {
    const mockField = {
      is_numeric: true,
    } as ILookmlModelExploreField
    expect(getExpressionTypeFromField(mockField)).toEqual('number')
  })

  describe('is_timeframe', () => {
    it('should return "date" if the field is_timeframe', () => {
      const mockField = {
        is_timeframe: true,
        type: 'field_type',
      } as ILookmlModelExploreField
      expect(getExpressionTypeFromField(mockField)).toEqual('date')
    })

    it('should return "date_time" if the field is_timeframe, type is date_time', () => {
      const mockField = {
        is_timeframe: true,
        type: 'date_time',
      } as ILookmlModelExploreField
      expect(getExpressionTypeFromField(mockField)).toEqual('date_time')
    })

    it('should return "date_time" if the field is_timeframe, type is date_hour', () => {
      const mockField = {
        is_timeframe: true,
        type: 'date_hour',
      } as ILookmlModelExploreField
      expect(getExpressionTypeFromField(mockField)).toEqual('date_time')
    })
  })

  it('should return "location" if the field is a "location" or "location_bin_level" type', () => {
    const mockField1 = {
      type: 'location',
    } as ILookmlModelExploreField
    const mockField2 = {
      type: 'location_bin_level',
    } as ILookmlModelExploreField
    expect(getExpressionTypeFromField(mockField1)).toEqual('location')
    expect(getExpressionTypeFromField(mockField2)).toEqual('location')
  })

  it('should return "string" by default', () => {
    const mockField = {} as ILookmlModelExploreField
    expect(getExpressionTypeFromField(mockField)).toEqual('string')
  })

  it('should return number for number parameter (b/187940941, b/199507872)', () => {
    const mockField = {
      category: Category.parameter,
      type: 'number',
    } as ILookmlModelExploreField
    expect(getExpressionTypeFromField(mockField)).toEqual('number')
  })
})
