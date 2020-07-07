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
import { Card, Space, IconButton, Tooltip, Text } from '@looker/components'

export const All = () => (
  <>
    <Space mb="large">
      <Basic />
      <Placement />
      <RenderProp />
    </Space>
    <LargeTrigger />
  </>
)

export default {
  component: All,
  title: 'Overlays/Tooltip',
}

const Basic = () => (
  <Tooltip content="I'm a little teapot">
    <Text>Some Text</Text>
  </Tooltip>
)
const Placement = () => (
  <Tooltip content="I'm a little teapot" placement="top">
    <Text>Some Text</Text>
  </Tooltip>
)

const RenderProp = () => (
  <Tooltip content="Start editing" placement="right">
    {(tooltipProps) => (
      <IconButton icon="Edit" label="Edit something" {...tooltipProps} />
    )}
  </Tooltip>
)

const LargeTrigger = () => (
  <Tooltip content="See what happens when you scroll" placement="right">
    <Card width={500} height={800} raised p="large">
      Very large trigger
    </Card>
  </Tooltip>
)
