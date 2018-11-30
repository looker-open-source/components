import * as React from 'react'
import { Box, BoxProps } from '../../Box'

export const TableHeaderCell: React.SFC<
  BoxProps<HTMLTableHeaderCellElement>
> = ({ ...props }) => (
  <Box
    is="th"
    py="small"
    fontSize={6}
    color="palette.charcoal400"
    fontWeight={600}
    {...props}
  />
)
