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
import React, { FC } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'
import { SimpleLayoutProps } from '../Layout/utils/simple'

export type StatusIntent =
  | 'critical'
  | 'inform'
  | 'neutral'
  | 'success'
  | 'warning'

export interface StatusProps
  extends CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps,
    TypographyProps {
  /**
   * @default: 'inform'
   */
  intent?: StatusIntent
}

interface StatusTypeStyling {
  accessibilityLabel?: string
  icon?: JSX.Element
}

const getStatusIntentStyling = (intent: StatusIntent) => {
  const statusTypeStyling: StatusTypeStyling = {}
  const iconProps = {
    mr: 'small',
    size: 20,
    style: { flexBasis: '20px', flexShrink: 0 },
  }

  switch (intent) {
    case 'critical':
      statusTypeStyling.icon = (
        <Icon {...iconProps} name="CircleInfo" color="palette.red500" />
      )
      statusTypeStyling.accessibilityLabel = 'Critical'
      break
    case 'inform':
      statusTypeStyling.icon = (
        <Icon {...iconProps} name="CircleInfo" color="palette.blue500" />
      )
      statusTypeStyling.accessibilityLabel = 'Inform'
      break
    case 'success':
      statusTypeStyling.icon = (
        <Icon {...iconProps} name="CircleCheck" color="palette.green500" />
      )
      statusTypeStyling.accessibilityLabel = 'Success'
      break
    case 'neutral':
      statusTypeStyling.icon = (
        <Icon {...iconProps} name="CircleInfo" color="palette.charcoal400" />
      )
      statusTypeStyling.accessibilityLabel = 'Neutral'
      break

    case 'warning':
      statusTypeStyling.icon = (
        <Icon {...iconProps} name="Warning" color="palette.yellow500" />
      )
      statusTypeStyling.accessibilityLabel = 'Warning'
      break
    default:
      break
  }
  return statusTypeStyling
}

export const Status: FC<StatusProps> = ({ intent = 'neutral' }) => {
  const { icon, accessibilityLabel } = getStatusIntentStyling(intent)
  return (
    <>
      {icon}
      <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
    </>
  )
}

Status.defaultProps = {
  fontSize: 'small',
  intent: 'inform ',
  px: 'small',
  py: 'xsmall',
  width: '100%',
}
Status.displayName = 'Status'
