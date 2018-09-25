import * as React from 'react'
import { truncate } from '../../style'
import { reset } from '../../style/helpers'
import styled, { css } from '../../styled_components'
import { RampSizes } from '../../theme/font_sizes'

export type HeadingAlignments = 'left' | 'center' | 'right'
export type HeadingLevels = '1' | '2' | '3' | '4' | '5' | '6'
export type HeadingTextTransforms = 'caps' | 'lower' | 'none' | 'upper'
export type HeadingWeights =
  | 'bold'
  | 'extraBold'
  | 'light'
  | 'normal'
  | 'semiBold'
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
    case '1':
      return <h1 {...props}>{props.children}</h1>
    case '2':
      return <h2 {...props}>{props.children}</h2>
    case '4':
      return <h4 {...props}>{props.children}</h4>
    case '5':
      return <h5 {...props}>{props.children}</h5>
    case '6':
      return <h6 {...props}>{props.children}</h6>
    case '3':
    default:
      return <h3 {...props}>{props.children}</h3>
  }
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

function alignment(align: HeadingAlignments | undefined) {
  return css`
    text-align: ${align || 'left'};
  `
}

export const Heading = styled<HeadingProps>(HeadingGenerator)`
  ${reset};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  font-size: ${props => props.theme.fontRamp[props.size || props.level || '3']};
  line-height: ${props =>
    props.theme.lineHeightRamp[props.size || props.level || '3']};
  font-weight: ${props => props.theme.fontWeights[props.weight || 'normal']};
  ${props => textTransform(props.transform)}
  ${props => alignment(props.align)}
  ${props => truncate(props.truncate || false)}
`
