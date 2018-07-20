// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { css, StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { truncate } from '../../styles/typography'
import { FontRamp, fontSizes } from '../../styles/font_sizes'
import { lineHeights } from '../../styles/line_heights'
import { fontWeights } from '../../styles/font_weights'

export enum HeadingAlignments {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}

export enum HeadingLevels {
  L1 = '1',
  L2 = '2',
  L3 = '3',
  L4 = '4',
  L5 = '5',
  L6 = '6'
}

export enum HeadingTextTransforms {
  Caps = 'caps',
  Lower = 'lower',
  None = 'none',
  Upper = 'upper'
}

export enum HeadingWeights {
  Bold = 'bold',
  ExtraBold = 'extraBold',
  Light = 'light',
  Normal = 'normal',
  SemiBold = 'semiBold'
}

export interface HeadingGeneratorProps {
  /** Headling tag level mapping for h1-h6 */
  level?: HeadingLevels
}

export interface HeadingProps extends HeadingGeneratorProps {
  /** Size mapping from type ramp */
  size?: FontRamp
  /** Font weight */
  weight?: HeadingWeights
  /** Text tranform  */
  transform?: HeadingTextTransforms
  /** Text align */
  align?: HeadingAlignments
  className?: string
  /** Truncate text on overflow */
  truncate?: boolean
}

/**
 * Headings are used to help users understand  what a major section of an interface is about, for example the labeling
 * of a page or a title of a card component.
 */
const HeadingGenerator: React.SFC<HeadingProps> = ({ level, ...args }) => {
  const Tag = `h${level || HeadingLevels.L3}`

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

  return <Tag {...props}>{props.children}</Tag>
}

function textTransform(transform: HeadingTextTransforms | undefined) {
  switch (transform) {
    case HeadingTextTransforms.Upper:
      return css`
        text-transform: uppercase;
      `
    case HeadingTextTransforms.Lower:
      return css`
        text-transform: lowercase;
      `
    case HeadingTextTransforms.Caps:
      return css`
        text-transform: capitalize;
      `
    case HeadingTextTransforms.None:
    default:
      return css`
        text-transform: none;
      `
  }
}

function alignment(align: HeadingAlignments | undefined) {
  return css`
    text-align: ${align || HeadingAlignments.Left};
  `
}

export const Heading = styled<HeadingProps>(HeadingGenerator)`
  font-size: ${props =>
    fontSizes[props.size || props.level || HeadingLevels.L3]};
  line-height: ${props =>
    lineHeights[props.size || props.level || HeadingLevels.L3]};
  font-weight: ${props => fontWeights[props.weight || HeadingWeights.Normal]};
  ${props => textTransform(props.transform)}
  ${props => alignment(props.align)}
  ${props => truncate(props.truncate || false)}
`
