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
import { IconNames } from '@looker/icons'
import { color, reset, space, layout } from '@looker/design-tokens'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { AvatarProps } from './AvatarUser'
import { AvatarBase } from './AvatarBase'
import { avatarSize } from './size'

export interface AvatarIconProps extends AvatarProps {
  icon?: IconNames
}

const AvatarLayout: FC<AvatarIconProps> = ({
  color,
  icon = 'User',
  size,
  ...props
}) => {
  const iconSize = () => {
    switch (size) {
      case 'xsmall':
        return 14
      case 'small':
        return 16
      case 'medium':
        return 20
      default:
        return 20
    }
  }

  return (
    <AvatarBase size={size} {...props}>
      <Icon name={icon} size={iconSize()} color={color} />
    </AvatarBase>
  )
}

export const AvatarIcon = styled(AvatarLayout)`
  ${reset}

  ${avatarSize}
  ${color}
  ${layout}
  ${space}
  border: solid 1px currentColor;
`

AvatarIcon.defaultProps = {
  color: 'palette.purple500',
  size: 'large',
}
