import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import {
  getTextTransform,
  ResponsiveFontSize,
  shouldTruncate,
  TextTransforms,
  textVariant,
  TextVariants,
} from '@looker/design-tokens'
import { Box, BoxPropsWithout } from '../Box'

export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingTextTransforms = 'caps' | 'lower' | 'none' | 'upper'

export interface HeadingProps
  extends BoxPropsWithout<HTMLHeadingElement, 'truncate'> {
  /** Heading level from h1-h6 */
  is?: HeadingLevels
  /** Text tranform  */
  textTransform?: TextTransforms
  /** Truncate heading text */
  truncate?: boolean
  /** Truncate heading at a specified number of lines (whole number) */
  truncateLines?: number
  /** Custom css class */
  className?: string
  /** Adjust style of text with more meaning by using an intent */
  variant?: TextVariants
}

type ComponentType = FunctionComponent<HeadingProps>
type StyledComponentType = StyledComponent<ComponentType, HeadingProps>

const InternalHeading: ComponentType = ({
  fontSize,
  fontWeight,
  lineHeight,
  is,
  ...props
}) => (
  <Box
    is={is || 'h2'}
    fontSize={fontSize || headingLevelSize(is)}
    lineHeight={lineHeight || headingLineHeight(is, fontSize)}
    fontWeight={fontWeight || 'normal'}
    {...omit(props, ['textTransform', 'truncate', 'truncateLines'])}
  >
    {props.children}
  </Box>
)

const HeadingFactory = React.forwardRef<StyledComponentType, HeadingProps>(
  (props: HeadingProps, ref: Ref<StyledComponentType>) => (
    <InternalHeading ref={ref} {...props} />
  )
)

/** @component */
export const Heading = styled<ComponentType>(HeadingFactory)`
  ${props => getTextTransform(props.textTransform)};
  ${props => shouldTruncate(props.truncate, props.truncateLines)};
  ${props => textVariant(props.theme, props.variant)};
`

const headingLevelSize = (is?: HeadingLevels) => {
  switch (is) {
    case 'h1':
      return 'xxlarge'
    case 'h2':
      return 'xlarge'
    case 'h3':
      return 'large'
    case 'h4':
      return 'medium'
    case 'h5':
      return 'small'
    case 'h6':
      return 'xsmall'
    default:
      return 'large'
  }
}

const headingLineHeight = (is?: HeadingLevels, size?: ResponsiveFontSize) => {
  if (size) return size

  switch (is) {
    case 'h1':
      return 'xxlarge'
    case 'h2':
      return 'xlarge'
    case 'h3':
      return 'large'
    case 'h4':
      return 'medium'
    case 'h5':
      return 'small'
    case 'h6':
      return 'xsmall'
    default:
      return 'large'
  }
}
