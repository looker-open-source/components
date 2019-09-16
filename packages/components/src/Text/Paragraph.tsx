import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { shouldTruncate } from '../../style'
import { Text, TextProps } from '../Text/Text'

export interface ParagraphProps extends TextProps {
  /** Truncate text on overflow */
  truncate?: boolean
  /** Truncate text at a specified number of lines (whole number) */
  truncateLines?: number
}

type ComponentType = FunctionComponent<ParagraphProps>
type StyledComponentType = StyledComponent<ComponentType, ParagraphProps>

const InternalParagraph: ComponentType = props => {
  return (
    <Text is="p" {...omit(props, ['truncate', 'truncateLines'])}>
      {props.children}
    </Text>
  )
}

const ParagraphFactory = React.forwardRef<StyledComponentType, ParagraphProps>(
  (props: ParagraphProps, ref: Ref<StyledComponentType>) => (
    <InternalParagraph ref={ref} {...props} />
  )
)

/** @component */
export const Paragraph = styled<ComponentType>(ParagraphFactory)`
  ${props => shouldTruncate(props.truncate, props.truncateLines)};
`
