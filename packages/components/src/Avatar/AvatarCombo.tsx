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
import { color, layout, reset, space } from '@looker/design-tokens'
import styled from 'styled-components'
import { IconNames } from '@looker/icons'
import { AvatarUser, AvatarUserProps } from './AvatarUser'
import { AvatarIcon, AvatarIconProps } from './AvatarIcon'

export interface AvatarComboProps
  extends Omit<AvatarIconProps & AvatarUserProps, 'size'> {
  badge: IconNames
}

const AvatarIconBadge = styled(AvatarIcon)`
  bottom: -4px;
  right: -4px;
  position: absolute;
`

const AvatarLayout: FC<AvatarComboProps> = ({
  badge,
  color,
  icon,
  user,
  ...props
}) => {
  return (
    <div {...props}>
      {user ? (
        <AvatarUser user={user} color={color} />
      ) : (
        <AvatarIcon color={color} icon={icon} />
      )}
      <AvatarIconBadge size="xsmall" color={color} icon={badge} />
    </div>
  )
}

export const AvatarCombo = styled(AvatarLayout)`
  ${reset}

  ${color}
  ${layout}
  ${space}

  height: 40px;
  position: relative;
  width: 40px;
`

AvatarUser.defaultProps = {
  color: 'palette.purple500',
}
