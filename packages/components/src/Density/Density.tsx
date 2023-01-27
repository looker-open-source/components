/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { DensityRamp } from '@looker/design-tokens'
import { ThemeProvider, useTheme } from 'styled-components'

export type DensityProps = React.PropsWithChildren<{
  scale: DensityRamp
}>

type PartialBy<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>
export type PartialDensityProps = PartialBy<DensityProps, 'scale'>

/**
 * Utility component which alters the default density within the theme.
 * Wrap <Density density={1}> around other components to apply the specified
 * density value to all of the nested components.
 *
 * NOTE: If `density` is explicitly specified on a component within `Density`
 * the explicitly specified value will be used instead.
 */
export const Density = ({ scale, children }: DensityProps) => {
  const theme = useTheme()
  theme.defaults.density = scale

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

/**
 * Shortcut to `<Density scale={1} />`
 */
export const Density1 = (props: PartialDensityProps) => (
  <Density scale={1} {...props} />
)
/**
 * Shortcut to `<Density scale={0} />`
 */
export const Density0 = (props: PartialDensityProps) => (
  <Density scale={0} {...props} />
)
/**
 * Shortcut to `<Density scale={-1} />`
 */
export const DensityNegative1 = (props: PartialDensityProps) => (
  <Density scale={-1} {...props} />
)
/**
 * Shortcut to `<Density scale={-2} />`
 */
export const DensityNegative2 = (props: PartialDensityProps) => (
  <Density scale={-2} {...props} />
)
/**
 * Shortcut to `<Density scale={-3} />`
 */
export const DensityNegative3 = (props: PartialDensityProps) => (
  <Density scale={-3} {...props} />
)
