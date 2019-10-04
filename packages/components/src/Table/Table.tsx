import {
  reset,
  space,
  CompatibleHTMLProps,
  SpaceProps,
  BorderProps,
  border,
  LayoutProps,
  layout,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface TableProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    CompatibleHTMLProps<HTMLTableElement> {}

export const Table = styled.table<TableProps>`
  ${reset}
  ${space}
  ${layout}
  ${border}

  border-collapse: collapse;
`

Table.defaultProps = { width: '100%' }
