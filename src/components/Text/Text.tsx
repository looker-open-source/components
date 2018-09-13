import styled, { css } from '../../styled_components'
import {
  charcoal400,
  charcoal500,
  charcoal900,
  green500,
  red500,
} from '../../styles/colors'
import { fontWeights } from '../../styles/font_weights'
import { RampSizes } from '../../styles/ramp_sizes'
import { truncate } from '../../styles/typography'

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

function textVariant(variant: TextVariants | undefined) {
  switch (variant) {
    case 'critical':
      return css`
        color: ${red500};
      `
    case 'positive':
      return css`
        color: ${green500};
      `
    case 'secondary':
      return css`
        color: ${charcoal500};
      `
    case 'subdued':
      return css`
        color: ${charcoal400};
      `
    default:
      return css`
        color: ${charcoal900};
      `
  }
}

function alignment(align: TextAlignments | undefined) {
  return css`
    text-align: ${align || 'left'};
  `
}

export const Text = styled<TextProps, 'div'>('div')`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${props => props.theme.fontRamp[props.size || RampSizes.Four]};
  line-height: ${props =>
    props.theme.lineHeightRamp[props.size || RampSizes.Four]};
  font-weight: ${props => fontWeights[props.weight || 'normal']};
  ${props => textTransform(props.textTransform)};
  ${props => alignment(props.align)};
  ${props => truncate(props.truncate || false)};
  ${props => textVariant(props.variant)};
`
