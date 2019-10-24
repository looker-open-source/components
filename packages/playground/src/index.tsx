import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from 'looker-lens'
import { theme } from 'looker-design-tokens'
import { ThemeProvider } from 'styled-components'

import { PopoverExamples } from './Popovers/Examples'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <PopoverExamples />
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
