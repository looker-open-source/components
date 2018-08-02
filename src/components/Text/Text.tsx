// import * as React from 'react'
// const classNames = require('classnames')
// import * as styles from './Text.scss'

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

/**
 * Headings are used to help users understand  what a major section of an interface is about, for example the labeling
 * of a page or a title of a card component.
 */
const TextGenerator: React.SFC<TextProps> = ({ element, ...args }) => {
  // This prevents our props from being passed directly to the underlying h* tags, which ultimately
  // would cause some warnings. Ideally we would define the return type for this function, and
  // Typescript would warn us when passing props that are invalid.
  //
  // See https://reactjs.org/warnings/unknown-prop.html
  const props = Object.assign({}, args)
  delete props.align
  delete props.size
  delete props.transform
  delete props.truncate
  delete props.weight
  delete props.weight

  switch (element) {
    case TextElement.Code:
      return <code {...props}>{props.children}</code>
    case TextElement.P:
      return <p {...props}>{props.children}</p>
    case TextElement.Span:
      return <span {...props}>{props.children}</span>
    default:
      return <div {...props}>{props.children}</div>
  }
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

export const Text = styled<TextProps>(TextGenerator)`
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
