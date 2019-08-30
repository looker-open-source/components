import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { palette, theme } from '../../style'
import { Box, BoxProps } from '../Box'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'

export type BannerIntent = 'warning' | 'info' | 'error' | 'confirmation'

export interface BannerProps extends BoxProps<HTMLDivElement> {
  intent: BannerIntent
  dismissable?: boolean
  onDismiss?: () => void
}

interface BannerTypeStyling {
  bg?: string
  accessibilityLabel?: string
  icon?: JSX.Element
}

type ComponentType = FunctionComponent<BannerProps>
type StyledComponentType = StyledComponent<ComponentType, BannerProps>

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
  transition: opactiy ${theme.transitions.durationRapid} ${theme.easings.ease};
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

const InternalBanner: ComponentType = ({
  children,
  dismissable,
  intent,
  onDismiss,
  ...boxProps
}) => {
  const {
    icon,
    accessibilityLabel,
    ...bannerIntentStyling
  } = getBannerIntentStyling(intent)

  return (
    <Flex
      {...bannerIntentStyling}
      borderRadius="medium"
      m="small"
      py="xsmall"
      px="small"
      alignItems="center"
      aria-live="polite"
      role="status"
      {...omit(boxProps, ['ref'])}
    >
      {icon}
      <VisuallyHiddenText>{accessibilityLabel}</VisuallyHiddenText>
      <Box>{children}</Box>
      {dismissable && (
        <Box
          is="button"
          ml="auto"
          bg="transparent"
          onClick={onDismiss}
          aria-hidden
        >
          <CloseBannerIcon name="Close" size={24} color={palette.charcoal900} />
        </Box>
      )}
    </Flex>
  )
}

const BannerFactory = React.forwardRef<StyledComponentType, BannerProps>(
  (props: BannerProps, ref: Ref<StyledComponentType>) => (
    <InternalBanner ref={ref} {...props} />
  )
)

/** @component */
export const Banner = styled<ComponentType>(BannerFactory)``
