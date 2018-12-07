import { TextDecorationProperty } from 'csstype'
import * as React from 'react'
import { css, RampSizes, styled, Theme, withTheme } from '../../style'
import { ThemedProps } from '../../types'
import { Box, BoxPropsWithout } from '../Box'

export type TextWeights = 'bold' | 'light' | 'normal' | 'semiBold'
export type TextTransforms = 'caps' | 'lower' | 'none' | 'upper'
export type TextAlignments = 'left' | 'center' | 'right'
export type TextElements = 'span' | 'p' | 'code'
export type TextVariants =
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'subdued'
  | 'inverted'

export interface TextProps
  extends BoxPropsWithout<HTMLSpanElement, 'color' | 'size' | 'wrap' | 'is'> {
  /** Base html text element
   *  @default "span"
   */
  is?: TextElements
  /** Align text */
  align?: TextAlignments
  /** Set text decoration property */
  decoration?: TextDecorationProperty
  /** Size mapping from type ramp */
  size?: RampSizes
  /** Font weight */
  weight?: TextWeights
  /** Text tranform  */
  textTransform?: TextTransforms
  /** Adjust style of text with more meaning by using an intent */
  variant?: TextVariants
  /** Should browser insert line breaks within words to prevent text from overflowing its content box  */
  wrap?: boolean
  /** Custom css class */
  className?: string
}

function getTextTransform(transform: TextTransforms | undefined) {
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

function textVariant(props: ThemedProps<TextProps>) {
  switch (props.variant) {
    case 'critical':
      return css`
        color: ${props.theme.colors.palette.red500};
      `
    case 'positive':
      return css`
        color: ${props.theme.colors.palette.green500};
      `
    case 'secondary':
      return css`
        color: ${props.theme.colors.palette.charcoal500};
      `
    case 'subdued':
      return css`
        color: ${props.theme.colors.palette.charcoal400};
      `
    case 'inverted':
      return css`
        color: ${props.theme.colors.palette.textInverted};
      `
    default:
      return css`
        color: ${props.theme.colors.palette.charcoal900};
      `
  }
}

function alignment(align: TextAlignments | undefined) {
  return css`
    text-align: ${align || 'left'};
  `
}

function getWrap(doWrap: boolean) {
  if (doWrap) {
    return css`
      overflow-wrap: break-word;
    `
  }
  return ``
}

function getFontWeight(theme: Theme, weight: TextWeights | undefined) {
  return weight ? theme.fontWeights[weight] : theme.fontWeights.normal
}

const InternalText: React.SFC<ThemedProps<TextProps>> = ({
  is,
  align,
  decoration,
  size,
  weight,
  textTransform,
  variant,
  wrap,
  theme,
  ...props
}) => {
  return (
    <Box
      is={is || 'span'}
      fontSize={theme.fontSizes[size || 'medium']}
      lineHeight={theme.lineHeights[size || 'medium']}
      fontWeight={getFontWeight(theme, weight)}
      {...props}
    >
      {props.children}
    </Box>
  )
}

export const Text = styled<TextProps>(withTheme(InternalText))`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: ${props => props.decoration};
  ${props => getTextTransform(props.textTransform)};
  ${props => alignment(props.align)};
  ${props => getWrap(props.wrap || false)};
  ${textVariant};
`
