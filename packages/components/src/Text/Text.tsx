import { TextDecorationProperty } from 'csstype'
import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import {
  getTextTransform,
  TextTransforms,
  textVariant,
  TextVariants,
} from '../../style'
import { ThemedProps } from '../../types'
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

type ComponentType = FunctionComponent<TextProps>
type StyledComponentType = StyledComponent<ComponentType, TextProps>

const InternalText: ComponentType = ({
  is = 'span',
  align,
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
      {...omit(props, ['decoration', 'textTransform', 'variant', 'wrap'])}
    >
      {props.children}
    </Box>
  )
}

const TextFactory = React.forwardRef<StyledComponentType, TextProps>(
  (props: TextProps, ref: Ref<StyledComponentType>) => (
    <InternalText ref={ref} {...props} />
  )
)

/** @component */
export const Text = styled<ComponentType>(TextFactory)`
  text-decoration: ${(props: ThemedProps<TextProps>) => props.decoration};
  ${(props: ThemedProps<TextProps>) => getTextTransform(props.textTransform)};
  ${(props: ThemedProps<TextProps>) => getWrap(props.wrap || false)};
  ${(props: ThemedProps<TextProps>) => textVariant(props.theme, props.variant)};
`

const getWrap = (doWrap: boolean) =>
  doWrap
    ? css`
        overflow-wrap: break-word;
      `
    : false
