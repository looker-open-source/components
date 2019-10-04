import {
  reset,
  CompatibleHTMLProps,
  border,
  BorderProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface TableRowProps
  extends BorderProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLTableRowElement> {}

export const TableRow = styled.tr<TableRowProps>`
  ${reset}
  ${border}
  ${typography}
`
