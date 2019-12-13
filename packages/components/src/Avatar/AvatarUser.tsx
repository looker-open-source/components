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

import React, { FC } from 'react'
import styled from 'styled-components'
import { avatarCSS, AvatarProps } from './Avatar'

export interface AvatarUserProps extends AvatarProps {
  user?: {
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
  }
}

const AvatarLayout: FC<AvatarUserProps> = ({
  color,
  className,
  user,
  size,
}) => {
  const firstInitial = user && user.first_name && user.first_name[0]
  const lastInitial = user && user.last_name && user.last_name[0]

  return (
    <div className={className}>
      <AvatarInitials color={color}>
        {size === 'xxsmall'
          ? `${firstInitial}`
          : `${firstInitial}${lastInitial}`}
      </AvatarInitials>
      {user && user.avatar_url && (
        <AvatarPhoto color={color} src={user.avatar_url} />
      )}
    </div>
  )
}

const AvatarPhoto = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const AvatarInitials = styled.div.attrs((props: AvatarUserProps) => ({
  bg: props.color,
}))`
  color: ${props => props.theme.colors.palette.white};
`

export const AvatarUser = styled(AvatarLayout).attrs(props => ({
  size: props.size || 'small',
}))`
  ${avatarCSS}

  background: currentColor;
  position: relative;
`

AvatarUser.defaultProps = {
  color: 'palette.purple400',
  size: 'small',
}
