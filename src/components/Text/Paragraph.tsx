import * as React from 'react'
import { shouldTruncate, styled } from '../../style'
import { Text, TextProps } from '../Text/Text'

export interface ParagraphProps extends TextProps {
  /** Truncate text on overflow */
  truncate?: boolean
}

const InternalParagraph: React.SFC<ParagraphProps> = ({
  truncate,
  ...props
}) => {
  return (
    <Text is="p" {...props}>
      {props.children}
    </Text>
  )
}
export const Paragraph = styled<ParagraphProps>(InternalParagraph)`
  ${props => shouldTruncate(props.truncate || false)};
`
