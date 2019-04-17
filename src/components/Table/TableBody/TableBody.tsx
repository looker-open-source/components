import * as React from 'react'
import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'

export type TableBodyAlignment = 'bottom' | 'middle' | 'top'
export type TableTextAlignment = 'center' | 'left' | 'right'

export interface TableBodyProps extends BoxProps<HTMLTableSectionElement> {
  align?: TableBodyAlignment
  textAlign?: TableTextAlignment
}

const InternalTableBody: React.FC<TableBodyProps> = ({ ...props }) => (
  <Box
    verticalAlign={props.align || 'top'}
    textAlign={props.textAlign || 'left'}
    is="tbody"
    {...props}
  />
)

export const TableBody = styled<TableBodyProps>(InternalTableBody)``
