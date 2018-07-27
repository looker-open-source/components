import * as React from 'react'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import {ThemeProvider} from "styled-components"
import theme from "../../src/themes";

export const createWithTheme = (Component) => {
  return create(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}
