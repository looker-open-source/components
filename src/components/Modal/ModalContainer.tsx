import * as React from 'react'
import { Theme, withTheme } from '../../style'
import { Box } from '../Box'

export const Internal: React.SFC<{ theme: Theme }> = ({ theme, children }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    zIndex={theme.components.Modal.zIndex || 1}
    position="fixed"
    bottom="0"
    top="0"
    left="0"
    right="0"
  >
    {children}
  </Box>
)

export const ModalContainer = withTheme(Internal)
