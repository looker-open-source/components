import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../src/themes'

export const createWithTheme = (Component: React.ReactElement<any>) => {
  return create(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}
