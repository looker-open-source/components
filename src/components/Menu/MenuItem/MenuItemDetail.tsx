import * as React from 'react'
import { palette } from '../../../style'
import { Box } from '../../Box'

export const MenuItemDetail: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Box pl="large" ml="auto" fontSize="xsmall" color={palette.charcoal300}>
    {children}
  </Box>
)
