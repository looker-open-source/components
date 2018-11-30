import * as React from 'react'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

const InternalTable: React.SFC<BoxProps<HTMLTableElement>> = ({ ...props }) => (
  <Box width="100%" is="table" {...props} />
)

export const Table = styled(InternalTable)`
  border-collapse: collapse;
`
