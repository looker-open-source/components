import * as React from 'react'
import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'

export type TableDataCellProps = BoxProps<HTMLTableDataCellElement>

const InternalTableDataCell: React.FC<TableDataCellProps> = props => (
  <Box
    is="td"
    px="none"
    py="xsmall"
    borderTop="solid 1px"
    borderColor="palette.charcoal200"
    {...props}
  />
)

const TableDataCellFactory = React.forwardRef(
  (props: TableDataCellProps, ref) => (
    <InternalTableDataCell
      innerRef={ref as React.RefObject<HTMLElement>}
      {...props}
    />
  )
)

export const TableDataCell = styled(TableDataCellFactory)``
