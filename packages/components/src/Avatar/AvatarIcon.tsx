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

import React, { FC } from 'react'
import { omitStyledProps } from '@looker/design-tokens'
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
   * @default 'keyFocus'
   */
  color?: string

  /**
   * @default 'keyText'
   */
  bg?: string
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
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
  color,
  icon = 'User',
  role,
  ...props
}) => {
  const BaseElement = role === 'button' ? 'button' : 'div'

  return (
    <BaseElement {...omitStyledProps(props)}>
      <Icon name={icon} color={color} />
    </BaseElement>
  )
}

export const AvatarIcon = styled(AvatarLayout)`
  ${avatarCSS}
  border: solid 1px currentColor;

  ${Icon} {
    ${size}
  }
`

AvatarIcon.defaultProps = {
  bg: 'background',
  color: 'keyFocus',
  size: 'small',
}
