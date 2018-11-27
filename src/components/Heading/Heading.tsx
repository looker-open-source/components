import * as React from 'react'
import { css, RampSizes, styled, Theme, truncate, withTheme } from '../../style'
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
  level?: HeadingLevels
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
  level,
  theme,
  ...props
}) => {
  return (
    <Box
      is={level || 'h2'}
      fontSize={getFontSize(theme, level, size)}
      lineHeight={getLineHeight(theme, level, size)}
      fontWeight={getFontWeight(theme, weight)}
      {...props}
    >
      {props.children}
    </Box>
  )
}

function getFontSize(
  theme: Theme,
  level: HeadingLevels | undefined,
  size: RampSizes | undefined
) {
  if (size) {
    return theme.fontSizes[size]
  } else {
    switch (level) {
      case 'h1':
        return theme.fontSizes['2xlarge']
        break
      case 'h2':
        return theme.fontSizes.xlarge
        break
      case 'h3':
        return theme.fontSizes.large
        break
      case 'h4':
        return theme.fontSizes.medium
        break
      case 'h5':
        return theme.fontSizes.small
        break
      case 'h6':
        return theme.fontSizes.xsmall
        break
      default:
        return theme.fontSizes.large
    }
  }
}

function getLineHeight(
  theme: Theme,
  level: HeadingLevels | undefined,
  size: RampSizes | undefined
) {
  if (size) {
    return theme.lineHeights[size]
  } else {
    switch (level) {
      case 'h1':
        return theme.lineHeights['2xlarge']
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
  ${props => truncate(props.truncate || false)};
`
