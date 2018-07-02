import * as React from 'react'
import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { ThemeInterface } from './themes'
import { StyledComponentClass } from 'styled-components'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  StyledComponentClass
}

export default styled
