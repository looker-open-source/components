import * as React from 'react'
import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'

export type TableHeaderCellProps = BoxProps<HTMLTableHeaderCellElement>

const InternalTableHeaderCell: React.FC<TableHeaderCellProps> = props => (
  <Box
    is="th"
    py="xsmall"
    fontSize="xsmall"
    color="palette.charcoal400"
    fontWeight="semiBold"
    {...props}
  />
)

const TableHeaderCellFactory = React.forwardRef(
  (props: TableHeaderCellProps, ref) => (
    <InternalTableHeaderCell
      innerRef={ref as React.RefObject<HTMLElement>}
      {...props}
    />
  )
)

export const TableHeaderCell = styled(TableHeaderCellFactory)``
