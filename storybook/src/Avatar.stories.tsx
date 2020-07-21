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
import { AvatarUser, Space } from '@looker/components'

export default {
  title: 'Avatar',
}

/* eslint-disable @typescript-eslint/camelcase */
const user = {
  avatar_url: 'https://www.fillmurray.com/150/150',
  first_name: 'Bill',
  last_name: 'Murray',
}

export const Sizes = () => (
  <Space around>
    <AvatarUser user={user} size="xxsmall" />
    <AvatarUser user={user} size="xsmall" />
    <AvatarUser user={user} />
    <AvatarUser user={user} size="medium" />
    <AvatarUser user={user} size="large" />
  </Space>
)
