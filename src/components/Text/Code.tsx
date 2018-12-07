import * as React from 'react'
import { theme } from '../../style'
import { Text, TextProps } from '../Text/Text'

const InternalCode: React.SFC<TextProps> = ({ ...props }) => {
  return (
    <Text is="code" fontFamily={theme.fonts.code} {...props}>
      {props.children}
    </Text>
  )
}
export const Code = InternalCode
