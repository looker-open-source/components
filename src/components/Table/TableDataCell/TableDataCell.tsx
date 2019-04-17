import * as React from 'react'
import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'

const InternalTableDataCell: React.FC<BoxProps<HTMLTableDataCellElement>> = ({
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

export const TableDataCell = styled(InternalTableDataCell)``
