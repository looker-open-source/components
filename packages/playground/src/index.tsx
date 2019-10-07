import React from 'react'
import ReactDOM from 'react-dom'
import { Banner, Button, GlobalStyle, Paragraph } from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Paragraph fontSize="xxlarge">Hello world</Paragraph>
      <Button>Boot my app!</Button>
      <Banner intent="info">Boot my app!</Banner>
    </>
  </ThemeProvider>
)
/**
 * This is the binding site for the playground. If you want to edit the
 * primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
