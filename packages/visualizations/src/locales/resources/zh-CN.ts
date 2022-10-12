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
import merge from 'lodash/merge'
import type { I18nState } from '../../utils'
import { zhCN as visAdapterLocales } from '@looker/visualizations-adapters'
import { zhCN as visTableLocales } from '@looker/visualizations-table'
import { zhCN as visVisxLocales } from '@looker/visualizations-visx'

const resources = {
  Query: {
    'No children passed to Query component': '没有子项传递到查询组件',
    'Query component received both dashboard and query props':
      '查询组件同时收到了仪表板和查询属性',
  },
  QueryError: {
    Error: '错误',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      '当前不支持“日期”类型的度量值',
    'No chart found for type "{{type}}"': '找不到类型为“{{type}}”的图表',
  },
}

export const zhCN: I18nState = {
  locale: 'zh-CN',
  resources: {
    'zh-CN': merge(
      {},
      resources,
      visAdapterLocales.resources['zh-CN'],
      visTableLocales.resources['zh-CN'],
      visVisxLocales.resources['zh-CN']
    ),
  },
}
