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
import { IconButton } from '../Button'
import { Box, Flex } from '../Layout'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'
import { SimpleLayoutProps } from '../Layout/utils/simple'

export type StatusIntent = 'warning' | 'info' | 'error' | 'confirmation'

export interface StatusProps
  extends CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps,
    TypographyProps {
  /**
   * @default: 'info'
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
    case 'confirmation':
      statusTypeStyling.bg = 'palette.charcoal100'
      statusTypeStyling.icon = (
        <Icon {...iconProps} name="CircleCheck" color="palette.green500" />
      )
      break
    case 'error':
      statusTypeStyling.bg = 'palette.red100'
      statusTypeStyling.icon = (
        <Icon {...iconProps} name="Warning" color="palette.red500" />
      )
      statusTypeStyling.accessibilityLabel = 'Error'
      break
    case 'info':
      statusTypeStyling.bg = 'palette.charcoal100'
      statusTypeStyling.icon = (
        <Icon {...iconProps} name="CircleInfo" color="palette.blue500" />
      )
      statusTypeStyling.accessibilityLabel = 'Info'
      break
    case 'warning':
      statusTypeStyling.bg = 'palette.charcoal100'
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

export const Status = forwardRef(
  (props: StatusProps, ref: Ref<HTMLDivElement>) => {
    const {
      id,
      children,
      intent = 'info',
      ...typeAndSpaceProps
    } = props
    const {
      icon,
      accessibilityLabel,
      ...statusIntentStyling
    } = getStatusIntentStyling(intent)

    return (
        {icon}
        <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
    )
  }
)

Status.defaultProps = {
  fontSize: 'small',
  intent: 'info',
  px: 'small',
  py: 'xsmall',
  width: '100%',
}
Status.displayName = 'Status'
