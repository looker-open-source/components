// TSLint disabled rules
//
// no-unnecessary-type-assertion: Typescript complains that the `as ThemedStyledComponentsModule`
// performs unnecessary casting, which is not true. Without this line the Themes attached to component prop
// types would not type-check correctly.
//
// no-unused-variable: React import is required to build the correct declaration files.
// Sadly, Typescript has a hard time understanding this until compile time.
//
/* tslint:disable:no-unnecessary-type-assertion  no-unused-variable */

// Required by ThemeProvider to compile the proper declaration files.
import * as React from 'react'
import * as styledComponents from 'styled-components'
import { ThemeInterface } from './themes'
export { StyledComponentClass } from 'styled-components'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>

export { css, injectGlobal, keyframes, ThemeProvider }

export default styled
