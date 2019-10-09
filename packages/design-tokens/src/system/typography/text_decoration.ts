import { TextDecorationProperty } from 'csstype'
import { css } from 'styled-components'

export interface TextDecorationProps {
  textDecoration?: TextDecorationProperty<any>
}

export const textDecoration = (props: TextDecorationProps) => css`
  text-decoration: ${props.textDecoration};
`
