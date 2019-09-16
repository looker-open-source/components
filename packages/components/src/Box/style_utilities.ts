import { CursorProperty } from 'csstype'
import { style } from 'styled-system'

export interface CursorProps {
  cursor?: CursorProperty
}

export const cursor = style({
  prop: 'cursor',
})
