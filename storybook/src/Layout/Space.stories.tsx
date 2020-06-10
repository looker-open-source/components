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

import { Button, Space, SpaceVertical } from '@looker/components'
import React from 'react'

export const All = () => (
  <SpaceVertical>
    <Basic />
    <Reverse />
    <BasicSpaceVertical />
    <ReverseSpaceVertical />
  </SpaceVertical>
)

export default {
  component: All,
  title: 'Layout/Space',
}

export const Basic = () => (
  <Space>
    <Button>Button A</Button>
    <Button>Button B</Button>
    <Button>Button C</Button>
  </Space>
)

export const Reverse = () => (
  <Space reverse>
    <Button>Button A</Button>
    <Button>Button B</Button>
    <Button>Button C</Button>
  </Space>
)

export const BasicSpaceVertical = () => (
  <SpaceVertical>
    <Button>Button A</Button>
    <Button>Button B</Button>
    <Button>Button C</Button>
  </SpaceVertical>
)

export const ReverseSpaceVertical = () => (
  <SpaceVertical reverse>
    <Button>Button A</Button>
    <Button>Button B</Button>
    <Button>Button C</Button>
  </SpaceVertical>
)
