/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { ReactNode } from 'react'
import type { Theme } from '@looker/design-tokens'
import { theme as builtIn } from '@looker/design-tokens'
import { ThemeProvider as ActualThemeProvider } from 'styled-components'

export interface ThemeProviderProps {
  theme?: Theme
  children?: ReactNode
}

export const ThemeProvider = ({
  children,
  theme = builtIn,
}: ThemeProviderProps) => (
  <ActualThemeProvider theme={theme}>{children}</ActualThemeProvider>
)
