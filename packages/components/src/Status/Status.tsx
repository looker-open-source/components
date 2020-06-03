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
import { Icon, IconNames, IconSize } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'
import { SimpleLayoutProps } from '../Layout/utils/simple'

export type StatusIntent =
  | 'critical'
  | 'inform'
  | 'neutral'
  | 'positive'
  | 'warn'

export interface StatusProps
  extends CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps,
    TypographyProps {
  /**
   * @default: 'neutral'
   */
  intent?: StatusIntent
  size?: IconSize
}

const getIntentIcon = (intent?: StatusIntent): IconNames => {
  switch (intent) {
    case 'critical':
      return 'Error'
    case 'positive':
      return 'CircleCheck'
    case 'warn':
      return 'Warning'
    case 'neutral':
    case 'inform':
    default:
      return 'CircleInfo'
  }
}

export const getIntentLabel = (intent?: StatusIntent) => {
  switch (intent) {
    case 'critical':
      return 'Error'
    case 'inform':
      return 'Inform'
    case 'positive':
      return 'Success'
    case 'warn':
      return 'Warning'
    case 'neutral':
    default:
      return undefined
  }
}

export const Status = forwardRef(
  ({ className, intent, size }: StatusProps, ref: Ref<HTMLInputElement>) => (
    <>
      <Icon
        className={className}
        ref={ref}
        color={intent}
        name={getIntentIcon(intent)}
        size={size}
      />
      <VisuallyHidden>{getIntentLabel(intent)}</VisuallyHidden>
    </>
  )
)

Status.displayName = 'Status'

Status.defaultProps = { size: 'medium' }
