/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ThemeCustomizations } from '@looker/design-tokens'
import { generateTheme } from '@looker/design-tokens'
import { ThemeProvider, useTheme } from 'styled-components'
import React, { useMemo } from 'react'
import type { ReactNode } from 'react'

export interface ExtendComponentsTheme {
  themeCustomizations?: ThemeCustomizations
  children?: ReactNode
}

/**
 * This component is designed for making adjustments to the Theme without
 * initializing an entire ComponentsProvider. ExtendComponentsThemeProvider
 * will merge the themeCustomizations with the theme already established.
 *
 * This component is intended for use cases where a portion of page carries
 * a different theme than the rest.
 */
export const ExtendComponentsThemeProvider = ({
  children,
  themeCustomizations,
}: ExtendComponentsTheme) => {
  const parentTheme = useTheme()

  const theme = useMemo(() => {
    return generateTheme(parentTheme, themeCustomizations)
  }, [parentTheme, themeCustomizations])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
