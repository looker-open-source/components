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

import {
  CompatibleHTMLProps,
  omitStyledProps,
  TypographyProps,
} from '@looker/design-tokens'
import isFunction from 'lodash/isFunction'
import isUndefined from 'lodash/isUndefined'
import React, { forwardRef, Ref, useState, useEffect } from 'react'
import styled from 'styled-components'
import { IconButton } from '../Button'
import { SimpleLayoutProps, simpleLayoutCSS } from '../Layout/utils/simple'
import { useReadOnlyWarn } from '../utils'
import { getIntentLabel, Status } from '../Status'

export type MessageBarIntent = 'critical' | 'inform' | 'positive' | 'warn'

export interface MessageBarProps
  extends CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps,
    TypographyProps {
  /**
   * Determins the icon choice and background color
   * @default: 'inform'
   */
  intent?: MessageBarIntent
  /**
   * Render the `X` which allows the MessageBar to be dismissed
   * @default: true
   */
  canDismiss?: boolean
  /**
   * Called after internal `visible` state is updated
   */
  onDismiss?: () => void
  /**
   * Determines whether the MessageBar is rendered or not. Used in conjunction with the onDismiss prop
   * @default: true
   */
  visible?: boolean
  className?: string
}

const MessageBarLayout = forwardRef(
  (
    {
      id,
      children,
      canDismiss = true,
      intent = 'inform',
      onDismiss,
      visible: visibleProp,
      ...props
    }: MessageBarProps,
    ref: Ref<HTMLDivElement>
  ) => {
    useReadOnlyWarn('MessageBar', visibleProp, onDismiss)

    const [visible, setVisible] = useState(
      isUndefined(visibleProp) ? true : visibleProp
    )

    const handleDismiss = () => {
      setVisible(visibleProp || false)
      isFunction(onDismiss) && onDismiss()
    }

    useEffect(() => {
      if (!isUndefined(visibleProp)) {
        setVisible(visibleProp)
      }
    }, [visibleProp])

    const messageBarMarkup = (
      <div
        aria-live="polite"
        ref={ref}
        role="status"
        {...omitStyledProps(props)}
      >
        <Status intent={intent} />
        <MessageBarContent canDismiss={canDismiss}>
          {children}
        </MessageBarContent>
        {canDismiss && (
          <IconButton
            id={id ? `${id}-iconButton` : undefined}
            ml="auto"
            onClick={handleDismiss}
            icon="Close"
            size="small"
            label={`Dismiss ${getIntentLabel(intent)}`}
            aria-hidden
          />
        )}
      </div>
    )

    return visible ? messageBarMarkup : null
  }
)

MessageBarLayout.displayName = 'MessageBarLayout'

export const MessageBar = styled(MessageBarLayout)`
  ${simpleLayoutCSS}

  align-items: center;
  background: ${({ intent, theme: { colors } }) =>
    intent === 'critical' ? colors.criticalAccent : colors.neutralAccent};
  border-radius: ${({ theme: { radii } }) => radii.medium};
  display: flex;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`

const MessageBarContent = styled.div<{ canDismiss: boolean }>`
  flex: 1;
  margin-left: ${({ theme: { space } }) => space.large};
  margin-right: ${({ canDismiss, theme: { space } }) =>
    canDismiss ? space.xxxxlarge : space.none};
`

MessageBar.defaultProps = {
  px: 'medium',
  py: 'small',
  width: '100%',
}
