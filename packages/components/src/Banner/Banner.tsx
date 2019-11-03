/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import { IconButton } from '../Button'
import { Icon } from '../Icon'
import { Flex } from '../Layout/Flex'
import { VisuallyHidden } from '../VisuallyHidden'

export type BannerIntent = 'warning' | 'info' | 'error' | 'confirmation'

export interface BannerProps
  extends CompatibleHTMLProps<HTMLElement>,
    SpaceProps,
    TypographyProps {
  /**
   * @default: 'info'
   */
  intent?: BannerIntent
  dismissable?: boolean
  onDismiss?: () => void
}

interface BannerTypeStyling {
  bg?: string
  accessibilityLabel?: string
  icon?: JSX.Element
}

const getBannerIntentStyling = (intent: BannerIntent) => {
  const bannerTypeStyling: BannerTypeStyling = {}
  switch (intent) {
    case 'warning':
      bannerTypeStyling.bg = 'palette.yellow100'
      bannerTypeStyling.icon = (
        <Icon mr="small" size={20} name="Warning" color="palette.yellow500" />
      )
      bannerTypeStyling.accessibilityLabel = 'Warning'
      break
    case 'info':
      bannerTypeStyling.bg = 'palette.blue100'
      bannerTypeStyling.icon = (
        <Icon mr="small" size={20} name="CircleInfo" color="palette.blue400" />
      )
      bannerTypeStyling.accessibilityLabel = 'Info'
      break
    case 'error':
      bannerTypeStyling.bg = 'palette.red100'
      bannerTypeStyling.icon = (
        <Icon mr="small" size={20} name="Warning" color="palette.red600" />
      )
      bannerTypeStyling.accessibilityLabel = 'Error'
      break
    case 'confirmation':
      bannerTypeStyling.bg = 'palette.green100'
      break
    default:
      break
  }
  return bannerTypeStyling
}

export const Banner = forwardRef(
  (props: BannerProps, ref: Ref<HTMLDivElement>) => {
    const {
      children,
      dismissable,
      intent = 'info',
      onDismiss,
      ...typeAndSpaceProps
    } = props
    const {
      icon,
      accessibilityLabel,
      ...bannerIntentStyling
    } = getBannerIntentStyling(intent)

    return (
      <Flex
        ref={ref}
        {...bannerIntentStyling}
        borderRadius="medium"
        m="small"
        py="xsmall"
        px="small"
        alignItems="center"
        aria-live="polite"
        role="status"
        {...typeAndSpaceProps}
      >
        {icon}
        <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
        <div>{children}</div>
        {dismissable && (
          <IconButton
            ml="auto"
            style={{ padding: '1px' }}
            onClick={onDismiss}
            hoverStyle={{ background: 'none' }}
            icon="Close"
            size="small"
            label="Dismiss"
            aria-hidden
            color="neutral"
          />
        )}
      </Flex>
    )
  }
)

Banner.defaultProps = { intent: 'info' }
Banner.displayName = 'Banner'
