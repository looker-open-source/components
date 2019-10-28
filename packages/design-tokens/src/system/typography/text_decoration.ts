import { css } from 'styled-components'

export interface TextDecorationProps {
  textDecoration?: string
}

export const textDecoration = (props: TextDecorationProps) => css`
  text-decoration: ${props.textDecoration};
`
