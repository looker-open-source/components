import React, { FC } from 'react'
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider'

/**
 * Currently this is a simple pass-through to our ThemeProvider but it provides
 * the foundation of for hanging other context or setup code that might be needed
 * to stand-up @looker/components (a likely near-future candidate is i18next)
 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ComponentsProviderProps extends ThemeProviderProps {}

export const ComponentsProvider: FC<ComponentsProviderProps> = (props) => (
  <ThemeProvider {...props} />
)
