import React, { FC } from 'react'
import { theme as builtIn, Theme } from '@looker/design-tokens'
import { ThemeProvider as ActualThemeProvider } from 'styled-components'

export interface ThemeProviderProps {
  theme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = builtIn,
}) => <ActualThemeProvider theme={theme}>{children}</ActualThemeProvider>
