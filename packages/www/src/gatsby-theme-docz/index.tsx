import { GlobalStyle } from '@looker/components'
import { theme as LookerTheme } from '@looker/design-tokens'
import { theme, ComponentsProvider } from 'docz'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import components from './components'

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={LookerTheme}>
    <Fragment>
      <GlobalStyle />
      <ComponentsProvider components={components}>
        {children}
      </ComponentsProvider>
    </Fragment>
  </ThemeProvider>
)

export const enhance = theme({})

export default enhance(Theme)
