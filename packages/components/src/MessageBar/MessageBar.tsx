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

export type MessageBarIntent = 'warning' | 'info' | 'error' | 'confirmation'

export interface MessageBarProps
  extends CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps,
    TypographyProps {
  /**
   * @default: 'info'
   */
  intent?: MessageBarIntent
  canDismiss?: boolean
  onDismiss?: () => void
}

interface MessageBarTypeStyling {
  bg?: string
  accessibilityLabel?: string
  icon?: JSX.Element
}

const getMessageBarIntentStyling = (intent: MessageBarIntent) => {
  const messageBarTypeStyling: MessageBarTypeStyling = {}
  const iconProps = {
    mr: 'small',
    size: 20,
    style: { flexBasis: '20px', flexShrink: 0 },
  }

  switch (intent) {
    case 'confirmation':
      messageBarTypeStyling.bg = 'palette.charcoal100'
      messageBarTypeStyling.icon = (
        <Icon {...iconProps} name="CircleCheck" color="palette.green500" />
      )
      break
    case 'error':
      messageBarTypeStyling.bg = 'palette.red100'
      messageBarTypeStyling.icon = (
        <Icon {...iconProps} name="Warning" color="palette.red500" />
      )
      messageBarTypeStyling.accessibilityLabel = 'Error'
      break
    case 'info':
      messageBarTypeStyling.bg = 'palette.charcoal100'
      messageBarTypeStyling.icon = (
        <Icon {...iconProps} name="CircleInfo" color="palette.blue500" />
      )
      messageBarTypeStyling.accessibilityLabel = 'Info'
      break
    case 'warning':
      messageBarTypeStyling.bg = 'palette.charcoal100'
      messageBarTypeStyling.icon = (
        <Icon {...iconProps} name="Warning" color="palette.yellow500" />
      )
      messageBarTypeStyling.accessibilityLabel = 'Warning'
      break
    default:
      break
  }
  return messageBarTypeStyling
}

export const MessageBar = forwardRef(
  (props: MessageBarProps, ref: Ref<HTMLDivElement>) => {
    const {
      id,
      children,
      canDismiss,
      intent = 'info',
      onDismiss,
      ...typeAndSpaceProps
    } = props
    const {
      icon,
      accessibilityLabel,
      ...messageBarIntentStyling
    } = getMessageBarIntentStyling(intent)

    return (
      <Flex
        alignItems="center"
        aria-live="polite"
        borderRadius="medium"
        ref={ref}
        role="status"
        {...messageBarIntentStyling}
        {...typeAndSpaceProps}
      >
        {icon}
        <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
        <Box flex="auto">{children}</Box>
        {canDismiss && (
          <IconButton
            id={id ? `${id}-iconButton` : undefined}
            ml="auto"
            onClick={onDismiss}
            hoverStyle={{ background: 'none', border: 'none' }}
            icon="Close"
            size="small"
            label={`Dismiss ${intent}`}
            aria-hidden
          />
        )}
      </Flex>
    )
  }
)

MessageBar.defaultProps = {
  fontSize: 'small',
  intent: 'info',
  px: 'small',
  py: 'xsmall',
  width: '100%',
}
MessageBar.displayName = 'MessageBar'
