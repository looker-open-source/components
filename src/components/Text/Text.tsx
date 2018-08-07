import * as React from 'react'
import styled, { css, StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { truncate } from '../../styles/typography'
import { lineHeights } from '../../styles/line_heights'
import { fontWeights } from '../../styles/font_weights'
import { RampSizes } from '../../styles/ramp_sizes'

export enum TextWeights {
  Bold = 'bold',
  Light = 'light',
  Normal = 'normal',
  SemiBold = 'semiBold'
}

export enum TextElement {
  P = 'p',
  Span = 'span',
  Code = 'code'
}

export enum TextTransforms {
  Caps = 'caps',
  Lower = 'lower',
  None = 'none',
  Upper = 'upper'
}

export enum TextAlignments {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}

export enum TextVariants {
  Critical = 'critical',
  Positive = 'positive',
  Secondary = 'secondary',
  Subdued = 'subdued'
}

export interface TextGeneratorProps {
  // Text wrapping element
  element?: TextElement
}

export interface TextProps extends TextGeneratorProps {
  align?: TextAlignments
  variant?: TextVariants
  size?: RampSizes
  transform?: TextTransforms
  truncate?: boolean
  weight?: TextWeights
}

function textTransform(transform: TextTransforms | undefined) {
  switch (transform) {
    case TextTransforms.Upper:
      return css`
        text-transform: uppercase;
      `
    case TextTransforms.Lower:
      return css`
        text-transform: lowercase;
      `
    case TextTransforms.Caps:
      return css`
        text-transform: capitalize;
      `
    case TextTransforms.None:
    default:
      return css`
        text-transform: none;
      `
  }
}

function alignment(align: TextAlignments | undefined) {
  return css`
    text-align: ${align || TextAlignments.Left};
  `
}

export const Text = styled<TextProps, 'div'>('div')`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${props => props.theme.fontRamp[props.size || RampSizes.Four]};
  line-height: ${props => lineHeights[props.size || RampSizes.Four]};
  font-weight: ${props => fontWeights[props.weight || TextWeights.Normal]};
  ${props => textTransform(props.transform)}
  ${props => alignment(props.align)}
  ${props => truncate(props.truncate || false)}
`
