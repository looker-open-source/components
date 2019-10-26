import React, { FC, ReactNode } from 'react'
import { palette } from 'looker-design-tokens'
import { Box } from '../../Layout/Box'

export const MenuItemDetail: FC<{ children: ReactNode }> = ({ children }) => (
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
