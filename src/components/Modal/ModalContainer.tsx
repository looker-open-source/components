import * as React from 'react'
import { Box } from '../Box'
import { CustomizableModalAttributes } from './Modal'

export const ModalContainer: React.SFC = ({ children }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    zIndex={CustomizableModalAttributes.zIndex || 1}
    position="fixed"
    bottom="0"
    top="0"
    left="0"
    right="0"
  >
    {children}
  </Box>
)
