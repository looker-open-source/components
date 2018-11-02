import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/style'

theme.components.Overlay.zIndex = 100

export default class ThemeWrapper extends React.Component {
  public render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}
