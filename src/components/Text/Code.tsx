import * as React from 'react'
import { styled, theme } from '../../style'
import { Text, TextProps } from '../Text/Text'

const InternalCode: React.FC<TextProps> = props => {
  return (
    <Text is="code" fontFamily={theme.fonts.code} {...props}>
      {props.children}
    </Text>
  )
}

const CodeFactory = React.forwardRef((props: TextProps, ref) => (
  <InternalCode innerRef={ref} {...props} />
))

export const Code = styled(CodeFactory)``
