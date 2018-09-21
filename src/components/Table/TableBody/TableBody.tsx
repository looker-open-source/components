import styled from '../../../styled_components'

export type TableBodyAlignment = 'bottom' | 'middle' | 'top'
export type TableTextAlignment = 'center' | 'left' | 'right'

export interface TableBodyProps {
  align?: TableBodyAlignment
  textAlign?: TableTextAlignment
}

export const TableBody = styled.tbody<TableBodyProps>`
  vertical-align: ${props => props.align || 'top'};
  text-align: ${props => props.textAlign || 'left'};
`
