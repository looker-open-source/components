import * as React from 'react'
import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'

export type TableRowProps = BoxProps<HTMLTableRowElement>

const InternalTableRow: React.FC<TableRowProps> = props => (
  <Box is="tr" {...props} />
)

const TableRowFactory = React.forwardRef((props: TableRowProps, ref) => (
  <InternalTableRow innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const TableRow = styled(TableRowFactory)``
