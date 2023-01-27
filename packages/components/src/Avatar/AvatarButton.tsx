/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
