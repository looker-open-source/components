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

import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useTranslation } from '../utils'
import { IconButton } from '../Button'
import type { IconButtonProps } from '../Button'

export type AvatarButtonProps = Omit<IconButtonProps, 'icon'> & {
  /**
   * `imageUrl != null`  indicates that `gravatar` feature is enabled on instance but NOT whether or not the user has
   * gravatar actually specified. Gravatar responds with transparent image if the user doesn't have a gravatar specified
   * in which case the underlying `Account` icon is visible.
   */
  imageUrl?: string | null
}

export const AvatarButton = styled(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      { imageUrl, label, size = 'large', ...rest }: AvatarButtonProps,
      forwardedRef: Ref<HTMLButtonElement>
    ) => {
      const { t } = useTranslation('AvatarButton')

      return (
        <IconButton
          label={label}
          aria-label={typeof label === 'string' ? label : ''}
          icon={<AccountCircle />}
          size={size}
          ref={forwardedRef}
          {...rest}
        >
          {imageUrl && (
            <img
              alt={t('Profile Picture')}
              className="default-image"
              src={imageUrl}
            />
          )}
        </IconButton>
      )
    }
  )
)`
  position: relative;

  img {
    border-radius: 50%;
    height: ${({ theme }) => theme.sizes.medium};
    position: absolute;
    width: ${({ theme }) => theme.sizes.medium};
  }
`
