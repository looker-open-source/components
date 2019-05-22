import * as React from 'react'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export type TableProps = BoxProps<HTMLTableElement>

const InternalTable: React.FC<TableProps> = props => (
  <Box width="100%" is="table" {...props} />
)

const TableFactory = React.forwardRef((props: TableProps, ref) => (
  <InternalTable innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const Table = styled(TableFactory)`
  border-collapse: collapse;
`
