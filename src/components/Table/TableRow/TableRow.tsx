import * as React from 'react'
import { Box, BoxProps } from '../../Box'

export const TableRow: React.FC<BoxProps<HTMLTableRowElement>> = ({
  ...props
}) => <Box is="tr" {...props} />
