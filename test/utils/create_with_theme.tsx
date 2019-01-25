import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../src/style/theme'

export const withThemeProvider = (Component: React.ReactElement<any>) => (
  <ThemeProvider theme={theme}>{Component}</ThemeProvider>
)

export const createWithTheme = (Component: React.ReactElement<any>) =>
  create(withThemeProvider(Component))

export const mountWithTheme = (Component: React.ReactElement<any>) =>
  mount(withThemeProvider(Component))

export const shallowWithTheme = (Component: React.ReactElement<any>) =>
  shallow(withThemeProvider(Component))
