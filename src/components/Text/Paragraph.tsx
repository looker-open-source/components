import * as React from 'react'
import { shouldTruncate, styled } from '../../style'
import { Text, TextProps } from '../Text/Text'

export interface ParagraphProps extends TextProps {
  /** Truncate text on overflow */
  truncate?: boolean
}

const InternalParagraph: React.FC<ParagraphProps> = ({
  truncate,
  ...props
}) => {
  return (
    <Text is="p" {...props}>
      {props.children}
    </Text>
  )
}

const ParagraphFactory = React.forwardRef((props: ParagraphProps, ref) => (
  <InternalParagraph innerRef={ref} {...props} />
))

export const Paragraph = styled<ParagraphProps>(ParagraphFactory)`
  ${props => shouldTruncate(props.truncate || false)};
`
