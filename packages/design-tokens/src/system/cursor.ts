import { CursorProperty } from 'csstype'
import { css } from 'styled-components'

export interface CursorProps {
  cursor?: CursorProperty
}

export const cursor = (props: CursorProps) => css`
  cursor: ${props.cursor};
`
