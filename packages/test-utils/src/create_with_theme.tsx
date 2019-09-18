import { theme } from '@looker/design-tokens'
import { render } from '@testing-library/react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

export const withThemeProvider = (Component: React.ReactElement<any>) => (
  <ThemeProvider theme={theme}>{Component}</ThemeProvider>
)

export const createWithTheme = (Component: React.ReactElement<any>) =>
  create(withThemeProvider(Component))

export const mountWithTheme = (Component: React.ReactElement<any>) =>
  mount(withThemeProvider(Component))

export const shallowWithTheme = (Component: React.ReactElement<any>) =>
  shallow(withThemeProvider(Component))

export const renderWithTheme = (Component: React.ReactElement<any>) =>
  render(withThemeProvider(Component))
