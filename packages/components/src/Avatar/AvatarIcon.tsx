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
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Icon } from '../Icon'
import { avatarCSS, AvatarProps } from './Avatar'

export interface AvatarIconProps extends AvatarProps {
  /**
   * @default User
   */
  icon?: IconNames

  /**
   * @default 'palette.purple300'
   */
  color?: string

  /**
   * @default 'palette.white'
   */
  bg?: string
}

/* eslint-disable sort-keys */
const size = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      height: '16px',
      width: '16px',
    },
    xsmall: {
      height: '20px',
      width: '20px',
    },
    small: {
      height: '20px',
      width: '20px',
    },
    medium: {
      height: '30px',
      width: '30px',
    },
    large: {
      height: '36px',
      width: '36px',
    },
  },
})

const AvatarLayout: FC<AvatarIconProps> = ({
  className,
  color,
  icon = 'User',
}) => (
  <div className={className}>
    <Icon name={icon} color={color} />
  </div>
)

export const AvatarIcon = styled(AvatarLayout)`
  ${avatarCSS}
  border: solid 1px currentColor;

  ${Icon} {
    ${size}
  }
`

AvatarIcon.defaultProps = {
  bg: 'palette.white',
  color: 'palette.purple300',
  size: 'small',
}
