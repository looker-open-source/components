import * as React from 'react'
import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'

const InternalTableRow: React.FC<BoxProps<HTMLTableRowElement>> = ({
  ...props
}) => <Box is="tr" {...props} />

export const TableRow = styled(InternalTableRow)``
