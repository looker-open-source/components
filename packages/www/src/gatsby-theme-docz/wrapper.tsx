import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@looker/design-tokens'

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
