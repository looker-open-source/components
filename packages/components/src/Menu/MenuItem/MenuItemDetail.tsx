import * as React from 'react'
import { palette } from '@looker/design-tokens'
import { Box } from '../../Box'

export const MenuItemDetail: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Box
    pl="large"
    ml="auto"
    mr="medium"
    fontSize="xsmall"
    color={palette.charcoal300}
  >
    {children}
  </Box>
)
