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

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import pick from 'lodash/pick'
import { useTranslation } from 'react-i18next'
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import {
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../Ripple'
import { mergeClassNames } from '../utils'
import { iconButtonColor } from '../Button/iconButtonColor'
import { buttonSizeMap } from '../Button/size'

export interface AvatarButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'children' | 'type'> {
  color?: string
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
    (props: AvatarButtonProps, forwardedRef: Ref<HTMLButtonElement>) => {
      const { className, imageUrl, style, ...rest } = props
      const { t } = useTranslation('AvatarButton')

      const {
        callbacks,
        className: rippleClassName,
        style: rippleStyle,
      } = useRipple({
        color: 'neutral',
      })

      const rippleHandlers = useRippleHandlers(
        callbacks,
        {
          ...pick({ ...rest }, rippleHandlerKeys),
        },
        rest.disabled
      )

      return (
        <button
          className={mergeClassNames([className, rippleClassName])}
          aria-label={t('Account Menu')}
          ref={forwardedRef}
          {...rest}
          style={{ ...style, ...rippleStyle }}
          {...rippleHandlers}
        >
          <Icon
            size={buttonSizeMap.xsmall}
            title={t('Account Icon')}
            icon={<AccountCircle />}
          />
          {imageUrl && (
            <img
              alt={t('Profile Picture')}
              className="default-image"
              src={imageUrl}
            />
          )}
        </button>
      )
    }
  )
)`
  ${iconButtonColor}
  ${rippleStyle}

  align-items: center;
  background: transparent;
  border: none;
  color: ${({ color, theme }) => color || theme.colors.ui4};
  display: flex;
  height: ${buttonSizeMap.large}px;
  justify-content: center;
  position: relative;
  width: ${buttonSizeMap.large}px;

  img {
    border-radius: 50%;
    height: ${({ theme }) => theme.sizes.medium};
    position: absolute;
    width: ${({ theme }) => theme.sizes.medium};
  }
`
