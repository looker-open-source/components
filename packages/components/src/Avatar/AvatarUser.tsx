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
import { palette } from '@looker/design-tokens'
import { Box } from '../Layout'

export interface AvatarProps {
  /**
   *  @default `2rem`
   **/
  size?: number
  /**
   *  @default `palette.purple500`
   **/
  color?: string
}

interface AvatarUserProps extends AvatarProps {
  user: {
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
  }
}

export const AvatarUser: FC<AvatarUserProps> = ({
  size = '2rem',
  color = 'palette.purple500',
  user,
  ...props
}) => {
  const initials =
    user.first_name &&
    user.last_name &&
    `${user.first_name.substr(0, 1)}${user.last_name.substr(0, 1)}`

  const avatarStyleSpecs = {
    // border: '1px solid #4F2ABA',
    borderRadius: '100%',
    height: '100%',
    left: 0,
    style: { fontSize: `calc({size} / 2.5)` },
    top: 0,
    width: '100%',
  }

  return (
    <Box
      display="block"
      height={size}
      width={size}
      position="relative"
      {...props}
    >
      <Box
        alignItems="center"
        bg={color}
        display="flex"
        color={palette.white}
        position="absolute"
        fontWeight="normal"
        justifyContent="center"
        {...avatarStyleSpecs}
      >
        {initials}
      </Box>
      {user.avatar_url && (
        <Box
          is="img"
          position="absolute"
          {...avatarStyleSpecs}
          src={user.avatar_url}
        />
      )}
    </Box>
  )
}
