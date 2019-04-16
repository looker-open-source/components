import * as React from 'react'
import { Box, BoxProps } from '../../Box'

export const TableDataCell: React.FC<BoxProps<HTMLTableDataCellElement>> = ({
  ...props
}) => (
  <Box
    is="td"
    px="none"
    py="xsmall"
    borderTop="solid 1px"
    borderColor="palette.charcoal200"
    {...props}
  />
)
