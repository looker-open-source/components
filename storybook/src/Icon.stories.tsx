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
import { Icon, Space, SpaceVertical } from '@looker/components'

export default {
  title: 'Icons',
}

export const Icons = () => (
  <SpaceVertical>
    <Space>
      <Icon name="Trash" size="xxsmall" />
      <Icon name="Trash" size="xsmall" />
      <Icon name="Trash" size="small" />
      <Icon name="Trash" size="medium" />
      <Icon name="Trash" size="large" />
      <Icon name="Trash" />
    </Space>

    <Space>
      <Icon name="Trash" width="3rem" size="xxsmall" />
      <Icon name="Trash" width="3rem" size="xsmall" />
      <Icon name="Trash" width="3rem" size="small" />
      <Icon name="Trash" width="3rem" size="medium" />
      <Icon name="Trash" width="3rem" size="large" />
      <Icon name="Trash" width="3rem" />
    </Space>

    <Space>
      <Icon name="Trash" height="3rem" size="xxsmall" />
      <Icon name="Trash" height="3rem" size="xsmall" />
      <Icon name="Trash" height="3rem" size="small" />
      <Icon name="Trash" height="3rem" size="medium" />
      <Icon name="Trash" height="3rem" size="large" />
      <Icon name="Trash" height="3rem" />
    </Space>
  </SpaceVertical>
)
