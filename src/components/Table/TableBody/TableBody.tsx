import * as React from 'react'
import { Box, BoxProps } from '../../Box'

export type TableBodyAlignment = 'bottom' | 'middle' | 'top'
export type TableTextAlignment = 'center' | 'left' | 'right'

export interface TableBodyProps extends BoxProps<HTMLTableSectionElement> {
  align?: TableBodyAlignment
  textAlign?: TableTextAlignment
}

export const TableBody: React.FC<TableBodyProps> = ({ ...props }) => (
  <Box
    verticalAlign={props.align || 'top'}
    textAlign={props.textAlign || 'left'}
    is="tbody"
    {...props}
  />
)
