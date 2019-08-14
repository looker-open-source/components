import { TextDecorationProperty } from 'csstype'
import * as React from 'react'
import {
  css,
  getTextTransform,
  styled,
  TextTransforms,
  textVariant,
  TextVariants,
} from '../../style'
import { Box, BoxPropsWithout } from '../Box'

export type TextAlignments = 'left' | 'center' | 'right'
export type TextElements = 'span' | 'p' | 'code'

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
  <InternalText innerRef={ref} {...props} />
))

export const Text = styled<TextProps>(TextFactory)`
  text-decoration: ${props => props.decoration};
  ${props => getTextTransform(props.textTransform)};
  ${props => getWrap(props.wrap || false)};
  ${props => textVariant(props.theme, props.variant)};
`

const getWrap = (doWrap: boolean) =>
  doWrap
    ? css`
        overflow-wrap: break-word;
      `
    : false
