/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { TFunction } from 'i18next'
import { StyledIcon } from '@styled-icons/styled-icon'
import { CheckCircle, Error, Info, Warning } from '@styled-icons/material'
import { color, size } from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { IconProps } from '../Icon'

export type StatusIntent =
  | 'critical'
  | 'inform'
  | 'neutral'
  | 'positive'
  | 'warn'

export interface StatusProps extends Omit<IconProps, 'color' | 'icon'> {
  /**
   * @default neutral
   */
  intent?: StatusIntent
}

const getIntentIcon = (intent?: StatusIntent): StyledIcon => {
  switch (intent) {
    case 'critical':
      return Error
    case 'positive':
      return CheckCircle
    case 'warn':
      return Warning
    case 'neutral':
    case 'inform':
    default:
      return Info
  }
}

export const getIntentLabel = (t: TFunction, intent?: StatusIntent) => {
  switch (intent) {
    case 'critical':
      return t('Error', { ns: 'GetIntentLabel' })
    case 'inform':
      return t('Inform', { ns: 'GetIntentLabel' })
    case 'positive':
      return t('Success', { ns: 'GetIntentLabel' })
    case 'warn':
      return t('Warning', { ns: 'GetIntentLabel' })
    case 'neutral':
    default:
      return undefined
  }
}

const defaultIntent = 'neutral'

const StatusLayout = forwardRef(
  (
    { className, intent = defaultIntent, ...props }: StatusProps,
    ref: Ref<SVGSVGElement>
  ) => {
    const { t } = useTranslation('Status')
    const Component = getIntentIcon(intent)

    return (
      <Component
        // {...props}
        className={className}
        ref={ref}
        /* Don't specify title if Status is wrapped in tooltip */
        title={
          !props['aria-describedby'] ? getIntentLabel(t, intent) : undefined
        }
      />
    )
  }
)

StatusLayout.displayName = 'StatusLayout'

export const Status = styled(StatusLayout).attrs<StatusProps>(
  ({ intent = defaultIntent, size = 'medium' }) => ({
    color: intent,
    size,
  })
)<StatusProps>`
  ${color}
  ${size}
  flex-shrink: 0;
`
