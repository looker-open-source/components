import React from 'react'
import ReactDOM from 'react-dom'
import {
  Button,
  ButtonOutline,
  ButtonTransparent,
  GlobalStyle,
} from 'looker-lens'
import { theme } from 'looker-design-tokens'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <br />
        <br />
        <Button iconAfter="Trash" color="danger">
          default
        </Button>
        <br />
        <br />
        <ButtonTransparent>transparent</ButtonTransparent>
        <br />
        <br />
        <ButtonOutline>outline</ButtonOutline>
        <br />
        <br />
        <Button disabled>I am disabled</Button>
        <br />
        <br />
        <Button variant="outline">outline</Button>
        <br />
        <br />
        <Button variant="transparent">transparent</Button>
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
