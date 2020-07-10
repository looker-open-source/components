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
import noop from 'lodash/noop'
import isUndefined from 'lodash/isUndefined'
import React, {
  forwardRef,
  Ref,
  useState,
  useEffect,
  ReactElement,
} from 'react'
import styled from 'styled-components'
import { IconButton, ButtonProps, ButtonTransparent } from '../Button'
import { Space } from '../Layout/Space'
import { SimpleLayoutProps, simpleLayoutCSS } from '../Layout/utils/simple'
import { useReadOnlyWarn } from '../utils'
import { getIntentLabel, Status } from '../Status'

export type MessageBarIntent = 'critical' | 'inform' | 'positive' | 'warn'

export type SupportedActionTypes = string | ReactElement<ButtonProps> | boolean

export interface MessageBarProps
  extends CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps,
    TypographyProps {
  /**
   * Determines the icon choice and background color
   * @default: 'inform'
   */
  intent?: MessageBarIntent
  /**
   * Determines whether the MessageBar is rendered or not. Used in conjunction with the onDismiss prop
   * @default: true
   */
  visible?: boolean
  /**
   * The primary dismiss button. Can be replaced with a string label or a custom react element.
   * @default IconButton
   */
  primaryAction?: SupportedActionTypes
  /**
   * Optional secondary action to be rendered alongside `primaryButton`
   */
  secondaryAction?: SupportedActionTypes
  /**
   * Optional callback fires when primaryAction is clicked
   */
  onPrimaryClick?: () => void
  /**
   * Optional callback fires when secondaryAction is clicked
   */
  onSecondaryClick?: () => void
  className?: string
}

interface DefaultDismissButtonProps {
  id?: string
  intent?: MessageBarIntent
  onClick: () => void
}

const NoopComponent = () => <></>

/* eslint-disable react/display-name */

function getPrimaryActionButton(
  primaryAction: SupportedActionTypes
): (props: DefaultDismissButtonProps) => ReactElement {
  switch (typeof primaryAction) {
    case 'string':
      // string label
      return ({ onClick }: DefaultDismissButtonProps) => (
        <ButtonTransparent onClick={onClick}>{primaryAction}</ButtonTransparent>
      )
    case 'object':
      // custom react component
      return () => primaryAction
    default:
      return primaryAction
        ? ({ intent, onClick, id }: DefaultDismissButtonProps) => (
            <IconButton
              id={id ? `${id}-iconButton` : undefined}
              onClick={onClick}
              icon="Close"
              size="small"
              label={`Dismiss ${getIntentLabel(intent)}`}
            />
          )
        : NoopComponent
  }
}

function getSecondaryActionButton(
  secondaryAction?: SupportedActionTypes
): (props: DefaultDismissButtonProps) => ReactElement {
  switch (typeof secondaryAction) {
    case 'string':
      // string label
      return ({ onClick }: DefaultDismissButtonProps) => (
        <ButtonTransparent onClick={onClick} color="neutral">
          {secondaryAction}
        </ButtonTransparent>
      )
    case 'object':
      // custom react component
      return () => secondaryAction
    default:
      return NoopComponent
  }
}

/* eslint-enable react/display-name */

const MessageBarLayout = forwardRef(
  (
    {
      id,
      children,
      intent = 'inform',
      visible: visibleProp,
      onPrimaryClick = noop,
      onSecondaryClick = noop,
      primaryAction = true,
      secondaryAction,
      ...props
    }: MessageBarProps,
    ref: Ref<HTMLDivElement>
  ) => {
    useReadOnlyWarn('MessageBar', visibleProp, onPrimaryClick)

    const [visible, setVisible] = useState(
      isUndefined(visibleProp) ? true : visibleProp
    )

    const handlePrimaryClick = () => {
      setVisible(visibleProp || false)
      onPrimaryClick()
    }

    const handleSecondaryClick = () => {
      setVisible(visibleProp || false)
      onSecondaryClick()
    }

    useEffect(() => {
      if (!isUndefined(visibleProp)) {
        setVisible(visibleProp)
      }
    }, [visibleProp])

    const PrimaryButton = getPrimaryActionButton(primaryAction)
    const SecondaryButton = getSecondaryActionButton(secondaryAction)

    const messageBarMarkup = (
      <div
        aria-live="polite"
        ref={ref}
        role="status"
        {...omitStyledProps(props)}
      >
        <Status intent={intent} />
        <MessageBarContent>{children}</MessageBarContent>
        <Space>
          <SecondaryButton onClick={handleSecondaryClick} />
          <PrimaryButton intent={intent} onClick={handlePrimaryClick} id={id} />
        </Space>
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
  display: grid;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  grid-template-columns: auto 1fr auto;
`

const MessageBarContent = styled.div`
  flex: 1;
  margin-left: ${({ theme: { space } }) => space.large};
`

MessageBar.defaultProps = {
  px: 'medium',
  py: 'small',
  width: '100%',
}
