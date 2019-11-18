/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { assertSnapshotShallow } from '@looker/components-test-utils'
import React from 'react'
import { AvatarIcon } from './AvatarIcon'
import { AvatarUser } from './AvatarUser'

test('AvatarUser has photo with good url ', () => {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url:
      'https://gravatar.lookercdn.com/avatar/e8ebbdf1a644117215036eac62995731?s=156&d=blank',
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: 'Luke',
    id: 61,
    // eslint-disable-next-line @typescript-eslint/camelcase
    last_name: 'Bowerman',
  }

  assertSnapshotShallow(<AvatarUser user={data} />)
})

test('AvatarUser has photo with bed url ', () => {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url:
      'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: 'Luke',
    id: 61,
    // eslint-disable-next-line @typescript-eslint/camelcase
    last_name: 'Bowerman',
  }

  assertSnapshotShallow(<AvatarUser user={data} />)
})

test('AvatarUser has null as photo url ', () => {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url: null,
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: 'Luke',
    id: 61,
    // eslint-disable-next-line @typescript-eslint/camelcase
    last_name: 'Bowerman',
  }

  assertSnapshotShallow(<AvatarUser user={data} />)
})

test('AvatarIcon renders ', () => {
  assertSnapshotShallow(<AvatarIcon />)
})

test('AvatarIcon renders different icon if specified', () => {
  assertSnapshotShallow(<AvatarIcon icon="Trash" />)
})
