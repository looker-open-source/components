import { palette, CompatibleHTMLProps } from '@looker/design-tokens'
import omit from 'lodash/omit'
import React from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import { Box } from '../Layout/Box'
import { Flex } from '../Layout/Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'

export type BannerIntent = 'warning' | 'info' | 'error' | 'confirmation'

export interface BannerProps
  extends CompatibleHTMLProps<HTMLElement>,
    SpaceProps {
  intent: BannerIntent
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
      bannerTypeStyling.accessibilityLabel = ''
      break
    default:
      break
  }
  return bannerTypeStyling
}

const CloseBannerIcon = styled(Icon)`
  opacity: 0.2;
  transition: opacity
    ${props =>
      `${props.theme.transitions.durationRapid} ${props.theme.easings.ease}`};
  vertical-align: middle;

  :hover {
    opacity: 0.4;
  }
`

const VisuallyHiddenText = styled(Text)`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const Banner = React.forwardRef(
  (props: BannerProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, dismissable, intent, onDismiss, ...spaceProps } = omit(
      props,
      'as',
      'ref'
    )
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
        <VisuallyHiddenText>{accessibilityLabel}</VisuallyHiddenText>
        <div>{children}</div>
        {dismissable && (
          <Box
            as="button"
            ml="auto"
            bg="transparent"
            onClick={onDismiss}
            aria-hidden
          >
            <CloseBannerIcon
              name="Close"
              size={24}
              color={palette.charcoal900}
            />
          </Box>
        )}
      </Flex>
    )
  }
)

// /** @component */
// export const Banner = styled(BannerFactory)<BannerProps>``
