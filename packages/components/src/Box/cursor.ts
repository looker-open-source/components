import { CursorProperty } from 'csstype'
import { css } from 'styled-components'

export interface CursorProps {
  cursor?: CursorProperty
  disabled?: boolean
  onClick?: (event: React.SyntheticEvent) => void
}

export const cursor = (props: CursorProps) =>
  css`
    cursor: ${props.cursor};
  `

// css`
//   cursor: ${props.cursor
//     ? props.cursor
//     : props.onClick && !props.disabled
//     ? 'pointer'
//     : null};
// `
