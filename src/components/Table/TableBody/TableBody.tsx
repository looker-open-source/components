import styled from '../../../styled_components'

export enum TableBodyAlignment {
  Bottom = 'botton',
  Middle = 'middle',
  Top = 'top'
}

export enum TableTextAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export interface TableBodyProps {
  align?: TableBodyAlignment
  textAlign?: TableTextAlignment
}

export const TableBody = styled<TableBodyProps, 'tbody'>('tbody')`
  vertical-align: ${props => props.align || TableBodyAlignment.Top};
  text-align: ${props => props.textAlign || TableTextAlignment.Left};
`
