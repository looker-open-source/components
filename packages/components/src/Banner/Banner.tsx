import { CompatibleHTMLProps, SpaceProps } from 'looker-design-tokens'
import React, { forwardRef, Ref } from 'react'
import { IconButton } from '../Button'
import { Icon } from '../Icon'
import { Flex } from '../Layout/Flex'
import { VisuallyHidden } from '../VisuallyHidden'

export type BannerIntent = 'warning' | 'info' | 'error' | 'confirmation'

export interface BannerProps
  extends CompatibleHTMLProps<HTMLElement>,
    SpaceProps {
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
      ...spaceProps
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
        {...spaceProps}
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
