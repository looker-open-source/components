import { TextDecorationProperty } from 'csstype'
import * as React from 'react'
import { css, styled, withTheme } from '../../style'
import { ThemedProps } from '../../types'
import { Box, BoxPropsWithout } from '../Box'

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
  extends BoxPropsWithout<HTMLSpanElement, 'wrap' | 'is'> {
  /** Base html text element
   *  @default "span"
   */
  is?: TextElements
  /** Align text */
  align?: TextAlignments
  /** Set text decoration property */
  decoration?: TextDecorationProperty
  /** Size mapping from type ramp */
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
      return false
  }
}

function getWrap(doWrap: boolean) {
  if (doWrap) {
    return css`
      overflow-wrap: break-word;
    `
  }
  return ``
}

const InternalText: React.SFC<ThemedProps<TextProps>> = ({
  is = 'span',
  align,
  decoration,
  textTransform,
  variant,
  wrap,
  theme,
  lineHeight,
  fontSize,
  fontWeight,
  ...props
}) => {
  return (
    <Box
      is={is}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight || fontSize}
      textAlign={align}
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
  ${props => getWrap(props.wrap || false)};
  ${textVariant};
`
