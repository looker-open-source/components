import * as React from 'react'
import {
  css,
  RampSizes,
  shouldTruncate,
  styled,
  Theme,
  withTheme,
} from '../../style'
import { ThemedProps } from '../../types'
import { Box, BoxPropsWithout } from '../Box'

export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingTextTransforms = 'caps' | 'lower' | 'none' | 'upper'
export type HeadingWeights =
  | 'bold'
  | 'extraBold'
  | 'light'
  | 'normal'
  | 'semiBold'

export interface HeadingProps
  extends BoxPropsWithout<HTMLHeadingElement, 'color' | 'size' | 'truncate'> {
  /** Heading level from h1-h6 */
  is?: HeadingLevels
  /** Size mapping from type ramp */
  size?: RampSizes
  /** Font weight */
  weight?: HeadingWeights
  /** Text tranform  */
  transform?: HeadingTextTransforms
  /** Truncate heading text */
  truncate?: boolean
  /** Custom css class */
  className?: string
}

const InternalHeading: React.SFC<ThemedProps<HeadingProps>> = ({
  size,
  weight,
  transform,
  truncate,
  is,
  theme,
  ...props
}) => {
  return (
    <Box
      is={is || 'h2'}
      fontSize={getFontSize(theme, is, size)}
      lineHeight={getLineHeight(theme, is, size)}
      fontWeight={getFontWeight(theme, weight)}
      {...props}
    >
      {props.children}
    </Box>
  )
}

function getFontSize(
  theme: Theme,
  is: HeadingLevels | undefined,
  size: RampSizes | undefined
) {
  if (size) {
    return theme.fontSizes[size]
  } else {
    switch (is) {
      case 'h1':
        return theme.fontSizes.xxlarge
      case 'h2':
        return theme.fontSizes.xlarge
      case 'h3':
        return theme.fontSizes.large
      case 'h4':
        return theme.fontSizes.medium
      case 'h5':
        return theme.fontSizes.small
      case 'h6':
        return theme.fontSizes.xsmall
      default:
        return theme.fontSizes.large
    }
  }
}

function getLineHeight(
  theme: Theme,
  is: HeadingLevels | undefined,
  size: RampSizes | undefined
) {
  if (size) {
    return theme.lineHeights[size]
  } else {
    switch (is) {
      case 'h1':
        return theme.lineHeights.xxlarge
      case 'h2':
        return theme.lineHeights.xlarge
      case 'h3':
        return theme.lineHeights.large
      case 'h4':
        return theme.lineHeights.medium
      case 'h5':
        return theme.lineHeights.small
      case 'h6':
        return theme.lineHeights.xsmall
      default:
        return theme.lineHeights.large
    }
  }
}

function getFontWeight(theme: Theme, weight: HeadingWeights | undefined) {
  return weight ? theme.fontWeights[weight] : theme.fontWeights.normal
}

function textTransform(transform: HeadingTextTransforms | undefined) {
  switch (transform) {
    case 'upper':
      return css`
        text-transform: uppercase;
      `
    case 'lower':
      return css`
        text-transform: lowercase;
      `
    case 'caps':
      return css`
        text-transform: capitalize;
      `
    case 'none':
    default:
      return css`
        text-transform: none;
      `
  }
}

export const Heading = styled<HeadingProps>(withTheme(InternalHeading))`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${props => textTransform(props.transform)};
  ${props => shouldTruncate(props.truncate || false)};
`
