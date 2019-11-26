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
import { AvatarCombo } from './AvatarCombo'
import { AvatarIcon } from './AvatarIcon'
import { AvatarUser } from './AvatarUser'

test('AvatarCombo renders Avatar and its badge', () => {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url:
      'https://media.istockphoto.com/vectors/noisy-glitch-pixelated-seamless-pattern-vector-id1051777344',
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: 'John',
    id: 1,
    // eslint-disable-next-line @typescript-eslint/camelcase
    last_name: 'Smith',
  }
  assertSnapshotShallow(<AvatarCombo badge="Code" user={data} />)
})

test('AvatarCombo renders Avatar initials and badge with Code icon', () => {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url:
      'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: 'John',
    id: 1,
    // eslint-disable-next-line @typescript-eslint/camelcase
    last_name: 'Smith',
  }
  assertSnapshotShallow(
    <AvatarCombo badge="LogoRings" icon="Code" user={data} />
  )
})

test('AvatarCombo renders AvatarIcon and badge if user is not available and updates icon if passed.', () => {
  assertSnapshotShallow(<AvatarCombo icon="Code" badge="LogoRings" />)
})

test('AvatarIcon renders ', () => {
  assertSnapshotShallow(<AvatarIcon />)
})

test('AvatarIcon renders different icon if specified', () => {
  assertSnapshotShallow(<AvatarIcon icon="Code" />)
})

test('AvatarUser shows user profile picture if it has good avatar_url ', () => {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url:
      'https://media.istockphoto.com/vectors/noisy-glitch-pixelated-seamless-pattern-vector-id1051777344',
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: 'John',
    id: 1,
    // eslint-disable-next-line @typescript-eslint/camelcase
    last_name: 'Smith',
  }

  assertSnapshotShallow(<AvatarUser user={data} />)
})

test('AvatarUser shows initials if has broken url as avatar_url', () => {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url:
      'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: 'John',
    id: 2,
    // eslint-disable-next-line @typescript-eslint/camelcase
    last_name: 'Smith',
  }

  assertSnapshotShallow(<AvatarUser user={data} />)
})

test('AvatarUser shows initials if it has null as  avatar_url ', () => {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url: null,
    // eslint-disable-next-line @typescript-eslint/camelcase
    first_name: 'John',
    id: 1,
    // eslint-disable-next-line @typescript-eslint/camelcase
    last_name: 'Smith',
  }

  assertSnapshotShallow(<AvatarUser user={data} />)
})
