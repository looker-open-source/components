// Required by ThemeProvider to compile the proper declaration files.
import * as React from 'react'
import * as styledComponents from 'styled-components'
// tslint:disable-next-line:no-duplicate-imports
import { InterpolationValue, ThemedStyledProps } from 'styled-components'
import { Theme } from './theme'

const {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents

// Typescript complains that the `as ThemedStyledComponentsModule` performs
// unnecessary casting, which is not true. Without this line the Themes
// attached to component prop types would not type-check correctly.
//
// tslint:disable-next-line:no-unnecessary-type-assertion
const styled = (styledComponents as styledComponents.ThemedStyledComponentsModule<
  Theme
>).default

export {
  css,
  injectGlobal,
  keyframes,
  React,
  ThemeProvider,
  ThemedStyledProps,
  InterpolationValue,
  withTheme,
}
export default styled
