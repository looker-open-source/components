import { css, RampSizes, styled, truncate } from '../../style'
import { ThemedProps } from '../../types'

export type TextWeights = 'bold' | 'light' | 'normal' | 'semiBold'
export type TextTransforms = 'caps' | 'lower' | 'none' | 'upper'
export type TextAlignments = 'left' | 'center' | 'right'
export type TextVariants = 'critical' | 'positive' | 'secondary' | 'subdued'

export interface TextProps {
  align?: TextAlignments
  variant?: TextVariants
  size?: RampSizes
  textTransform?: TextTransforms
  truncate?: boolean
  weight?: TextWeights
}

function textTransform(transform: TextTransforms | undefined) {
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

export const Text = styled.div<TextProps>`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${props => props.theme.fontSizes[props.size || '4']};
  line-height: ${props => props.theme.lineHeights[props.size || '4']};
  font-weight: ${props => props.theme.fontWeights[props.weight || 'normal']};
  ${props => textTransform(props.textTransform)};
  ${props => alignment(props.align)};
  ${props => truncate(props.truncate || false)};
  ${textVariant};
`
