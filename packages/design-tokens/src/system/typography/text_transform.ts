import { TextTransformProperty } from 'csstype'
import { css } from 'styled-components'

export interface TextTransformProps {
  textTransform?: TextTransformProperty
}

export const textTransform = (props: TextTransformProps) => css`
  text-transform: ${props.textTransform};
`
