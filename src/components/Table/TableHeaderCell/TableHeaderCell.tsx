import * as React from 'react'
import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'

const InternalTableHeaderCell: React.FC<
  BoxProps<HTMLTableHeaderCellElement>
> = ({ ...props }) => (
  <Box
    is="th"
    py="xsmall"
    fontSize="xsmall"
    color="palette.charcoal400"
    fontWeight="semiBold"
    {...props}
  />
)

export const TableHeaderCell = styled(InternalTableHeaderCell)``
