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

import React, { useState } from 'react'
import styled from 'styled-components'
import { omitStyledProps, shouldForwardProp } from '@looker/design-tokens'
import { useTranslation } from '../utils'
import type { AvatarProps } from './Avatar'
import { avatarCSS } from './Avatar'

/* eslint-disable camelcase */
export interface AvatarUserProps extends AvatarProps {
  user?: {
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
  }
}

const AvatarLayout = ({
  color,
  user,
  role,
  size,
  ...props
}: AvatarUserProps) => {
  const { t } = useTranslation('AvatarUser')

  const [imgError, setImgError] = useState(false)
  const handleError = () => setImgError(true)

  const firstInitial = user && user.first_name && user.first_name[0]
  const lastInitial = user && user.last_name && user.last_name[0]
  const name = user ? `${user.first_name} ${user.last_name}` : t('Avatar')

  const BaseElement = role === 'button' ? 'button' : 'div'

  return (
    <BaseElement {...omitStyledProps(props)} aria-label={name}>
      <AvatarInitials color={color} aria-hidden>
        {size === 'xxsmall'
          ? `${firstInitial}`
          : `${firstInitial}${lastInitial}`}
      </AvatarInitials>
      {user && user.avatar_url && !imgError && (
        <AvatarPhoto
          aria-hidden
          onError={handleError}
          data-testid="avatar-photo"
          src={user.avatar_url}
        />
      )}
    </BaseElement>
  )
}

const AvatarPhoto = styled.img`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

const AvatarInitials = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<AvatarUserProps>(({ color }) => ({ bg: color }))<AvatarUserProps>`
  color: ${({ theme }) => theme.colors.keyText};
`

export const AvatarUser = styled(AvatarLayout).attrs(
  ({ color = 'key', size = 'small' }) => ({
    color,
    size,
  })
)`
  ${avatarCSS}
  ${({ role }) => role === 'button' && 'cursor: pointer;'}

  background: currentColor;
  position: relative;
`
