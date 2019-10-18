import React from 'react'
import ReactDOM from 'react-dom'
import { Box, FieldColor, GlobalStyle } from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Box m="xxxlarge" justifyContent="center" alignItems="center">
          <FieldColor value="red" hideInput />
          <FieldColor value="black" />
        </Box>
      </>
    </ThemeProvider>
  )
}
/**
 * This is the binding site for the playground. If you want to edit the
 * primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
