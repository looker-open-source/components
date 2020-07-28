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
import { AvatarCombo, AvatarUser, AvatarIcon } from '@looker/components'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { iconNameList, IconNames } from '@looker/icons'
import { AvatarSizes } from '@looker/components/src/Avatar/Avatar'

const avatarSizes = ['xxsmall', 'xsmall', 'small', 'medium', 'large']

export const AvatarUserExample = () => {
  /* eslint-disable @typescript-eslint/camelcase */
  const user = {
    avatar_url: text('Avatar URL', 'https://www.fillmurray.com/150/150'),
    first_name: text('First name', 'Bill'),
    last_name: text('Last name', 'Murray'),
  }
  /* eslint-enable @typescript-eslint/camelcase */

  const color = text('Color', '')

  const onClick = () => window.alert(`Say hi to ${user.first_name}`)

  return (
    <AvatarUser
      onClick={onClick}
      user={user}
      color={color === '' ? undefined : color}
      size={select('Size', avatarSizes, undefined)}
      role={boolean('Button', true) ? 'button' : undefined}
    />
  )
}

export const AvatarIconExample = () => {
  const color = text('Color', '')

  const onClick = () => window.alert(`It's an icon!`)

  return (
    <AvatarIcon
      onClick={onClick}
      icon={select('Icon', iconNameList, 'User') as IconNames}
      color={color === '' ? undefined : color}
      size={select('Size', avatarSizes, undefined)}
      role={boolean('Button', false) ? 'button' : undefined}
    />
  )
}

export const AvatarComboExample = () => {
  /* eslint-disable @typescript-eslint/camelcase */
  const user = {
    avatar_url: text('Avatar URL', 'https://www.fillmurray.com/150/150'),
    first_name: text('First name', 'Bill'),
    last_name: text('Last name', 'Murray'),
  }
  /* eslint-enable @typescript-eslint/camelcase */

  const color = text('Color', '')

  const onClick = () => window.alert(`Say hi to ${user.first_name}`)

  return (
    <AvatarCombo
      onClick={onClick}
      user={user}
      color={color === '' ? undefined : color}
      size={select('Size', avatarSizes, undefined) as AvatarSizes}
      icon={select('Icon', iconNameList, 'User') as IconNames}
      role={boolean('Button', true) ? 'button' : undefined}
    />
  )
}

export default {
  decorators: [withKnobs],
  title: 'Avatar',
}
