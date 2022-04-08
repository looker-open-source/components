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

import { seriesValueFormat } from './seriesValueFormat'
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import type { CSeriesBasic } from '../types'
describe('seriesValueFormat', () => {
  describe('Series as array', () => {
    const series: CSeriesBasic[] = [
      { color: '#FA8072', label: 'Total Orders' },
      { color: '#70BEFB', label: 'Average Order Price' },
    ]
    test(`Fills in default values when series value_format is not specified`, () => {
      const transformedConfig = seriesValueFormat({
        config: { ...mockBarConfig, series },
        fields: {
          ...mockFields,
          measures: [
            { ...mockFields.measures[0], value_format: null },
            { ...mockFields.measures[1], value_format: null },
          ],
        },
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual([
        {
          color: '#FA8072',
          label: 'Total Orders',
          value_format: '0,0.[00]',
        },
        {
          color: '#70BEFB',
          label: 'Average Order Price',
          value_format: '0,0.[00]',
        },
      ])
    })
    test(`Populates value from fields then config.label_value_format`, () => {
      const transformedConfig = seriesValueFormat({
        config: { ...mockBarConfig, series, label_value_format: '#,##0' },
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual([
        {
          color: '#FA8072',
          label: 'Total Orders',
          value_format: '#,##0',
        },
        {
          color: '#70BEFB',
          label: 'Average Order Price',
          value_format: '$#,##0.00',
        },
      ])
    })
    test(`Populates value from fields then config.value_format`, () => {
      const transformedConfig = seriesValueFormat({
        config: { ...mockBarConfig, series, value_format: '#,##0' },
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual([
        {
          color: '#FA8072',
          label: 'Total Orders',
          value_format: '#,##0',
        },
        {
          color: '#70BEFB',
          label: 'Average Order Price',
          value_format: '$#,##0.00',
        },
      ])
    })
    test(`Preserves user defined config overrides`, () => {
      // override default series array above
      const seriesCopy: CSeriesBasic[] = [
        { ...series[0], value_format: '$#,##0.00' },
        { ...series[1], value_format: '$#,##0.00' },
      ]
      const transformedConfig = seriesValueFormat({
        config: { ...mockBarConfig, series: seriesCopy, value_format: '#,##0' },
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual([
        {
          color: '#FA8072',
          label: 'Total Orders',
          value_format: '$#,##0.00',
        },
        {
          color: '#70BEFB',
          label: 'Average Order Price',
          value_format: '$#,##0.00',
        },
      ])
    })
    test(`Populates value from config.series_value_format`, () => {
      const transformedConfig = seriesValueFormat({
        config: {
          ...mockBarConfig,
          series,
          series_value_format: {
            'orders.count': { format_string: '1' },
            'orders.average_total_amount_of_order_usd': { format_string: '1' },
          },
        },
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual([
        {
          color: '#FA8072',
          label: 'Total Orders',
          value_format: '1',
        },
        {
          color: '#70BEFB',
          label: 'Average Order Price',
          value_format: '1',
        },
      ])
    })
  })

  describe('Series as object', () => {
    const series: { [k: string]: CSeriesBasic } = {
      'orders.count': { color: '#FA8072', label: 'Total Orders' },
      'orders.average_total_amount_of_order_usd': {
        color: '#70BEFA',
        label: 'Average Order Price',
      },
    }
    test(`Fills in default values when series value_format is not specified`, () => {
      const transformedConfig = seriesValueFormat({
        config: { ...mockBarConfig, series },
        fields: {
          ...mockFields,
          measures: [
            { ...mockFields.measures[0], value_format: null },
            { ...mockFields.measures[1], value_format: null },
          ],
        },
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual({
        'orders.count': {
          ...series['orders.count'],
          value_format: '0,0.[00]', // null in mock fields
        },
        'orders.average_total_amount_of_order_usd': {
          ...series['orders.average_total_amount_of_order_usd'],
          value_format: '0,0.[00]',
        },
      })
    })
    test(`Populates value from fields then config.label_value_format`, () => {
      const transformedConfig = seriesValueFormat({
        config: { ...mockBarConfig, series, label_value_format: '#,##0' },
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual({
        'orders.count': {
          ...series['orders.count'],
          value_format: '#,##0',
        },
        'orders.average_total_amount_of_order_usd': {
          ...series['orders.average_total_amount_of_order_usd'],
          value_format: '$#,##0.00',
        },
      })
    })
    test(`Populates value from fields then config.value_format`, () => {
      const transformedConfig = seriesValueFormat({
        config: { ...mockBarConfig, series, value_format: '#,##0' },
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual({
        'orders.count': {
          ...series['orders.count'],
          value_format: '#,##0',
        },
        'orders.average_total_amount_of_order_usd': {
          ...series['orders.average_total_amount_of_order_usd'],
          value_format: '$#,##0.00',
        },
      })
    })
    test(`Preserves user defined config overrides`, () => {
      const seriesCopy: typeof series = {
        'orders.count': {
          ...series['orders.count'],
          value_format: '$#,##0.00',
        },
        'orders.average_total_amount_of_order_usd': {
          ...series['orders.average_total_amount_of_order_usd'],
          value_format: '$#,##0.00',
        },
      }
      const transformedConfig = seriesValueFormat({
        config: { ...mockBarConfig, series: seriesCopy, value_format: '#,##0' },
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual(seriesCopy)
    })
    test(`Populates value from config.series_value_format`, () => {
      const transformedConfig = seriesValueFormat({
        config: {
          ...mockBarConfig,
          series,
          series_value_format: {
            'orders.count': { format_string: '1' },
            'orders.average_total_amount_of_order_usd': { format_string: '1' },
          },
        },
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.config.series).toEqual({
        'orders.count': {
          ...series['orders.count'],
          value_format: '1',
        },
        'orders.average_total_amount_of_order_usd': {
          ...series['orders.average_total_amount_of_order_usd'],
          value_format: '1',
        },
      })
    })
  })
})
