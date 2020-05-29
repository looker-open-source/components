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

import { CompatibleHTMLProps, TypographyProps } from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import { Icon, IconNames } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'
import { SimpleLayoutProps } from '../Layout/utils/simple'

export type StatusIntent =
  | 'critical'
  | 'inform'
  | 'neutral'
  | 'positive'
  | 'warning'

export interface StatusProps
  extends CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps,
    TypographyProps {
  /**
   * @default: 'neutral'
   */
  intent?: StatusIntent
}

interface StatusTypeStyling {
  accessibilityLabel: string
  color: string
  icon: IconNames
}

const getStatusIntentStyling = (intent: StatusIntent): StatusTypeStyling => {
  switch (intent) {
    case 'critical':
      return {
        accessibilityLabel: 'Critical',
        color: 'critical',
        icon: 'Error',
      }
    case 'inform':
      return {
        accessibilityLabel: 'Inform',
        color: 'inform',
        icon: 'CircleInfo',
      }
    case 'positive':
      return {
        accessibilityLabel: 'Positive',
        color: 'positive',
        icon: 'CircleCheck',
      }
    case 'warning':
      return {
        accessibilityLabel: 'Warning',
        color: 'warn',
        icon: 'Warning',
      }
    case 'neutral':
    default:
      return {
        accessibilityLabel: 'Neutral',
        color: 'neutral',
        icon: 'CircleInfo',
      }
  }
}

export const Status = forwardRef(
  (
    { className, intent = 'neutral' }: StatusProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { accessibilityLabel, color, icon } = getStatusIntentStyling(intent)
    const iconProps = {
      mr: 'small',
      size: 24,
      style: { flexBasis: '24px', flexShrink: 0 },
    }
    return (
      <div className={className} ref={ref}>
        <Icon color={color} name={icon} {...iconProps} />
        <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
      </div>
    )
  }
)

Status.displayName = 'Status'
