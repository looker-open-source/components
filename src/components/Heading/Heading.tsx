// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { css, StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { truncate } from '../../styles/typography'
// import { lineHeights } from '../../styles/line_heights'
import { fontWeights } from '../../styles/font_weights'
import { RampSizes } from '../../styles/ramp_sizes'

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
  size?: RampSizes
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

const convertHeadingLevelToRampSize = (level: HeadingLevels | undefined) => {
  switch (level) {
    case HeadingLevels.L1:
      return RampSizes.One
    case HeadingLevels.L2:
      return RampSizes.Two
    case HeadingLevels.L3:
      return RampSizes.Three
    case HeadingLevels.L4:
      return RampSizes.Four
    case HeadingLevels.L5:
      return RampSizes.Five
    case HeadingLevels.L6:
      return RampSizes.Six
    default:
      return RampSizes.Three
  }
}

/**
 * Headings are used to help users understand  what a major section of an interface is about, for example the labeling
 * of a page or a title of a card component.
 */
const HeadingGenerator: React.SFC<HeadingProps> = ({ level, ...args }) => {
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

  switch (level) {
    case HeadingLevels.L1:
      return <h1 {...props}>{props.children}</h1>
    case HeadingLevels.L2:
      return <h2 {...props}>{props.children}</h2>
    case HeadingLevels.L4:
      return <h4 {...props}>{props.children}</h4>
    case HeadingLevels.L5:
      return <h5 {...props}>{props.children}</h5>
    case HeadingLevels.L6:
      return <h6 {...props}>{props.children}</h6>
    case HeadingLevels.L3:
    default:
      return <h3 {...props}>{props.children}</h3>
  }
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
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  font-size: ${props =>
    props.theme.fontRamp[
      props.size || convertHeadingLevelToRampSize(props.level)
    ]};
  line-height: ${props =>
    props.theme.lineHeightRamp[
      props.size || convertHeadingLevelToRampSize(props.level)
    ]};
  font-weight: ${props => fontWeights[props.weight || HeadingWeights.Normal]};
  ${props => textTransform(props.transform)}
  ${props => alignment(props.align)}
  ${props => truncate(props.truncate || false)}
`
