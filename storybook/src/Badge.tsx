/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { Badge, Space } from '@looker/components'

export default {
  title: 'Badge',
}

export const Sizes = () => (
  <Space around>
    <Badge size="small">Small</Badge>
    <Badge size="medium">Medium</Badge>
    <Badge size="large">Large</Badge>
  </Space>
)

export const Intents = () => (
  <Space around>
    <Badge intent="key">Key</Badge>
    <Badge intent="positive">Positive</Badge>
    <Badge intent="inform">Inform</Badge>
    <Badge intent="neutral">Neutral</Badge>
    <Badge intent="warn">Warn</Badge>
    <Badge intent="critical">Critical</Badge>
  </Space>
)
