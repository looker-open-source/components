import { TextDecorationProperty } from 'csstype'
import * as React from 'react'
import { css, styled } from '../../style'
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
}

const InternalText: React.FC<TextProps> = ({
  is = 'span',
  align,
  decoration,
  textTransform,
  variant,
  wrap,
  lineHeight,
  fontSize = 'medium',
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

const TextFactory = React.forwardRef((props: TextProps, ref) => (
  <InternalText innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const Text = styled<TextProps>(TextFactory)`
  text-decoration: ${props => props.decoration};
  ${props => getTextTransform(props.textTransform)};
  ${props => getWrap(props.wrap || false)};
  ${props => textVariant(props)};
`

const getTextTransform = (transform: TextTransforms | undefined) => {
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

const textVariant = (props: ThemedProps<TextProps>) => {
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

const getWrap = (doWrap: boolean) =>
  doWrap
    ? css`
        overflow-wrap: break-word;
      `
    : false
