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
import { color, reset, space, layout, SpaceProps } from '@looker/design-tokens'
import styled, { css } from 'styled-components'

export interface AvatarProps extends SpaceProps {
  /**
   *  @default `40px`
   **/
  size?: number
  /**
   *  @default `palette.purple500`
   **/
  color?: string

  className?: string
}

interface AvatarUserProps extends AvatarProps {
  user: {
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
  }
}

const AvatarLayout: FC<AvatarUserProps> = ({ color, className, user }) => {
  const initials =
    user.first_name &&
    user.last_name &&
    `${user.first_name.substr(0, 1)}${user.last_name.substr(0, 1)}`

  return (
    <div className={className}>
      <AvatarInitials color={color}>{initials}</AvatarInitials>
      {user.avatar_url && <AvatarPhoto src={user.avatar_url} />}
    </div>
  )
}

const avatarCircle = css`
  border: 1px solid;
  border-color: currentColor;
  border-radius: 100%;
  font-size: small;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  /* fontSize: calc({size} / 2.5) */
`

const AvatarPhoto = styled.img`
  ${avatarCircle}
`

const AvatarInitials = styled.div.attrs((props: AvatarUserProps) => ({
  bg: props.color,
}))`
  ${color}
  ${avatarCircle}
  align-items: center;
  color: ${props => props.theme.colors.palette.white};
  display: flex;
  font-weight: normal;
  justify-content: center;
  position: relative;
`

export const AvatarUser = styled(AvatarLayout)`
  ${reset}
  ${space}
  ${layout}

  display: block;
  position: relative;
`

AvatarUser.defaultProps = {
  color: 'palette.purple500',
  size: 40,
}
